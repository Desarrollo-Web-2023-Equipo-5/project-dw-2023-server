import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { validateFields } from '../middlewares/validate-fields';
import { check } from 'express-validator';
import { emailExists } from '../helpers/db-validators';
import { UserErrorCodes } from '../helpers/error-codes';

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

export default router;
