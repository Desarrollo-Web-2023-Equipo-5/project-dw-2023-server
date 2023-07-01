import { Types } from 'mongoose';

export interface ICharacter {
	_id?: Types.ObjectId;
	characterName: string;
	characterClass: string;
	characterRace: string;
	characterDescription: string;
	creator: Types.ObjectId;
	deleted?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}
