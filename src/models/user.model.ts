import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema = new Schema<IUser>(
	{
		username: {
			type: String,
			required: [true, 'Username is required'],
			unique: true,
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
		img: {
			type: String,
		},
		createdAt: {
			type: Number,
			default: Date.now(),
		},
		updatedAt: {
			type: Number,
			default: Date.now(),
		},
		deleted: {
			type: Boolean,
			default: false,
		},
	},
	{ versionKey: false }
);

UserSchema.methods.toJSON = function () {
	const { __v, password, _id, ...user } = this.toObject();
	user.id = _id;
	return user;
};

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
