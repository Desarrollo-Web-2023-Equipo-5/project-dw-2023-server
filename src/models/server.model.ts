import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import userRoutes from '../routes/user.routes';
import authRoutes from '../routes/auth.routes';
import { dbConnection } from '../db/config';
import { consola } from 'consola';

class Server {
	private app: Application;
	private port: string;
	private apiPaths = {
		auth: '/api/auth',
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
			consola.info(`Server running on port `, this.port);
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

		// Public folder
		// this.app.use(express.static('public'));

		// File upload
		// this.app.use(fileUpload());

		// Morgan
		this.app.use(morgan('dev'));

		// Cookie parser
		this.app.use(cookieParser());
	}

	private routes(): void {
		this.app.use(this.apiPaths.auth, authRoutes);
		this.app.use(this.apiPaths.users, userRoutes);
	}
}

export default Server;
