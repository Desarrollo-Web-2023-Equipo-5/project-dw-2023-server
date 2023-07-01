# Server side for Dungeons and Turtles app

# **USER ENDPOINTS**

## **Create User**

_Creates a new user._

- **URL**

  `api/users`

- **Method:**

  `POST`

- **Data Params**

`{ email: string, password: string }`

## **Get User by ID**

_Gets a specific user by its id._

- **URL**

  `api/users/:id`

- **Method:**

  `GET`

## **Get All Users**

_Gets all non deleted users._

- **URL**

  `api/users`

- **Method:**

  `GET`

## **Update User**

_Updates a user info._

- **URL**

  `api/users`

- **Method:**

  `PUT`

## **Delete User**

_Deletes a user._

- **URL**

  `api/users/:id`

- **Method:**

  `DELETE`

<hr>

# **AUTH ENDPOINTS**

## **Login**

_Logs in and authenticates._

- **URL**

  `api/auth/login`

- **Method:**

  `POST`

- **Data Params**

`{ email: string, password: string }`

## **Logout**

_Logs out._

- **URL**

  `api/auth/logout`

- **Method:**

  `POST`

<hr>

# **JOIN CAMPAIGN REQUEST ENDPOINTS**

## **Create Request**

_Creates a new join campaign request._

- **URL**

  `api/requests`

- **Method:**

  `POST`

## **Get Request by ID**

_Gets a specific join campaign request by its id._

- **URL**

  `api/requests/:id`

- **Method:**

  `GET`

## **Set Request Status**

_Sets a status for a specific join campaign request._

- **URL**

  `api/requests/:id`

- **Method:**

  `PUT`

## **Delete Request**

_Deletes a specific join campaign request._

- **URL**

  `api/requests/:id`

- **Method:**

  `DELETE`

## **Get All Requests by User**

_Gets all requests made by a user to join campaigns._

- **URL**

  `api/requests/by-user/:userId`

- **Method:**

  `GET`

## **Get All Invitations for User**

_Gets all invitations received by a user to join campaigns._

- **URL**

  `api/requests/for-user/:userId`

- **Method:**

  `GET`

## **Get All Invitations by Creator**

_Gets all requests sent by a creator to invite users to campaigns._

- **URL**

  `api/requests/by-creator/:creatorId`

- **Method:**

  `GET`

## **Get All Requests for Creator**

_Gets all requests received by a creator from users asking to join campaigns._

- **URL**

  `api/requests/for-creator/:creatorId`

- **Method:**

  `GET`
