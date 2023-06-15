import { Types } from 'mongoose';

export interface IUser {
	id?: Types.ObjectId;
	username: string;
	email: string;
	password: string;
	img: string;
	createdAt?: Date;
	updatedAt?: Date;
	deleted?: boolean;
	sessions?: Types.ObjectId[];
}
