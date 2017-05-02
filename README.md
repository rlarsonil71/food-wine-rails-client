[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic-Tac-Toe Game Project Client

## DESCRIPTION

A simple tic-tac-toe game using one player.  Play alternates between player 'X'
who goes first followed by player 'O' until a winner is determined or the board
is full (i.e, tie or 'CAT' game).  This implementation supports playing multiple
games one at a time and is deployed online at the URL found below.

## FEATURES

1. Single page application (SPA) using a custom game engine logic implementation.

2. Full user sign up, sign in, change password and sign out authentication
     with back end RAILS server using Tic-Tac-Toe data store api
     (game-project-api) found in the following GIT HUB repository:
        https://github.com/ga-wdi-boston/game-project-api

3.  Complete user authentication error handling for user sign up, sign in,
     change password and sign out.

4.  Full support of game AJAX events with back end RAILS server using
     Tic-Tac-Toe data store api (game-project-api) found in the following
     GIT HUB repository:
        https://github.com/ga-wdi-boston/game-project-api

5.  Use of jQuery for DOM manipulation and event handling.

6.  Bootstrap Modal Navbar


## DEPLOYED URL

https://rlarsonil71.github.io/tic-tac-toe-client/

## Installation

Install game-project-api with `npm install`.
Start with `grunt serve`.

## List of Technologies Used

1.  HTML, CSS, JavaScript
2.  jQuery, SASS
3.  Bootstrap modals
4.  AJAX

## List of Servers Used

Front-end:
  GRUNT server (http://localhost:7165/)

Back-end RAILS server:
  [game-project-api]  (http://localhost:4741/)

## Planning and Software Design - Development Process

1.  Review project scope and requirements.
2.  Design wireframes and user stories.
3.  Breakdown project scope and requirements into small functional components.
4.  Review authorization actions in Tic Tac Toe game API.
5.  Review game actions in Tic Tac Toe game API.
6.  Design project schedule and order small functional components tieboxing each
     when appropriate.
7.  Design file structure for project (auth vs. gameAPI vs. gameLogic) using
     proper git source code control.  Follow js-template (browser-template) repo
     practicing separation of concerns (i.e. separating DOM manipulation files
     from network API files).
8.  Design user state machine for modal button display showing and hiding modal
     buttons upon each user action (i.e., sign-up, sign-in, change-password,
     sign-out, create-game).
9.  Authorization actions
    a.  Construct CURL test scripts for each authorization action.
    b.  Test each CURL test script for each authorization application.
    c.  Once each CURL test script is successfully tested, code index.js, auth
         events.js, api.js, and ui.js files using AJAX authorization actions.
    d.  Create test simulations modal buttons to test each AJAX authorization
         action.
10. Test and verify that each authorization action works per the given game API
     documentation.
11.  Game actions
    a.  Construct CURL test scripts for each game action.
    b.  Test each CURL test script for each game application.
    c.  Once each CURL test script is successfully tested, code index.js, auth
         events.js, api.js, and ui.js files using AJAX game actions.
    d.  Create test simulations modal buttons to test each AJAX game action.
12. Test and verify that each game action works per the given game API
     documentation.
13. Design visual game board using wireframe.
14. Code preliminary HTML and CSS for basic page including game board.
15. Add click handlers to each cell of game board.
16. Test clicking in each of the 9 cells of the game board.
17. Design game logic
    a.  Design logic for processing box clicks and showing `X` or `O`s in game
         board cells.
    b.  Design logic for checking for win situation.
    c.  Design logic for checking for tie situation.
    d.  Design logic for starting new game initializing variables and views where
         necessary.
18. Code game logic
    a.  Code logic for processing box clicks and showing `X` or `O`s in game
         board cells.
    b.  Code logic for checking for win situation.
    c.  Code logic for checking for tie situation.
    d.  Code logic for starting new game initializing variables and views where
        necessary.
19. Design unit test cases for game logic.
20. Execute unit test cases for game logic (playing games and verifying
     functionality).


## Planning - Problem Solving Strategy

1.  Using Google Chrome Development Tools (Inspect).
2.  Add console.log messages to code.
3.  Add debugger and step through code examining variables and logic.
4.  Review WDI class notes and previous trainings, labs, and/or studies.
5.  Google issue (i.e. javascript array foreach)
6.  Open issue in GitHub tic-tac-toe repository.


## Coding Standards

1.  Used git source code control and GitHub repositories.
2.  Commented code to describe use of functions and variables as well as
     authorization and game action logic.
3.  Used semantic naming for functions, variables and parameters.
4.  Used semantic naming for HTML tags, classes and IDs.
5.  Followed all linter suggestions including proper spacing and indentations.
6.  Frequent and small commits to git hub repository.
7.  Followed separation of concerns as often as possible.


## Link to User State Machine (Modal button display)

http://imgur.com/gallery/Bmql6


## Links to Wireframes Used

1.  http://imgur.com/8nwKLCm
2.  http://imgur.com/gallery/AaYes

## User Stories Used

1.  As a player, I want to sign up, so that I can play a game.
2.  As a player, I want to sign in, so that I can login and play a game.
3.  As a player, I want to change a password, so that I can protect my login
     credentials.
4. As a player, I want to sign out, so that I can sign out.
5. As a player, I want to start a new game, so that I can play a game.
6. As a player, I want to play multiple games one at a time, so that I can have
    fun.
7. As a player, I want to sign in again so that I can play a game if I typed in
    an incorrect password.
8. As a player, I want to sign up again so that I can play a game if I typed in
    2 different passwords at sign up.


## List of Challenges

1.  Closed Issue 518 - https://github.com/ga-wdi-boston/game-project/issues/518
     Auth AJAX events working on index.html but not firing AJAX events within
      modal

    Lessons learned:
     - If you copy Bootstrap templates from http://getbootstrap.com, make sure
        you know exactly what it is does as there are many predefined class names
        which do specific things to your styling.
     - Do not nest HTML forms

2.  Game Logic
3.  CSS and SCSS styling


## List of Unsolved Problems to be Handled in Future Releases

1.  CSS fix for game board
2.  Enhanced Game metrics


## List of Upcoming Features

1.  Multi-Player functionality
2.  Full Responsive GUI (The only responsive feature is the Bootstrap Modal)
3.  Refactor code
4.  Enhanced styling


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
