import { GeneralErrorCodes } from '../helpers';
import Character from '../models/character.model';
import { Request, Response } from 'express';

export const getCharactersById = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const character = await Character.findById(id)
			.select(
				'characterName characterClass characterRace characterDescription creator'
			)
			.populate('creator', 'username');
		if (!character) {
			return res.status(404).json({
				errors: [{ msg: GeneralErrorCodes.NotFound }],
			});
		}
		return res.status(200).json({
			character,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const getCharacters = async (req: Request, res: Response) => {
	try {
		const characters = await Character.find();
		res.json({
			characters,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const createCharacter = async (req: Request, res: Response) => {
	const { characterName, characterClass, characterRace, characterDescription } =
		req.body;
	const character = new Character(req.body);
	try {
		const characterDB = await character.save();
		res.json({
			character: characterDB,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};

export const updateCharacter = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { characterName, characterClass, characterRace, characterDescription } =
		req.body;
	try {
		const character = await Character.findByIdAndUpdate(
			id,
			{
				characterName,
				characterClass,
				characterRace,
				characterDescription,
			},
			{ new: true }
		);
		res.json({
			character,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			errors: [{ msg: GeneralErrorCodes.InternalServerError }],
		});
	}
};
