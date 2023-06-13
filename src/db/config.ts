import mongoose from 'mongoose';
import consola from 'consola';

export const dbConnection = async () => {
	consola.start('Connecting to database...');
	try {
		await mongoose.connect(process.env.MONGO_DB_CNN!, {
			dbName: 'dnt-db',
		});

		consola.success('Database ONLINE');
	} catch (error) {
		consola.error(error);
		throw new Error('Error on database initialization');
	}
};
