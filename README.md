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
