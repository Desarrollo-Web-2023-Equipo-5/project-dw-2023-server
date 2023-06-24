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

export enum CommentErrorCodes {
	CommentNotFound = 'ERR_COMMENT_NOT_FOUND',
	CommentIdRequired = 'ERR_COMMENT_ID_REQUIRED',
	CommentContentRequired = 'ERR_COMMENT_CONTENT_REQUIRED',
	CommentContentInvalid = 'ERR_COMMENT_CONTENT_INVALID',
	CommentCreatorRequired = 'ERR_COMMENT_CREATOR_REQUIRED',
	CommentCreatorInvalid = 'ERR_COMMENT_CREATOR_INVALID',
	CommentTypeRequired = 'ERR_COMMENT_TYPE_REQUIRED',
	CommentTypeInvalid = 'ERR_COMMENT_TYPE_INVALID',
	CommentRefRequired = 'ERR_COMMENT_REF_REQUIRED',
	OnlyOneCommentRefRequired = 'ERR_ONLY_ONE_COMMENT_REF_REQUIRED',
}
