import mongoose, { Schema } from 'mongoose';
import { ISession } from '../interfaces/session.interface';
import User from './user.model';

const SessionSchema = new Schema<ISession>(
	{
		userRef: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: [true, 'User reference is required'],
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		expiresAt: {
			type: Date,
			default: () => Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
		},
		active: {
			type: Boolean,
			default: true,
		},
	},
	{ versionKey: false }
);

SessionSchema.pre<ISession>('save', async function (next) {
	// Get the user document using the userRef field
	const user = await User.findById(this.userRef);
	if (user) {
		// Add the session reference to the user's sessions array
		user.sessions?.push(this._id!);
		// Save the updated user document
		await user.save();
	}
	next();
});

const Session = mongoose.model<ISession>('Session', SessionSchema);

export default Session;
