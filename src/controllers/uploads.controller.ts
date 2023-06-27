import { Request, Response } from 'express';
import {
	CampaignErrorCodes,
	GeneralErrorCodes,
	UploadFileErrors,
	UserErrorCodes,
} from '../helpers/error-codes';
import { uploadFileHandler } from '../helpers';
import User from '../models/user.model';
import Campaign from '../models/campaign.model';
import path from 'path';
import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
	api_key: process.env.CLOUDINARY_API_KEY!,
	api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const uploadFile = async (req: Request, res: Response) => {
	try {
		const fileName = await uploadFileHandler(req.files);
		return res.json({
			fileName,
		});
	} catch (error) {
		res.status(400).json(error);
	}
};

export const updateImage = async (req: Request, res: Response) => {
	const { collection, id } = req.params;

	if (!collection || !id) {
		return res.status(400).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}

	let model;

	switch (collection) {
		case 'users':
			model = await User.findById(id);
			if (!model) {
				return res.status(400).json({
					errors: [{ msg: UserErrorCodes.UserNotFound }],
				});
			}
			break;

		case 'campaigns':
			model = await Campaign.findById(id);
			if (!model) {
				return res.status(400).json({
					errors: [{ msg: CampaignErrorCodes.CampaignNotFound }],
				});
			}
			break;

		default:
			return res.status(500).json({
				errors: [{ msg: GeneralErrorCodes.InternalServerError }],
			});
	}

	try {
		if (model.img) {
			const pathImage = path.join(
				__dirname,
				'../uploads',
				'imgs',
				collection,
				model.img
			);

			if (fs.existsSync(pathImage)) {
				fs.unlinkSync(pathImage);
			}
		}

		const fileName = await uploadFileHandler(req.files, undefined, collection);
		model.img = fileName;
		await model.save();
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}

	return res.json({ img: model.img });
};

export const updateImageCloudinary = async (req: Request, res: Response) => {
	const { collection, id } = req.params;

	if (!collection || !id) {
		return res.status(400).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}

	let model;

	switch (collection) {
		case 'users':
			model = await User.findById(id);
			if (!model) {
				return res.status(400).json({
					errors: [{ msg: UserErrorCodes.UserNotFound }],
				});
			}
			break;

		case 'campaigns':
			model = await Campaign.findById(id);
			if (!model) {
				return res.status(400).json({
					errors: [{ msg: CampaignErrorCodes.CampaignNotFound }],
				});
			}
			break;

		default:
			return res.status(500).json({
				errors: [{ msg: GeneralErrorCodes.InternalServerError }],
			});
	}

	try {
		if (model.img) {
			const nombreArr = model.img.split('/');
			const nombre = nombreArr[nombreArr.length - 1];
			const [publicId] = nombre.split('.');
			cloudinary.uploader.destroy(publicId);
		}

		const { tempFilePath } = req.files!.file as any;
		const { secure_url } = await cloudinary.uploader.upload(tempFilePath);

		model.img = secure_url;
		await model.save();
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}

	return res.json({ img: model.img });
};

export const getImage = async (req: Request, res: Response) => {
	const { collection, id } = req.params;

	if (!collection || !id) {
		return res.status(400).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}

	let model;

	switch (collection) {
		case 'users':
			model = await User.findById(id);
			if (!model) {
				return res.status(400).json({
					errors: [{ msg: UserErrorCodes.UserNotFound }],
				});
			}
			break;

		case 'campaigns':
			model = await Campaign.findById(id);
			if (!model) {
				return res.status(400).json({
					errors: [{ msg: CampaignErrorCodes.CampaignNotFound }],
				});
			}
			break;

		default:
			return res.status(500).json({
				errors: [{ msg: GeneralErrorCodes.InternalServerError }],
			});
	}

	try {
		if (model.img) {
			const pathImage = path.join(
				__dirname,
				'../uploads',
				collection,
				model.img
			);
			if (fs.existsSync(pathImage)) {
				return res.sendFile(pathImage);
			}
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}

	return res.sendFile(path.join(__dirname, '../assets/no-avatar.png'));
};
