import { Request, Response } from 'express';
import {
	GeneralErrorCodes,
	JoinCampaignRequestErrorCodes,
} from '../helpers/error-codes';
import JoinCampaignRequest from '../models/join-campaign-request.model';
import Campaign from '../models/campaign.model';

export const createRequest = async (req: Request, res: Response) => {
	const requestData = req.body;
	const { user, campaign } = requestData;

	const existingRequest = await JoinCampaignRequest.findOne({
		user,
		campaign,
	});
	if (existingRequest) {
		return res.status(409).json({
			errors: [{ msg: JoinCampaignRequestErrorCodes.RequestAlreadyExists }],
		});
	}

	const joinCampaignRequest = new JoinCampaignRequest(requestData);

	try {
		const newRequest = await joinCampaignRequest.save();
		return res.status(201).json({
			msg: 'Join campaign request created',
			id: newRequest._id,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const getRequestById = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const request = await JoinCampaignRequest.findById(id);
		if (!request) {
			return res.status(404).json({
				errors: [{ msg: JoinCampaignRequestErrorCodes.RequestNotFound }],
			});
		}
		return res.status(200).json({ request });
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const deleteRequest = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const delRequest = await JoinCampaignRequest.findByIdAndDelete(id);
		if (!delRequest) {
			return res.status(404).json({
				errors: [{ msg: JoinCampaignRequestErrorCodes.RequestNotFound }],
			});
		}
		return res.status(200).json({ delRequest });
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const setRequestStatus = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { status } = req.body;

	if (!['accepted', 'rejected'].includes(status)) {
		return res.status(400).json({
			errors: [{ msg: JoinCampaignRequestErrorCodes.RequestStatusInvalid }],
		});
	}

	try {
		const updatedRequest = await JoinCampaignRequest.findByIdAndUpdate(
			id,
			{ status },
			{
				new: true,
			}
		);

		if (!updatedRequest) {
			return res.status(404).json({
				errors: [{ msg: JoinCampaignRequestErrorCodes.RequestNotFound }],
			});
		}

		return res.status(200).json({ request: updatedRequest });
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

const getOfUser = async (
	req: Request,
	res: Response,
	sentByCreator: boolean
) => {
	const { userId } = req.params;
	try {
		const requests = await JoinCampaignRequest.find({
			user: userId,
			isSentByCreator: sentByCreator,
		})
			.populate('user', 'username')
			.populate('campaign', 'title');
		return res.status(200).json({ requests });
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

// Get all requests made by a user to join campaigns
export const getRequestsByUser = async (req: Request, res: Response) => {
	return await getOfUser(req, res, false);
};

// Get all invitations received by a user to join campaigns
export const getInvitationsForUser = async (req: Request, res: Response) => {
	return await getOfUser(req, res, true);
};

const getOfCreator = async (
	req: Request,
	res: Response,
	sentByCreator: boolean
) => {
	const { creatorId } = req.params;

	try {
		const campaigns = await Campaign.find({ creator: creatorId })
			.select('_id')
			.exec();
		const campaignIds = campaigns.map(campaign => campaign._id);

		const requests = await JoinCampaignRequest.find({
			campaign: { $in: campaignIds },
			isSentByCreator: sentByCreator,
		})
			.populate('user', 'username')
			.populate('campaign', 'title');
		return res.status(200).json({ requests });
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

// Get all requests sent by a creator to invite users to campaigns
export const getInvitationsByCreator = async (req: Request, res: Response) => {
	return await getOfCreator(req, res, true);
};

// Get all requests received by a creator from users asking to join campaigns
export const getRequestsForCreator = async (req: Request, res: Response) => {
	return await getOfCreator(req, res, false);
};
