import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import sessions from 'express-session';

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
			type: Date,
			default: Date.now(),
		},
		updatedAt: {
			type: Date,
			default: Date.now(),
		},
		deleted: {
			type: Boolean,
			default: false,
		},
		sessions: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Session',
				default: [],
			},
		],
	},
	{ versionKey: false }
);

UserSchema.methods.toJSON = function () {
	const { __v, password, _id, ...user } = this.toObject();
	return user;
};

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
