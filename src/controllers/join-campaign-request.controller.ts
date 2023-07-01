import { Request, Response } from 'express';
import { GeneralErrorCodes } from '../helpers/error-codes';
import JoinCampaignRequest from '../models/join-campaign-request.model';

export const createRequest = async (req: Request, res: Response) => {
	const requestData = req.body;
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
				errors: [{ msg: GeneralErrorCodes.NotFound }],
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
				errors: [{ msg: GeneralErrorCodes.NotFound }],
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
			errors: [{ msg: GeneralErrorCodes.BadRequest }],
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
				errors: [{ msg: GeneralErrorCodes.NotFound }],
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

export const getRequestsInitiatedByUser = async (
	req: Request,
	res: Response
) => {
	const { userId } = req.params;

	try {
		const joinRequests = await JoinCampaignRequest.find({
			user: userId,
			isSentByCreator: false,
		})
			.populate('user', 'username')
			.populate('campaign', 'title');

		return res.status(200).json({ joinRequests });
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const getRequestsInitiatedByCreator = async (
	req: Request,
	res: Response
) => {
	const { userId } = req.params;

	try {
		const joinRequests = await JoinCampaignRequest.find({
			user: userId,
			isSentByCreator: true,
		})
			.populate('user', 'username')
			.populate('campaign', 'title');

		return res.status(200).json({ joinRequests });
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};
