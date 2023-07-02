import { UploadedFile } from 'express-fileupload';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { GeneralErrorCodes } from './error-codes';

export const uploadFileHandler = (
	files: any,
	validExtensions: string[] = ['png', 'jpg', 'jpeg', 'gif'],
	filePath: string = ''
): Promise<string> => {
	return new Promise((resolve, reject) => {
		const file: UploadedFile = files.file as UploadedFile;

		const parsedFileName = file.name.split('.');
		const fileExtension = parsedFileName[parsedFileName.length - 1];
		// Valid extensions
		if (!validExtensions.includes(fileExtension)) {
			return reject({ errors: [{ msg: 'File extension not allowed' }] });
		}

		const tempName = uuidv4() + '.' + fileExtension;
		const uploadPath = path.join(__dirname, '../uploads/', filePath, tempName);

		file.mv(uploadPath, err => {
			if (err) {
				return reject({
					errors: [{ msg: GeneralErrorCodes.InternalServerError }],
				});
			}
			return resolve(tempName);
		});
	});
};
