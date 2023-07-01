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
import { UserErrorCodes, CampaignErrorCodes } from '../helpers/error-codes';

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
router.get('/:id', [validateSession, validateJWT], getRequestById);

// Update request status
router.put(
	'/:id',
	[
		validateSession,
		validateJWT,
		check('status', 'Status is not valid').isIn(['accepted', 'rejected']),
		validateFields,
	],
	setRequestStatus
);

// Delete request
router.delete('/:id', [validateSession, validateJWT], deleteRequest);

// Get all requests made by a user to join campaigns
router.get(
	'/by-user/:userId',
	[validateSession, validateJWT],
	getRequestsByUser
);

// Get all invitations received by a user to join campaigns
router.get(
	'/for-user/:userId',
	[validateSession, validateJWT],
	getInvitationsForUser
);

// Get all requests sent by a creator to invite users to campaigns
router.get(
	'/by-creator/:creatorId',
	[validateSession, validateJWT],
	getInvitationsByCreator
);

// Get all requests received by a creator from users asking to join campaigns
router.get(
	'/for-creator/:creatorId',
	[validateSession, validateJWT],
	getRequestsForCreator
);

export default router;
