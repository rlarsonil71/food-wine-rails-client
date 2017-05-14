'use strict'

const store = require('../store')
const api = require('./api')
const showMyFavoritePlayersTemplate = require('../templates/favorite_player-listing.handlebars')
const showMoreMyFavoritePlayerTemplate = require('../templates/favorite_player-more-data-listing.handlebars')
const createNewPlayerOrShowAllPlayersText = 'Please Create a New Favorite Sports Player or Show All Your Favorite Players!'
const createNewPlayerText = 'Please Create a New Favorite Sports Player!'

const createPlayerSuccess = (ajaxResponse) => {
  // console.log('player/ui.js (createPlayerSuccess) ran!  Response is :', ajaxResponse)

  // Hide the CREATE NEW PLAYER modal from displaying to the user
  $('#myCreatePlayerModal').modal('hide')

  // Clear modal body text in CREATE NEW PLAYER modal
  $('#create-player').trigger('reset')

  // Set GUI status bar after user creates a player
  document.getElementById('status-bar-2').innerHTML = createNewPlayerOrShowAllPlayersText

  // Do a GET INDEX (call to api.indexPlayer method for current list of
  //  favorite_players object (after recent create player) and build handlebars
  //  HTML showing my favorite players for current user.

  // Don't need to use data object here!
  api.indexPlayer()
    .then(indexPlayerSuccess)
    .catch(indexPlayerFailure)
}

const createPlayerFailure = (error) => {
  // console.log('player/ui.js (createPlayerFailure) - Error is :', error)
  console.error(error)

  // Hide the CREATE NEW PLAYER modal from displaying to the user
  $('#myCreatePlayerModal').modal('hide')

  // Clear modal body text in CREATE NEW PLAYER modal
  $('#create-player').trigger('reset')
}

const indexPlayerSuccess = (ajaxResponse) => {
  // console.log('player/ui.js (indexPlayerSuccess) ran!  Response is :', ajaxResponse)

  // Show the SHOW FAVORITE PLAYERS modal button to the user
  $('#select-index-player').show()

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

  // Hide the SHOW FAVORITE PLAYERS modal button from displaying to the user
  $('#select-index-player').hide()

  // Hide the SHOW FAVORITE PLAYERS modal from displaying to the user
  $('#myIndexPlayerModal').modal('hide')

  // Clear modal body text in SHOW FAVORITE PLAYERS modal
  $('#index-player').trigger('reset')
}

const checkForAnyPlayerSuccess = (ajaxResponse) => {
  // console.log('player/ui.js (checkForAnyPlayerSuccess) ran!  Response is :', ajaxResponse)
  // console.log('player/ui.js (checkForAnyPlayerSuccess) Number of Favorite Players: ',
  //             ajaxResponse.favorite_players.length)

  // Upon successful user sign in, show SHOW FAVORITE PLAYERS modal button ONLY
  //  if favorite players EXIST for current user
  if (ajaxResponse.favorite_players.length === 0) {
    // Current user has NO favorite players so hide the SHOW FAVORITE PLAYERS
    //  modal button from displaying to the user
    $('#select-index-player').hide()

    // Set GUI status bar directing current user to only create a new player
    document.getElementById('status-bar-2').innerHTML = createNewPlayerText
  } else {
    // Show the SHOW FAVORITE PLAYERS modal button to the user
    $('#select-index-player').show()
  }

  // Hide the SHOW FAVORITE PLAYERS modal from displaying to the user
  $('#myIndexPlayerModal').modal('hide')

  // Clear modal body text in SHOW FAVORITE PLAYERS modal
  $('#index-player').trigger('reset')

  // Clear favorite players content
  $('.content').empty()
}

const checkForAnyPlayerFailure = (error) => {
  // console.log('player/ui.js (indexPlayerFailure) - Error is :', error)
  console.error(error)

  // Hide the SHOW FAVORITE PLAYERS modal button from displaying to the user
  $('#select-index-player').hide()

  // Hide the SHOW FAVORITE PLAYERS modal from displaying to the user
  $('#myIndexPlayerModal').modal('hide')

  // Clear modal body text in SHOW FAVORITE PLAYERS modal
  $('#index-player').trigger('reset')
}

const showMorePlayerSuccess = (ajaxResponse) => {
  // console.log('player/ui.js (showMorePlayerSuccess) ran!  Response is :', ajaxResponse)
  // console.log('player/ui.js (showMorePlayerSuccess) ran!  Favorite Player is :', ajaxResponse.favorite_player)
  // console.log('player/ui.js (showMorePlayerSuccess) ran!  Player Name is :', ajaxResponse.favorite_player.player_name)
  // console.log('player/ui.js (showMorePlayerSuccess) ran!  Team Name is :', ajaxResponse.favorite_player.team_name)
  // console.log('player/ui.js (showMorePlayerSuccess) ran!  Sport is :', ajaxResponse.favorite_player.sport)
  // console.log('player/ui.js (showMorePlayerSuccess) ran!  Position is :', ajaxResponse.favorite_player.position)
  // console.log('player/ui.js (showMorePlayerSuccess) ran!  Player Number is :', ajaxResponse.favorite_player.player_number)

  // Store favorite_player object
  store.favorite_player = ajaxResponse.favorite_player

  // Clear favorite players content
  $('.content').empty()

  // Build handlebars HTML showing more data about selected favorite player
  //  for current user
  const showMoreMyFavoritePlayerHtml = showMoreMyFavoritePlayerTemplate({ favorite_player: ajaxResponse.favorite_player })
  $('.content').append(showMoreMyFavoritePlayerHtml)
}

const showMorePlayerFailure = (error) => {
  // console.log('player/ui.js (showMorePlayerFailure) - Error is :', error)
  console.error(error)
}

const updatePlayerSuccess = () => {
  // console.log('player/ui.js (updatePlayerSuccess) ran!')

  // Do a GET INDEX (call to api.indexPlayer method for current list of
  //  favorite_players object (after recent create player) and build handlebars
  //  HTML showing my favorite players for current user.

  // Don't need to use data object here!
  api.indexPlayer()
    .then(indexPlayerSuccess)
    .catch(indexPlayerFailure)
}

const updatePlayerFailure = (error) => {
  // console.log('player/ui.js (updatePlayerFailure) - Error is :', error)
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
    .then(checkForAnyPlayerSuccess)
    .catch(checkForAnyPlayerFailure)
}

const removePlayerFailure = (error) => {
  // console.log('player/ui.js (removePlayerFailure) - Error is :', error)
  console.error(error)
}

module.exports = {
  createPlayerSuccess,
  createPlayerFailure,
  indexPlayerSuccess,
  indexPlayerFailure,
  checkForAnyPlayerSuccess,
  checkForAnyPlayerFailure,
  showMorePlayerSuccess,
  showMorePlayerFailure,
  updatePlayerSuccess,
  updatePlayerFailure,
  removePlayerSuccess,
  removePlayerFailure
}
