import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import userRoutes from '../routes/user.routes';
import authRoutes from '../routes/auth.routes';
import commentRoutes from '../routes/comment.routes';
import campaignRoutes from '../routes/campaign.routes';
import uploadsRoutes from '../routes/upload.routes';
import { dbConnection } from '../db/config';
import { consola } from 'consola';
import fileUpload from 'express-fileupload';

class Server {
	private app: Application;
	private port: string;
	private apiPaths = {
		auth: '/api/auth',
		users: '/api/users',
		campaigns: '/api/campaigns',
		comments: '/api/comments',
		uploads: '/api/uploads',
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

		// File upload - Temp files
		this.app.use(
			fileUpload({
				useTempFiles: true,
				tempFileDir: '/tmp/',
				createParentPath: true,
			})
		);
	}

	private routes(): void {
		this.app.use(this.apiPaths.auth, authRoutes);
		this.app.use(this.apiPaths.users, userRoutes);
		this.app.use(this.apiPaths.comments, commentRoutes);
		this.app.use(this.apiPaths.campaigns, campaignRoutes);
		this.app.use(this.apiPaths.uploads, uploadsRoutes);
	}
}

export default Server;
