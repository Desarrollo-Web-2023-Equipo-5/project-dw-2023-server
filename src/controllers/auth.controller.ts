import { Request, Response } from 'express';
import { GeneralErrorCodes, UserErrorCodes } from '../helpers/error-codes';
import User from '../models/user.model';
import bcrypt from 'bcryptjs';
import { generateJWT } from '../helpers/jwt-generator';
import Session from '../models/session.model';
import jwt from 'jsonwebtoken';
import {
	createSession,
	deleteSession,
	terminateAllSessions,
} from '../helpers/session-manager';
import { TokenPayload } from '../interfaces/token.interface';

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({
				errors: [{ msg: UserErrorCodes.UserEmailInvalid }],
			});
		}

		if (user.deleted) {
			return res.status(404).json({
				errors: [{ msg: UserErrorCodes.UserNotFound }],
			});
		}

		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			return res.status(400).json({
				errors: [{ msg: UserErrorCodes.UserPasswordInvalid }],
			});
		}

		const newSession = await createSession(user._id);

		const token = await generateJWT(newSession._id.toString());

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
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const logout = async (req: Request, res: Response) => {
	const token =
		process.env.USE_COOKIES === 'true'
			? req.cookies['x-token']
			: req.header('x-token');

	if (!token) {
		return res.status(400).json({
			errors: [{ msg: GeneralErrorCodes.SessionNotFound }],
		});
	}

	const { sub } = jwt.decode(token) as TokenPayload;

	if (!sub) {
		return res.status(400).json({
			errors: [{ msg: GeneralErrorCodes.SessionNotFound }],
		});
	}

	try {
		await deleteSession(sub);
		res.clearCookie('x-token');
		res.status(200).json({});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const logoutAll = async (req: Request, res: Response) => {
	const token =
		process.env.USE_COOKIES === 'true'
			? req.cookies['x-token']
			: req.header('x-token');

	if (!token) {
		return res.status(400).json({
			errors: [{ msg: GeneralErrorCodes.SessionNotFound }],
		});
	}

	const { sub } = jwt.decode(token) as TokenPayload;

	if (!sub) {
		return res.status(400).json({
			errors: [{ msg: GeneralErrorCodes.SessionNotFound }],
		});
	}

	const currentSession = await Session.findOne({
		_id: sub,
		active: true,
	});

	try {
		await terminateAllSessions(currentSession!.userRef);
		res.clearCookie('x-token');
		res.status(200).json({});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const renewToken = async (req: Request, res: Response) => {
	const token =
		process.env.USE_COOKIES === 'true'
			? req.cookies['x-token']
			: req.header('x-token');

	if (!token) {
		return res.status(400).json({
			errors: [{ msg: GeneralErrorCodes.SessionNotFound }],
		});
	}

	const { sub } = jwt.decode(token) as TokenPayload;

	if (!sub) {
		return res.status(400).json({
			errors: [{ msg: GeneralErrorCodes.SessionNotFound }],
		});
	}

	try {
		const newToken = await generateJWT(sub);
		const session = await Session.findOne({ _id: sub })
			.select('userRef')
			.populate('userRef');
		const user = session?.userRef;
		const { _id, username, img } = user! as any;

		const useCookies = process.env.USE_COOKIES === 'true';
		if (useCookies) {
			res.cookie('x-token', newToken, {
				httpOnly: true,
				secure: false,
				sameSite: 'none',
			});
			res.status(200).json({
				ok: true,
				user: {
					id: _id,
					username,
					img,
				},
			});
		} else {
			return res.status(200).json({
				ok: true,
				user: {
					id: _id,
					username,
					img,
				},
				token: newToken,
			});
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};
