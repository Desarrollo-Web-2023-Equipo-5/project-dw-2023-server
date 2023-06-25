import { Request, Response } from 'express';
import Campaign from '../models/post.model';
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
