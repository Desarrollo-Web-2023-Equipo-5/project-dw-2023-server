import { Types } from 'mongoose';

export interface ICampaign {
	_id?: Types.ObjectId;
	creator: Types.ObjectId;
	title: string;
	description: string;
	playersNeeded: number;
	currentPlayers: Types.ObjectId[];
	createdAt?: number;
	updatedAt?: number;
	deleted: boolean;
}
