import { Types } from 'mongoose';
import { ISession } from '../interfaces/session.interface';
import Session from '../models/session.model';
import User from '../models/user.model';
import { GeneralErrorCodes } from './error-codes';

export const createSession = async (userId: Types.ObjectId) => {
	try {
		const session = new Session<ISession>({ userRef: userId });
		await session.save();
		return session;
	} catch (error) {
		throw new Error(GeneralErrorCodes.InternalServerError);
	}
};

export const terminateSession = async (sessionId: any) => {
	try {
		const session = await Session.findByIdAndUpdate(
			sessionId,
			{ active: false },
			{ new: true }
		);
	} catch (error) {
		throw new Error(GeneralErrorCodes.InternalServerError);
	}
};

export const terminateAllSessions = async (userId: Types.ObjectId) => {
	try {
		await Session.updateMany(
			{ userRef: userId, active: true },
			{ active: false }
		);
	} catch (error) {
		throw new Error(GeneralErrorCodes.InternalServerError);
	}
};

export const deleteSession = async (sessionId: any) => {
	try {
		const session = await Session.findById(sessionId);

		if (!session) {
			throw new Error('Session not found');
		}

		const user = await User.findById(session.userRef);

		if (!user) {
			throw new Error('User not found');
		}

		user.sessions = user.sessions!.filter(
			aSession => aSession._id.toString() !== session._id.toString()
		);

		await session.deleteOne();

		await user.save();
	} catch (error) {
		throw new Error(GeneralErrorCodes.InternalServerError);
	}
};

export const deleteAllSessions = async (userId: Types.ObjectId) => {
	try {
		await Session.deleteMany({ userRef: userId });
		await User.findByIdAndUpdate(userId, { sessions: [] });
	} catch (error) {
		throw new Error(GeneralErrorCodes.InternalServerError);
	}
};

export const getActiveUserSessions = async (userId: Types.ObjectId) => {
	try {
		const sessions = await Session.find({ userRef: userId, active: true });
		return sessions;
	} catch (error) {
		throw new Error(GeneralErrorCodes.InternalServerError);
	}
};
