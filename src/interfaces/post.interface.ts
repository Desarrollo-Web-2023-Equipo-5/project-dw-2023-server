import { Types } from 'mongoose';

export interface IPost {
	_id?: Types.ObjectId;
	creator: Types.ObjectId;
	message: string;
	createdAt?: number;
	updatedAt?: number;
	deleted: boolean;
}
