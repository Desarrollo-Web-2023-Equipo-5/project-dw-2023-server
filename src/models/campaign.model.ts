import mongoose, { Schema } from 'mongoose';
import { ICampaign } from '../interfaces/campaign.interface';

const CampaignSchema = new Schema<ICampaign>(
	{
		description: {
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
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
		title: {
			type: String,
			required: true,
		},
		currentPlayers: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
				default: [],
			},
		],
		playersNeeded: {
			type: Number,
			required: true,
		},
		img: {
			type: String,
			default:
				'https://res.cloudinary.com/djwoedoon/image/upload/v1688253247/iufy6kchwl7dghllsrjg.png',
		},
	},
	{ versionKey: false }
);

const Campaign = mongoose.model<ICampaign>('Campaign', CampaignSchema);

export default Campaign;
