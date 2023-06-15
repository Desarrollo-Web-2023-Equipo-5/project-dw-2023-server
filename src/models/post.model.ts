import mongoose, { Schema } from 'mongoose';
import { IPost } from '../interfaces/post.interface';

const PostSchema = new Schema<IPost>(
	{
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

const Post = mongoose.model<IPost>('Post', PostSchema);

export default Post;
