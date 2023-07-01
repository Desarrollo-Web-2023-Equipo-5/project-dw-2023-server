import { Router } from 'express';
import {
	createComment,
	deleteComment,
	getComments,
	updateComment,
} from '../controllers/comment.controller';
import { validateJWT } from '../middlewares/validate-JWT';
import { validateSession } from '../middlewares/validate-session';
import { check } from 'express-validator';
import { CommentErrorCodes, UserErrorCodes } from '../helpers';
import { validateFields } from '../middlewares/validate-fields';

export const router = Router();

router.get('/', [validateSession, validateJWT], getComments);

router.post(
	'/',
	[
		validateSession,
		validateJWT,
		check('content', 'Content is required')
			.not()
			.isEmpty()
			.withMessage(CommentErrorCodes.CommentContentRequired),
		validateFields,
	],
	createComment
);

router.delete('/:id', [validateSession, validateJWT], deleteComment);

router.put(
	'/:id',
	[
		validateSession,
		validateJWT,
		check('content', 'Content is required')
			.not()
			.isEmpty()
			.withMessage(CommentErrorCodes.CommentContentRequired),
	],
	updateComment
);

export default router;
