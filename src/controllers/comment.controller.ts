import { Request, Response } from 'express';
import { CommentErrorCodes, GeneralErrorCodes } from '../helpers/error-codes';
import Comment from '../models/comment.model';

export const createComment = async (req: Request, res: Response) => {
	const { userRef, postRef, creator, content } = req.body;

	if (!userRef && !postRef) {
		return res.status(400).json({
			errors: [{ msg: CommentErrorCodes.CommentRefRequired }],
		});
	}

	if (userRef && postRef) {
		return res.status(400).json({
			errors: [{ msg: CommentErrorCodes.OnlyOneCommentRefRequired }],
		});
	}

	if (!creator) {
		return res.status(400).json({
			errors: [{ msg: CommentErrorCodes.CommentCreatorRequired }],
		});
	}

	if (!content) {
		return res.status(400).json({
			errors: [{ msg: CommentErrorCodes.CommentContentRequired }],
		});
	}

	try {
		const creatorId = creator.id;
		const newComment = new Comment({
			userRef,
			postRef,
			creator: creatorId,
			content,
		});

		await newComment.save();
		return res.status(201).json({ msg: 'Comment created', id: newComment.id });
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const getComments = async (req: Request, res: Response) => {
	const { userRef, postRef } = req.query;

	if (!userRef && !postRef) {
		return res.status(400).json({
			errors: [{ msg: CommentErrorCodes.CommentRefRequired }],
		});
	}

	if (userRef && postRef) {
		return res.status(400).json({
			errors: [{ msg: CommentErrorCodes.OnlyOneCommentRefRequired }],
		});
	}

	try {
		const comments = await Comment.find({
			userRef,
			postRef,
			deleted: false,
		})
			.select('userRef postRef content')
			.populate('creator', 'username img');

		return res.status(200).json({ comments });
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const deleteComment = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const comment = await Comment.findById(id);

		if (!comment) {
			return res.status(404).json({
				errors: [{ msg: CommentErrorCodes.CommentNotFound }],
			});
		}

		comment.deleted = true;
		// await comment.save();
		await comment.deleteOne();

		return res.status(200).json({ msg: 'Comment deleted' });
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const updateComment = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { content } = req.body;

	if (!content) {
		return res.status(400).json({
			errors: [{ msg: CommentErrorCodes.CommentContentRequired }],
		});
	}

	try {
		const comment = await Comment.findById(id);

		if (!comment) {
			return res.status(404).json({
				errors: [{ msg: CommentErrorCodes.CommentNotFound }],
			});
		}

		comment.content = content;
		await comment.save();

		return res.status(200).json({
			msg: 'Comment updated',
			comment: { id: comment.id, content: comment.content },
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};
