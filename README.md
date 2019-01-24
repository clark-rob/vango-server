
# V.A.N.Go!: API
The magic begins here!

## Description
- User must become a member using an email and password
- Rounds are created by means of a Number, Phrase, Drawing and owned by a User

## Repo URL's
- Front-end: https://github.com/clark-rob/vango-client
- Back-end: https://github.com/clark-rob/vango-server
-
## Deployed Site URL's
- Front-end: https://clark-rob.github.io/vango-client/
- Back-end: https://vango-server.herokuapp.com/

## Technologies
- React JS was used to create the entire front end, Single Page App.
- React-canvas-draw: https://github.com/embiem/react-canvas-draw
    - used to create each canvas drawing within the application
- Express/ Node.js was used with MongoDB on the backend

## Preparation
1. Fork and Clone this repository.
2. `git checkout` to a new branch
3. Install dependencies with `npm install`
4. Run `npm run server` in terminal to test server

### API
#### Authentication
|         |                       |
|--------|------------------------|
| POST   | `/sign-up`             |
| POST   | `/sign-in`             |
| PATCH  | `/change-password/` |
| DELETE | `/sign-out/`        |

- scripts to test these calls can be found in the `scripts/auth` folder
- a `token` is needed to perform a PATCH and DELETE

#### POST

Sign-up request:

Using a script requires the credentials of:
      ```sh
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
      ```


```sh
scripts/auth/sign-up.sh
```

Response should be:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email"
  }
}
```

#### POST

Sign-in request:

Using a script requires the credentials of:
      ```sh
      "email": "an@example.email",
      "password": "an example password"
      ```

```sh
scripts/auth/sign-in.sh
```

Response should be:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email",
    "token": "33ad6372f795694b333ec5f329ebeaaa"
  }
}
```

#### PATCH

Change Password request:

Using a script requires the header of:
      ```sh
      "Authorization: Token token=$TOKEN"
      ```

and the 'passwords' of:
      ```sh
      "old": "an example password",
      "new": "it is different"
      ```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/auth/change-password.sh
```

Response should be:

```md
HTTP/1.1 204 No Content
```

#### DELETE

Sign-out request:

Using a script requires the header of:
      ```sh
      "Authorization: Token token=$TOKEN"
      ```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/auth/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### Rounds
|         |                       |
|--------|------------------------|
| GET   | `/rounds`             |
| POST  | `/rounds`             |
| PATCH  | `/rounds/:id`        |
| DESTROY | `/rounds/:id`        |

- API has five calls that all require a signed in user
- scripts to test these calls can be found in the `scripts/rounds` folder
- to test using scripts, use the authentication `sign-in` to get a user `token`

#### Get

Index request:

Using a script requires the header of:
      ```sh
      "Authorization: Token token=$TOKEN"
      ```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/rounds/index.sh
```

Response should be:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "rounds": {
    "_id": 123456789,
    "number": 1,
    "phrase": "this is a phrase",
    "drawing": "array of lines and points"
    "owner": "4b333ec5f329ebeaaa33ad6372f79569"
  }
}
```

#### POST

Create request:

Using a script requires the header of:
      ```sh
      "Authorization: Token token=$TOKEN"
      ```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/rounds/create.sh
```


And the 'round' of:
      ```sh
      "number": 1,
      "phrase": "an example phrase",
      "drawing": "an example drawing"
      ```

```sh
scripts/create.sh
```

Response should be:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
"round": {
  "number": 1,
  "phrase": "an example phrase",
  "drawing": "an example drawing"
  "owner": "4b333ec5f329ebeaaa33ad6372f79569"
  "_id": 123456789,
}
}
```

#### PATCH

Update request:

Does require the ID of the 'round' the user is patching.

Using a script requires the header of:
      ```sh
      "Authorization: Token token=$TOKEN"
      ```

and the 'round' of:
      ```sh
      "number": 1,
      "phrase": "an example phrase",
      "drawing": "an example drawing"
      ```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/rounds/update.sh
```

Response should be:

```md
HTTP/1.1 204 No Content
```

#### DESTROY

Delete request:

Does require the ID of the 'round' the user is deleting.

Using a script requires the header of:
      ```sh
      "Authorization: Token token=$TOKEN"
      ```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/rounds/destroy.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

## Idea Behind the App
- Based off a party game called 'Scrawl,' where pictionary meets telephone.
- BUT, Version 1 is a basic drawing application that saves and showcases
a group of individuals creations.

## Future Fixes
- Proceed with making a 'game' model that is the owner of the 'rounds'

## User Stories
- As a user, I want to be able to have authorized access so that I can play and
view my current and past games
- As a user, I want to be able to generate a random word(s) by clicking a button
so that I can create a new game
- As a user, I want to be able to draw on my screen on mouse click so that once
my mouse is not clicked, the drawing stops
- As a user, I want to be able to update my game after each round is complete so
that I can continue playing another time
- As a user, I want to be able to save past games so that I can view them at
another time
- As a user, I want to be able to save past games so that I can delete them at
another time


# ERD
![alt ERD](./ERD.pdf)

## Resources
  This app was built using the assistance of Google search engine.
  It helped me find sites such as:
    https://developer.mozilla.org/en-US/
    https://www.w3schools.com/
    https://stackoverflow.com/

  Majority of all my questions, led me to past training notes and
  practices.

  Other problems were assisted by fellow colleagues in GA WDI PVD-04
    -Thank you all for the help.
