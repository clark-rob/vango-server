
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
4. Install React CanvasDraw with `npm install react-canvas-draw --save`
5. Run `npm run server` in terminal to test server

### API
#### Authentication
API expects four authentication calls:
|--------|------------------------|
| POST   | `/sign-up`             |
| POST   | `/sign-in`             |
| PATCH  | `/change-password/` |
| DELETE | `/sign-out/`        |

- scripts to test these calls can be found in the `scripts/auth` folder
- a `token` is needed to perform a PATCH and DELETE

#### Rounds
API can expect five calls that all require a signed in user:
|--------|------------------------|
| GET   | `/rounds`             |
| GET   | `/rounds/:id`         |
| POST  | `/rounds`             |
| PATCH  | `/rounds/:id`        |
| DELETE | `/rounds/:id`        |

- scripts to test these calls can be found in the `scripts/rounds` folder
- to test using scripts, use the authentication `sign-in` to get a user `token`

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
