import { Types } from 'mongoose';

export interface ISession {
	_id?: Types.ObjectId;
	userRef: Types.ObjectId;
	createdAt?: Date;
	expiresAt?: Date;
	active?: boolean;
}
