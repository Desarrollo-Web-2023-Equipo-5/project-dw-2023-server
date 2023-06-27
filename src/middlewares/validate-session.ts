import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { GeneralErrorCodes } from '../helpers/error-codes';
import { TokenPayload } from '../interfaces/token.interface';
import Session from '../models/session.model';
import { deleteSession } from '../helpers/session-manager';

export const validateSession = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const useCookies = process.env.USE_COOKIES === 'true';

	const token = useCookies ? req.cookies['x-token'] : req.header('x-token');

	try {
		const { sub } = jwt.decode(token) as TokenPayload;

		const session = await Session.findOne({ _id: sub, active: true });

		if (!session) {
			return res.status(401).json({
				errors: {
					user: {
						msg: GeneralErrorCodes.SessionNotFound,
					},
				},
			});
		}

		if (new Date(session.expiresAt!) < new Date()) {
			await deleteSession(session._id);
			return res.status(401).json({
				errors: {
					user: {
						msg: GeneralErrorCodes.SessionExpired,
					},
				},
			});
		}
		next();
	} catch (error) {
		return res.status(401).json({
			errors: {
				user: {
					msg: GeneralErrorCodes.SessionNotFound,
				},
			},
		});
	}
};
