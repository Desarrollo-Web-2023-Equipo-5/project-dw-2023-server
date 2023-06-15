import { Request, Response } from 'express';
import { GeneralErrorCodes, UserErrorCodes } from '../helpers/error-codes';
import User from '../models/user.model';
import bcrypt from 'bcryptjs';
import { generateJWT } from '../helpers/jwt-generator';

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({
				errors: {
					user: {
						msg: UserErrorCodes.UserEmailInvalid,
					},
				},
			});
		}

		if (user.deleted) {
			return res.status(404).json({
				errors: {
					user: {
						msg: UserErrorCodes.UserNotFound,
					},
				},
			});
		}

		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			return res.status(400).json({
				errors: {
					user: {
						msg: UserErrorCodes.UserPasswordInvalid,
					},
				},
			});
		}

		const token = await generateJWT(user.id);

		const useCookies = process.env.USE_COOKIES === 'true';
		if (useCookies) {
			res.cookie('x-token', token, {
				httpOnly: true,
				secure: false,
				sameSite: 'none',
			});
			res.sendStatus(200);
		} else {
			return res.status(200).json({
				token,
			});
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: {
				server: {
					msg: GeneralErrorCodes.InternalServerError,
				},
			},
		});
	}
};
