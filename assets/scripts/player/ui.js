'use strict'

const store = require('../store')
const api = require('./api')
const showMyFavoritePlayersTemplate = require('../templates/favorite_player-listing.handlebars')
const showMoreFavoritePlayerTemplate = require('../templates/favorite_player-more-data-listing.handlebars')

// *** COMMENTED OUT *** const gameLogic = require('./gameLogic')

const createPlayerSuccess = (ajaxResponse) => {
  console.log('player/ui.js (createPlayerSuccess) ran!  Response is :', ajaxResponse)

  // Hide the CREATE NEW PLAYER modal from displaying to the user
  $('#myCreatePlayerModal').modal('hide')

  // Clear modal body text in CREATE NEW PLAYER modal
  $('#create-player').trigger('reset')

  // Do a GET INDEX (call to api.indexPlayer method for current list of
  //  favorite_players object (after recent create player) and build handlebars
  //  HTML showing my favorite players for current user.

  // Don't need to use data object here!
  api.indexPlayer()
    .then(indexPlayerSuccess)
    .catch(indexPlayerFailure)

  // Set GUI status bar after user creates a new player
  // *** COMMENTED OUT *** document.getElementById('status-bar-2').innerHTML = ' '
}

const createPlayerFailure = (error) => {
  // console.log('player/ui.js (createPlayerFailure) - Error is :', error)
  console.error(error)

  // Hide the CREATE NEW PLAYER modal from displaying to the user
  $('#myCreatePlayerModal').modal('hide')

  // Clear modal body text in CREATE NEW PLAYER modal
  $('#create-player').trigger('reset')
}

const showUserStatsSuccess = (ajaxResponse) => {
  // console.log('game/ui.js (showUserStatsSuccess) ran!  Response is :', ajaxResponse)

  // Hide the SHOW USER STATS GAME modal from displaying to the user
  $('#myShowUserStatsModal').modal('hide')

  // Show User Stats - Number of Games Played to the GUI status bar after user selects
  //  the SHOW USER STATS GAME modal button
  // document.getElementById('status-bar-1').innerHTML = 'STATS1'
  // document.getElementById('status-bar-2').innerHTML = 'STATS2'
  // Set GUI status bar after user signs in
  const userString = 'Welcome ' + store.user.email + '!!!'
  document.getElementById('status-bar-1').innerHTML = userString

  // Display the number of games for the current user to the status bar
  //  (You have played X games!)
  let gamesPlayedString = 'You have played ' + ajaxResponse.games.length

  if (ajaxResponse.games.length === 1) {
    gamesPlayedString = gamesPlayedString + ' game!'
  } else {
    gamesPlayedString = gamesPlayedString + ' games!'
  }
  // console.log('GAMES PLAYED: ', ajaxResponse.games.length)
  document.getElementById('status-bar-2').innerHTML = gamesPlayedString
  // gameLogic.showUserStats()
}

const showUserStatsFailure = (error) => {
  // console.log('game/ui.js (showUserStatsFailure) - Error is :', error)
  console.error(error)

  // Hide the SHOW USER STATS GAME modal from displaying to the user
  $('#myShowUserStatsModal').modal('hide')
}

const indexPlayerSuccess = (ajaxResponse) => {
  console.log('player/ui.js (indexPlayerSuccess) ran!  Response is :', ajaxResponse)

  // Hide the SHOW FAVORITE PLAYERS modal from displaying to the user
  $('#myIndexPlayerModal').modal('hide')

  // Clear modal body text in SHOW FAVORITE PLAYERS modal
  $('#index-player').trigger('reset')

  // Clear favorite players content
  $('.content').empty()

  // Build handlebars HTML showing my favorite players for current user
  const showMyFavoritePlayersHtml = showMyFavoritePlayersTemplate({ favorite_players: ajaxResponse.favorite_players })
  $('.content').append(showMyFavoritePlayersHtml)
}

