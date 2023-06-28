import { Request, Response } from 'express';
import Campaign from '../models/campaign.model';
import { GeneralErrorCodes } from '../helpers/error-codes';

export const createCampaign = async (req: Request, res: Response) => {
	const { title, description, playersNeeded, creator } = req.body;

	const newCampaign = new Campaign({
		title,
		description,
		creator,
		playersNeeded,
	});

	try {
		await newCampaign.save();
		return res
			.status(201)
			.json({ msg: 'Campaign created', id: newCampaign._id });
	} catch (error) {
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const getCampaigns = async (req: Request, res: Response) => {
	try {
		const campaigns = await Campaign.find()
			.populate('creator', 'username')
			.select('creator title description playersNeeded currentPlayers');
		return res.status(200).json({ campaigns });
	} catch (error) {
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const getCampaignById = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const campaign = await Campaign.findById(id)
			.populate('creator', 'username img')
			.select('creator title description playersNeeded currentPlayers img');
		return res.status(200).json({ campaign });
	} catch (error) {
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};
