import { NextFunction, Request, Response } from 'express';
import { UploadFileErrors } from '../helpers';

export const validateFile = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
		return res
			.status(400)
			.json({ errors: [{ msg: UploadFileErrors.NoFilesToUpload }] });
	}
	next();
};
