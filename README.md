[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# My Favorite Player (Full Stack API Project Client)

## DESCRIPTION

An application that allows a current user to log their favorite sports players.
It uses a custom Rails API to create, read, update and delete their favorite
sports players.  This implementation supports multiple users one at a time but
only the favorite sports players for the logged in current user are displayed
and are able to be updated and/or deleted.  This application is deployed online
at the URL found below.

## FEATURES

1. Single page application (SPA) using a custom back end API RAILS
    implementation written in JavaScript.

2. Full user sign up, sign in, change password and sign out authentication
     with custom back end RAILS server.

3.  Complete user authentication error handling for user sign up, sign in,
     change password and sign out to promote user experience.

4.  Full support of favorite_players API AJAX events with custom back end RAILS
     server that can create, read, update and delete favorite_players data in
     a SQL database using custom GET, POST, PUT/PATCH, and DELETE RESTful
     requests.  All actions which change data are authenticated and the changed
     data is "owned" by the current user performing the change.

5.  Use of a Rails ORM to create a favorite_players database table structure and
     interact with the data.

6.  Use of jQuery and Handlebars templates for DOM manipulation and event
     handling.

7.  Bootstrap Modal Navbar


## Front-End Client Application URL

https://rlarsonil71.github.io/food-wine-rails-client/


## GitHub Application Repositories

-   [`Front-End Client`](https://github.com/rlarsonil71/food-wine-rails-client)
-   [`Back-End API`](https://github.com/rlarsonil71/food-wine-rails-api)


## Heroku API URL

-   [`Heroku API URL`](https://hidden-cliffs-39330.herokuapp.com/)


## Project Requirements

-   [`full-stack-project`](https://github.com/ga-wdi-boston/full-stack-project)


## Project Dependencies

-   [`browser-template`](https://github.com/ga-wdi-boston/browser-template)
-   [`rails-api-one-to-many`](https://github.com/ga-wdi-boston/rails-api-one-to-many)


## Installation

Start with `grunt serve`.

## List of Technologies Used

1.  HTML, CSS, JavaScript
2.  jQuery, SASS
3.  Bootstrap modals
4.  Handlebars templates
5.  RAILS MFC
6.  AJAX
7.  SQL

## List of Servers Used

Front-end:
  GRUNT server (http://localhost:7165/)

Back-end RAILS server:
  [game-project-api]  (http://localhost:4741/)


## Planning and Software Design - Development Process

1.  Review project scope and requirements.
2.  Design wireframes and user stories.
3.  Breakdown project scope and requirements into small functional components.
4.  Review authorization actions needed in custom back-end API.
5.  Review database model needed in custom back-end API to support
     favorite_players data and manipulation of data.
6.  Create an ERD using a one-to-many database relationship.
7.  Check with consultant to get feedback on ERD design as well as other aspects
     of project requirements.
8.  Design project schedule and order small functional components tieboxing each
     when appropriate.
9.  Construct data models and migrations to represent data.
10. Test data models using RAILS console.
11. Test API endpoint using CURL CRUD test scripts.
12.  Design file structure for project (auth vs. favorite_players) using
     proper git source code control.  Follow js-template (browser-template) repo
     practicing separation of concerns (i.e. separating DOM manipulation files
     from network API files).
13. Design user state machine for modal button display showing and hiding modal
     buttons upon each user action (i.e., sign-up, sign-in, change-password,
     sign-out, create-game).
14.  Authorization actions
    a.  Construct CURL test scripts for each authorization action.
    b.  Test each CURL test script for each authorization application.
    c.  Once each CURL test script is successfully tested, code index.js, auth
         events.js, api.js, and ui.js files using AJAX authorization actions.
    d.  Create test simulations modal buttons to test each AJAX authorization
         action.
15. Test and verify that each authorization action works per the given game API
     documentation.
16. Favorite Player CRUD actions with user authentication.
    a.  Construct CURL test scripts for each favorite_players CRUD action.
    b.  Test each CURL test script for each favorite_players CRUD action.
    c.  Once each CURL test script is successfully tested, code index.js, auth
         events.js, api.js, and ui.js files using AJAX favorite_players actions.
17. Test and verify that each favorite_players action works per the custom
     back-end API documentation.
18. Design visual user experience using wireframe(s).
19. Code preliminary HTML and CSS for basic SPA front-end page including navbar
     and allocated div that contains favorite_players information.
19. Design unit test cases for favorite_players CRUD using front-end
     functionnality.
20. Execute unit test cases for favorite_players CRUD (signing up users and
     verifying CRUD functionality and data only displays for current logged in
     user and that no other user data is modified or deleted.


## Planning - Problem Solving Strategy

1.  Using Google Chrome Development Tools (Inspect).
2.  Add console.log messages to code.
3.  Add debugger and step through code examining variables and logic.
4.  Review WDI class notes and previous trainings, labs, and/or studies.
5.  Google issue (i.e. handlebars)
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

## Links to ERD Used

https://imgur.com/gallery/ydVIS (Food/Wine - One to Many - Preliminary)
https://imgur.com/gallery/o4IRg (User/Favorite_Players - One to Many - Production)

## Links to Wireframes Used

https://imgur.com/gallery/6qUV3 (Food/Wine - Preliminary)
https://imgur.com/gallery/uRr7w (Favorite_Players - Production)


## User Stories Used

1.  As a player, I want to sign up, so that I can use the application.
2.  As a player, I want to sign in, so that I can login, use the application,
     and log a favorite player.
3.  As a player, I want to change a password, so that I can protect my login
     credentials.
4.  As a player, I want to sign out, so that I can sign out.
5.  As a player, I want to create a new favorite player, so that it is displayed
     on the front-end page.
6.  As a player, I want to create multiple favorite players one at a time, so
     that I can keep this list for later use.
7.  As a player, I want to sign in again, so that I can view by list of
     favorite players at a later date.
8.  As a player, I want to delete a favorite player, so that it is not displayed
     to me.
9.  As a player, I want to update data about my favorite player, so that the
     correct player data is displayed to me and is able to displayed to me
     at a later date.


## List of Challenges

1.  List of Closed Issues -
     https://github.com/ga-wdi-boston/full-stack-project/issues?q=is%3Aissue+author%3Arlarsonil71

    Need assistance with rails generate
    https://github.com/ga-wdi-boston/full-stack-project/issues/762

    Need assistance with recreating table
    https://github.com/ga-wdi-boston/full-stack-project/issues/766

    Handlebars - List template works but single object template does not work
    https://github.com/ga-wdi-boston/full-stack-project/issues/800

    Update form from handlebars not working properly
    https://github.com/ga-wdi-boston/full-stack-project/issues/811

    Lessons learned:
     - Do not use SQL to update data or drop a table.  Use data migration files
        instead.
     - Extra comments in handlebars templates can yield unexpected results.
     - If you have a working template, use it to compare it with a not-working
        version (event handlers and target id/class selectors - create-player
        vs. updatePlayerForm)

2.  Interacting with forms within handlebars

3.  CSS and SCSS styling


## List of Unsolved Problems to be Handled in Future Releases

None.


## List of Upcoming Features

1.  Enhanced player attribute data including links to 3rd party API player info
2.  Full Responsive GUI (The only responsive feature is the Bootstrap Modal)
3.  Refactor code
4.  Enhanced styling


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
