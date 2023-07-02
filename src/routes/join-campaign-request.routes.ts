import { Router } from 'express';
import {
	createRequest,
	deleteRequest,
	getRequestById,
	setRequestStatus,
	getRequestsByUser,
	getInvitationsForUser,
	getInvitationsByCreator,
	getRequestsForCreator,
} from '../controllers/join-campaign-request.controller';
import { validateJWT } from '../middlewares/validate-JWT';
import { validateSession } from '../middlewares/validate-session';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validate-fields';
import {
	UserErrorCodes,
	CampaignErrorCodes,
	GeneralErrorCodes,
	JoinCampaignRequestErrorCodes,
} from '../helpers/error-codes';
import JoinCampaignRequest from '../models/join-campaign-request.model';

export const router = Router();

// Create a request
router.post(
	'/',
	[
		validateSession,
		validateJWT,
		check('user', 'User id is not valid')
			.isMongoId()
			.withMessage(UserErrorCodes.UserIdInvalid),
		check('campaign', 'Campaign id is not valid')
			.isMongoId()
			.withMessage(CampaignErrorCodes.CampaignIdInvalid),
		validateFields,
	],
	createRequest
);

// Get request by id
router.get(
	'/:id',
	[
		validateSession,
		validateJWT,
		check('id', 'ID is not valid')
			.isMongoId()
			.withMessage(JoinCampaignRequestErrorCodes.RequestIdInvalid),
		validateFields,
	],
	getRequestById
);

// Update request status
router.put(
	'/:id',
	[
		validateSession,
		validateJWT,
		check('id', 'ID is not valid')
			.isMongoId()
			.withMessage(JoinCampaignRequestErrorCodes.RequestIdInvalid),
		check('status', 'Status is not valid').isIn(['accepted', 'rejected']),
		validateFields,
	],
	setRequestStatus
);

// Delete request
router.delete(
	'/:id',
	[
		validateSession,
		validateJWT,
		check('id', 'ID is not valid')
			.isMongoId()
			.withMessage(JoinCampaignRequestErrorCodes.RequestIdInvalid),
		validateFields,
	],
	deleteRequest
);

// Get all requests made by a user to join campaigns
router.get(
	'/by-user/:userId',
	[
		validateSession,
		validateJWT,
		check('userId', 'User id is not valid')
			.isMongoId()
			.withMessage(UserErrorCodes.UserIdInvalid),
		validateFields,
	],
	getRequestsByUser
);

// Get all invitations received by a user to join campaigns
router.get(
	'/for-user/:userId',
	[
		validateSession,
		validateJWT,
		check('userId', 'User id is not valid')
			.isMongoId()
			.withMessage(UserErrorCodes.UserIdInvalid),
		validateFields,
	],
	getInvitationsForUser
);

// Get all requests sent by a creator to invite users to campaigns
router.get(
	'/by-creator/:creatorId',
	[
		validateSession,
		validateJWT,
		check('creatorId', "Creator's user id is not valid")
			.isMongoId()
			.withMessage(UserErrorCodes.UserIdInvalid),
		validateFields,
	],
	getInvitationsByCreator
);

// Get all requests received by a creator from users asking to join campaigns
router.get(
	'/for-creator/:creatorId',
	[
		validateSession,
		validateJWT,
		check('creatorId', "Creator's user id is not valid")
			.isMongoId()
			.withMessage(UserErrorCodes.UserIdInvalid),
		validateFields,
	],
	getRequestsForCreator
);

export default router;
