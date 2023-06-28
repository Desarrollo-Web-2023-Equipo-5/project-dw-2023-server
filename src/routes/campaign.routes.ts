import { Router } from 'express';
import { validateJWT } from '../middlewares/validate-JWT';
import { validateSession } from '../middlewares/validate-session';
import {
	createCampaign,
	getCampaignById,
	getCampaigns,
} from '../controllers/campaign.controller';
import { check } from 'express-validator';
import { CampaignErrorCodes, UserErrorCodes } from '../helpers/error-codes';
import { validateFields } from '../middlewares/validate-fields';

export const router = Router();

router.get('/', [validateSession, validateJWT], getCampaigns);

router.post(
	'/',
	[
		validateSession,
		validateJWT,
		check('creator', 'Id is not valid')
			.isMongoId()
			.withMessage(UserErrorCodes.UserIdInvalid),
		check('title', 'Title is required')
			.not()
			.isEmpty()
			.withMessage(CampaignErrorCodes.CampaignTitleRequired),
		check('description', 'Description is required')
			.not()
			.isEmpty()
			.withMessage(CampaignErrorCodes.CampaignDescriptionRequired),
		check('playersNeeded', 'Players needed is required')
			.not()
			.isEmpty()
			.withMessage(CampaignErrorCodes.CampaignPlayersNeededRequired),
		validateFields,
	],
	createCampaign
);

router.delete('/:id');

router.put('/:id');

router.get('/:id', [validateSession, validateJWT], getCampaignById);

export default router;
