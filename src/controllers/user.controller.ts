import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.model';
import { IUser } from '../interfaces/user.interface';
import { GeneralErrorCodes } from '../helpers/error-codes';

export const createUser = async (req: Request, res: Response) => {
	const { username, email, password, img } = req.body;

	const user = new User<IUser>({
		username,
		email,
		password,
		img,
	});

	// Encrypt password
	const salt = bcrypt.genSaltSync();
	user.password = bcrypt.hashSync(password, salt);

	// Save user
	try {
		await user.save();

		return res.status(201).json({
			msg: 'User created',
			id: user._id,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const getUserById = async (req: Request, res: Response) => {
	const { id } = req.params;

	const user = await User.findById(id).select('id username email img');

	return res.status(200).json({
		user,
	});
};

export const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { _id, username, password, email, deleted, createdAt, ...rest } =
		req.body;

	if (password) {
		// Encrypt password
		const salt = bcrypt.genSaltSync();
		rest.password = bcrypt.hashSync(password, salt);
	}

	rest.updatedAt = Date.now();
	const user = await User.findByIdAndUpdate(id, rest, { new: true });

	return res.status(200).json({
		user,
	});
};

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	// Soft delete
	const user = await User.findByIdAndUpdate(
		id,
		{ deleted: true },
		{ new: true }
	);

	return res.status(200).json({
		user,
	});
};

export const getAllUsers = async (req: Request, res: Response) => {
	const { limit = 5, from = 0 } = req.query;
	const query = { deleted: false };

	const [total, users] = await Promise.all([
		User.countDocuments(query),
		User.find(query)
			.skip(Number(from))
			.limit(Number(limit))
			.select('username email img'),
	]);

	return res.status(200).json({
		total,
		users,
	});
};
