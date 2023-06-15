import { Router } from 'express';
import {
	createUser,
	deleteUser,
	getAllUsers,
	getUserById,
	updateUser,
} from '../controllers/user.controller';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validate-fields';
import {
	emailExists,
	userExists,
	userNameExists,
} from '../helpers/db-validators';
import { UserErrorCodes } from '../helpers/error-codes';
import { validateJWT } from '../middlewares/validate-JWT';

export const router = Router();

// Create user
router.post(
	'/',
	[
		// middlewares
		check('username', 'Username is required')
			.not()
			.isEmpty()
			.withMessage(UserErrorCodes.UserNameRequired),
		check('username').custom(userNameExists),
		check('password', 'Password is required')
			.not()
			.isEmpty()
			.withMessage(UserErrorCodes.UserPasswordRequired),
		check('email', 'Email is not valid')
			.isEmail()
			.withMessage(UserErrorCodes.UserEmailInvalid),
		check('email').custom(emailExists),
		validateFields,
	],
	createUser
);

// Get user by id
router.get(
	'/:id',
	[
		// middlewares
		check('id', 'Id is not valid').isMongoId(),
		check('id').custom(userExists),
		validateFields,
	],
	getUserById
);

// Update user
router.put(
	'/:id',
	[
		// middlewares
		check('id', 'Id is not valid').isMongoId(),
		check('id').custom(userExists),
		validateFields,
	],
	updateUser
);

// Delete user
router.delete(
	'/:id',
	[
		// middlewares
		validateJWT,
		check('id', 'Id is not valid').isMongoId(),
		check('id').custom(userExists),
		validateFields,
	],
	deleteUser
);

// Get all users
router.get('/', getAllUsers);

export default router;
