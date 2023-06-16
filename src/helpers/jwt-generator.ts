import jwt from 'jsonwebtoken';
import { GeneralErrorCodes } from './error-codes';

export const generateJWT = (id: string) => {
	return new Promise((resolve, reject) => {
		jwt.sign(
			{},
			process.env.JWT_SECRET as string,
			{
				expiresIn: '24h',
				subject: id,
			},
			(err, token) => {
				if (err) {
					console.error(err);
					reject(GeneralErrorCodes.ErrorOnJWTGeneration);
				} else {
					resolve(token);
				}
			}
		);
	});
};
