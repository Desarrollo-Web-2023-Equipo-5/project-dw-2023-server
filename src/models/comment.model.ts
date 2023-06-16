import mongoose, { Schema } from 'mongoose';
import { IComment } from '../interfaces/comment.interface';

const CommentSchema = new Schema<IComment>(
	{
		userRef: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			default: null,
		},
		postRef: {
			type: Schema.Types.ObjectId,
			ref: 'Post',
			default: null,
		},
		message: {
			type: String,
			required: true,
		},
		creator: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		deleted: {
			type: Boolean,
			default: false,
		},
		createdAt: {
			type: Date,
			default: Date.now(),
		},
		updatedAt: {
			type: Date,
			default: Date.now(),
		},
	},
	{ versionKey: false }
);

const Comment = mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;
