import { Router } from 'express';
import {
	createCharacter,
	getCharactersById,
	getCharactersByUserId,
	updateCharacter,
} from '../controllers/characters.controller';
import { validateSession } from '../middlewares/validate-session';
import { validateJWT } from '../middlewares/validate-JWT';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validate-fields';
import { CharacterErrorCodes, UserErrorCodes } from '../helpers';

const router = Router();

router.get('/:id', [validateSession, validateJWT], getCharactersById);

router.post(
	'/',
	[
		validateSession,
		validateJWT,
		check('characterName', 'Character Name is required')
			.not()
			.isEmpty()
			.withMessage(CharacterErrorCodes.CharacterNameRequired),
		check('description', 'Description is required')
			.not()
			.isEmpty()
			.withMessage(CharacterErrorCodes.CharacterDescriptionRequired),
		check('playersNeeded', 'Players needed is required')
			.not()
			.isEmpty()
			.withMessage(CharacterErrorCodes.CharacterPlayersNeededRequired),
		validateFields,
	],
	createCharacter
);

router.put(
	'/:id',
	[
		validateSession,
		validateJWT,
		check('characterName', 'Character Name is required')
			.not()
			.isEmpty()
			.withMessage(CharacterErrorCodes.CharacterNameRequired),
		check('description', 'Description is required')
			.not()
			.isEmpty()
			.withMessage(CharacterErrorCodes.CharacterDescriptionRequired),
		check('playersNeeded', 'Players needed is required')
			.not()
			.isEmpty()
			.withMessage(CharacterErrorCodes.CharacterPlayersNeededRequired),
		validateFields,
	],
	updateCharacter
);

export default router;
