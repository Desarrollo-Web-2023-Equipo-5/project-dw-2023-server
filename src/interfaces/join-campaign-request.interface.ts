import { Document } from 'mongoose';
import { IUser } from './user.interface';
import { ICampaign } from './campaign.interface';

export interface IJoinCampaignRequest extends Document {
	user: IUser['id'];
	campaign: ICampaign['_id'];
	isSentByCreator: boolean;
	status: 'pending' | 'accepted' | 'rejected';
	createdAt?: number;
	updatedAt?: number;
}
