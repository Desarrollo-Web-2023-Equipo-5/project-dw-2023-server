import { Router } from 'express';
import {
	createComment,
	deleteComment,
	getComments,
	updateComment,
} from '../controllers/comment.controller';
import { validateJWT } from '../middlewares/validate-JWT';
import { validateSession } from '../middlewares/validate-session';

export const router = Router();

router.get('/', [validateSession, validateJWT], getComments);

router.post('/', [validateSession, validateJWT], createComment);

router.delete('/:id', [validateSession, validateJWT], deleteComment);

router.put('/:id', [validateSession, validateJWT], updateComment);

export default router;
