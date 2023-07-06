# auth-simple-node

This is BE for auth-simple.

## Setup

```shell
npm i
```

## Start

```shell
npm run dev
```

## Endpoints

* `GET` "/me" - info about user
* `POST` "/signin" - sign in user. Will return cookie. User must already exist in db
    * **body** - json
  ```json
    {
      "email": String,
      "password": String
    }
  ```
* `POST` "/signup" - sign up user. User should not be in db.
    * **body** - json
  ```json
    {
      "email": String,
      "password": String
    }
  ```
* `POST` "/signout" - sign out user. User must be signed in.