import mongoose, { Schema } from 'mongoose';
import { ICharacter } from '../interfaces/character.interface';

const CharacterSchema = new Schema<ICharacter>(
	{
		characterName: {
			type: String,
			required: true,
		},
		characterClass: {
			type: String,
			required: true,
		},
		characterRace: {
			type: String,
			required: true,
		},
		characterDescription: {
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
const Character = mongoose.model<ICharacter>('Character', CharacterSchema);

export default Character;
