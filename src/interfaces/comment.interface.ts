import { Types } from 'mongoose';

export interface IComment {
	_id?: Types.ObjectId;
	userRef?: Types.ObjectId;
	postRef?: Types.ObjectId;
	creator: Types.ObjectId;
	content: string;
	createdAt?: number;
	updatedAt?: number;
	deleted: boolean;
}
