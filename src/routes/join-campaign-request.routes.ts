import { Router } from 'express';
import {
	createRequest,
	deleteRequest,
	getRequestById,
	setRequestStatus,
	getRequestsInitiatedByUser,
	getRequestsInitiatedByCreator,
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

// Get requests initiated by user
router.get(
	'/user/:userId',
	[validateSession, validateJWT],
	getRequestsInitiatedByUser
);

// Get requests initiated by creator
router.get(
	'/creator/:userId',
	[validateSession, validateJWT],
	getRequestsInitiatedByCreator
);

export default router;
