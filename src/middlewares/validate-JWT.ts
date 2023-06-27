import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserErrorCodes } from '../helpers/error-codes';

export const validateJWT = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const useCookies = process.env.USE_COOKIES === 'true';

	const token = useCookies ? req.cookies['x-token'] : req.header('x-token');

	try {
		jwt.verify(token, process.env.JWT_SECRET!);
		next();
	} catch (error) {
		console.error(error);
		return res.status(401).json({
			errors: {
				user: {
					msg: UserErrorCodes.UserNotAuthenticated,
				},
			},
		});
	}
};
