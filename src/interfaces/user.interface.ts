export interface IUser {
	_id?: string;
	username: string;
	email: string;
	password: string;
	img: string;
	createdAt?: number;
	updatedAt?: number;
	deleted?: boolean;
}
