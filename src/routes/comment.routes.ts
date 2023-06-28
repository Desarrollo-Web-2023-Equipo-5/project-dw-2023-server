import { Router } from 'express';
import {
	createComment,
	deleteComment,
	getComments,
	updateComment,
} from '../controllers/comment.controller';
import { validateJWT } from '../middlewares/validate-JWT';
import { validateSession } from '../middlewares/validate-session';
import {check} from "express-validator";
import {CommentErrorCodes, UserErrorCodes} from "../helpers";

export const router = Router();

router.get('/', [validateSession, validateJWT], getComments);

router.post('/', [validateSession, validateJWT,
	check('creator', 'Id is not valid')
		.isMongoId()
		.withMessage(UserErrorCodes.UserIdInvalid),
	check('content', 'Content is required')
		.not()
		.isEmpty()
		.withMessage(CommentErrorCodes.CommentContentRequired)
	],
	createComment);

router.delete('/:id', [validateSession, validateJWT], deleteComment);

router.put('/:id', [validateSession, validateJWT,
	check('content', 'Content is required')
		.not()
		.isEmpty()
		.withMessage(CommentErrorCodes.CommentContentRequired),
	],
	updateComment);

export default router;
