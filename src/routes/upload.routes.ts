import { Router } from 'express';
import {
	getImage,
	updateImage,
	updateImageCloudinary,
	uploadFile,
} from '../controllers/uploads.controller';
import { check } from 'express-validator';
import { UserErrorCodes, allowedCollections } from '../helpers';
import { validateFields } from '../middlewares/validate-fields';
import { validateFile } from '../middlewares/validate-file';

const router = Router();

router.post('/', uploadFile);
router.put(
	'/:collection/:id',
	[
		validateFile,
		check('id', 'Id is not valid')
			.isMongoId()
			.withMessage(UserErrorCodes.UserIdInvalid),
		check('collection').custom(c =>
			allowedCollections(c, ['users', 'campaigns', 'looking-for-group'])
		),
		validateFields,
	],
	updateImageCloudinary
);

router.get(
	'/:collection/:id',
	[
		check('id', 'Id is not valid')
			.isMongoId()
			.withMessage(UserErrorCodes.UserIdInvalid),
		check('collection').custom(c =>
			allowedCollections(c, ['users', 'campaigns'])
		),
		validateFields,
	],
	getImage
);

export default router;
