import mongoose, { Schema } from 'mongoose';
import { IJoinCampaignRequest } from '../interfaces/join-campaign-request.interface';

const JoinCampaignRequestSchema = new Schema<IJoinCampaignRequest>(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		campaign: { type: Schema.Types.ObjectId, ref: 'Campaign', required: true },
		isSentByCreator: { type: Boolean, default: false },
		status: {
			type: String,
			enum: ['pending', 'accepted', 'rejected'],
			default: 'pending',
		},
		createdAt: { type: Number, default: Date.now },
		updatedAt: { type: Number, default: Date.now },
	},
	{ versionKey: false }
);

JoinCampaignRequestSchema.pre<IJoinCampaignRequest>('save', function (next) {
	if (!this.isNew) {
		this.updatedAt = Date.now();
	}
	next();
});

const JoinCampaignRequest = mongoose.model<IJoinCampaignRequest>(
	'JoinCampaignRequest',
	JoinCampaignRequestSchema
);

export default JoinCampaignRequest;
