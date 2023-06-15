export enum GeneralErrorCodes {
	BodyRequired = 'ERR_BODY_REQUIRED',
	NotFound = 'ERR_RESOURCE_NOT_FOUND',
	BadRequest = 'ERR_BAD_REQUEST',
	InternalServerError = 'ERR_INTERNAL_SERVER_ERROR',
	ErrorOnJWTGeneration = 'ERR_ERROR_ON_JWT_GENERATION',
	SessionNotFound = 'ERR_SESSION_NOT_FOUND',
	SessionExpired = 'ERR_SESSION_EXPIRED',
}

export enum UserErrorCodes {
	UserNotFound = 'ERR_USER_NOT_FOUND',
	UserIdRequired = 'ERR_USER_ID_REQUIRED',
	UserNameRequired = 'ERR_USER_NAME_REQUIRED',
	UserNameAlreadyExists = 'ERR_USER_NAME_ALREADY_EXISTS',
	UserEmailRequired = 'ERR_USER_EMAIL_REQUIRED',
	UserEmailAlreadyExists = 'ERR_USER_EMAIL_ALREADY_EXISTS',
	UserEmailInvalid = 'ERR_USER_EMAIL_INVALID',
	UserPasswordRequired = 'ERR_USER_PASSWORD_REQUIRED',
	UserPasswordInvalid = 'ERR_USER_PASSWORD_INVALID',
	UserNotAuthenticated = 'ERR_USER_NOT_AUTHENTICATED',
}
