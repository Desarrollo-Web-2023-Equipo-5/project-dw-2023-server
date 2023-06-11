import mongoose from 'mongoose';

export const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_CNN!, {
			dbName: 'dnt-db',
		});

		console.log('Database ONLINE');
	} catch (error) {
		console.error(error);
		throw new Error('Error on database initialization');
	}
};
