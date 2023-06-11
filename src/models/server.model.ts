import cors from 'cors';
import express, { Application } from 'express';
import userRoutes from '../routes/user.routes';
import { dbConnection } from '../db/config';

class Server {
	private app: Application;
	private port: string;
	private apiPaths = {
		users: '/api/users',
		posts: '/api/posts',
		comments: '/api/comments',
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '3000';

		// Connect to database
		this.connectToDatabase();

		// Middlewares
		this.middlewares();

		// Routes
		this.routes();
	}

	public listen(): void {
		this.app.listen(this.port, () => {
			console.log(`Server running on port `, this.port);
		});
	}

	private async connectToDatabase(): Promise<void> {
		await dbConnection();
	}

	private middlewares(): void {
		// CORS
		this.app.use(cors());

		// Read and parse body
		this.app.use(express.json());
	}

	private routes(): void {
		this.app.use(this.apiPaths.users, userRoutes);
	}
}

export default Server;
