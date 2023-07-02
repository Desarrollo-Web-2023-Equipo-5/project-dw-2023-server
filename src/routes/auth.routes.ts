import { Router } from 'express';
import {
	login,
	logout,
	logoutAll,
	renewToken,
} from '../controllers/auth.controller';
import { validateFields } from '../middlewares/validate-fields';
import { check } from 'express-validator';
import { emailExists } from '../helpers/db-validators';
import { UserErrorCodes } from '../helpers/error-codes';
import { validateSession } from '../middlewares/validate-session';
import { validateJWT } from '../middlewares/validate-JWT';

export const router = Router();

router.post(
	'/login',
	[
		check('email').isEmail().withMessage(UserErrorCodes.UserEmailRequired),
		check('password')
			.not()
			.isEmpty()
			.withMessage(UserErrorCodes.UserPasswordRequired),
		validateFields,
	],
	login
);

router.post('/logout', logout);

router.post('/logout-all', [validateSession, validateJWT], logoutAll);

router.post('/renew', [validateSession, validateJWT], renewToken);

export default router;
