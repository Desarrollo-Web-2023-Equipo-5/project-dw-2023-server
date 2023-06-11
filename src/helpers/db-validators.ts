import User from '../models/user.model';
import { UserErrorCodes } from './error-codes';

export const emailExists = async (email: string) => {
	const doesEmailExists = await User.findOne({ email });
	if (doesEmailExists) {
		throw new Error(UserErrorCodes.UserEmailAlreadyExists);
	}
};

export const userExists = async (id: string) => {
	const doesUserExists = await User.findById(id);
	if (!doesUserExists) {
		throw new Error(UserErrorCodes.UserNotFound);
	}
};

export const userNameExists = async (username: string) => {
	const doesUsernameExists = await User.findOne({ username });
	if (doesUsernameExists) {
		throw new Error(UserErrorCodes.UserNameAlreadyExists);
	}
};