const indexPlayerFailure = (error) => {
  // console.log('player/ui.js (indexPlayerFailure) - Error is :', error)
  console.error(error)

  // Hide the SHOW FAVORITE PLAYERS modal from displaying to the user
  $('#myIndexPlayerModal').modal('hide')

  // Clear modal body text in SHOW FAVORITE PLAYERS modal
  $('#index-player').trigger('reset')
}

const showMorePlayerSuccess = (ajaxResponse) => {
  console.log('player/ui.js (showMorePlayerSuccess) ran!  Response is :', ajaxResponse)
  console.log('player/ui.js (showMorePlayerSuccess) ran!  Favorite Player is :', ajaxResponse.favorite_player)
  console.log('player/ui.js (showMorePlayerSuccess) ran!  Player Name is :', ajaxResponse.favorite_player.player_name)
  console.log('player/ui.js (showMorePlayerSuccess) ran!  Team Name is :', ajaxResponse.favorite_player.team_name)
  console.log('player/ui.js (showMorePlayerSuccess) ran!  Sport is :', ajaxResponse.favorite_player.sport)
  console.log('player/ui.js (showMorePlayerSuccess) ran!  Position is :', ajaxResponse.favorite_player.position)
  console.log('player/ui.js (showMorePlayerSuccess) ran!  Player Number is :', ajaxResponse.favorite_player.player_number)

  // Clear favorite players content
  $('.content').empty()

  // Build handlebars HTML showing more data about selected favorite player
  //  for current user
  const showMoreMyFavoritePlayerHtml = showMoreFavoritePlayerTemplate({ favorite_player: ajaxResponse.favorite_player })
  $('.content').append(showMoreMyFavoritePlayerHtml)
}

const showMorePlayerFailure = (error) => {
  // console.log('player/ui.js (showMorePlayerFailure) - Error is :', error)
  console.error(error)
}

const removePlayerSuccess = () => {
  // console.log('player/ui.js (removePlayerSuccess) ran!')

  // Clear favorite players content
  $('.content').empty()

  // Do a GET INDEX (call to api.indexPlayer method for current list of
  //  favorite_players object (after recent remove player) and build handlebars
  //  HTML showing my favorite players for current user.

  // Don't need to use data object here!
  api.indexPlayer()
    .then(indexPlayerSuccess)
    .catch(indexPlayerFailure)
}

const removePlayerFailure = (error) => {
  // console.log('player/ui.js (removePlayerFailure) - Error is :', error)
  console.error(error)
}

const showGameSuccess = (ajaxResponse) => {
  // console.log('sgame/ui.js (showGameSuccess) ran!  Response is :', ajaxResponse)

  // Hide the SHOW GAME modal from displaying to the user
  $('#myShowGameModal').modal('hide')
}

const showGameFailure = (error) => {
  // console.log('game/ui.js (showGameFailure) - Error is :', error)
  console.error(error)

  // Hide the SHOW GAME modal from displaying to the user
  $('#myShowGameModal').modal('hide')
}

const updateGameStateSuccess = (ajaxResponse) => {
  // console.log('game/ui.js (updateGameStateSuccess) ran!  Data is :', ajaxResponse)

  // Hide the UPDATE GAME STATE modal from displaying to the user
  $('#myUpdateGameStateModal').modal('hide')
}

const updateGameStateFailure = (error) => {
  // console.log('game/ui.js (updateGameStateFailure) - Error is :', error)
  console.error(error)

  // Hide the UPDATE GAME STATE modal from displaying to the user
  $('#myUpdateGameStateModal').modal('hide')
}

module.exports = {
  createPlayerSuccess,
  createPlayerFailure,
  showUserStatsSuccess,
  showUserStatsFailure,
  indexPlayerSuccess,
  indexPlayerFailure,
  showMorePlayerSuccess,
  showMorePlayerFailure,
  removePlayerSuccess,
  removePlayerFailure,
  showGameSuccess,
  showGameFailure,
  updateGameStateSuccess,
  updateGameStateFailure
}
