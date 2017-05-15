'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const showUpdateMyFavoritePlayerTemplate = require('../templates/favorite_player-update-listing.handlebars')

// AJAX Player Event Handler Functions
const onCreatePlayer = function (event) {
  event.preventDefault()
  // console.log('player/events.js (onCreatePlayer) ran!')

  // THIS = event.target
  const data = getFormFields(event.target)
  // console.log('player/event.js (onCreatePlayer) Data: ', data)

  // console.log('player/event.js (onCreatePlayer) player_name[0]: ', data.player_info.player_name[0])
  // console.log('player/event.js (onCreatePlayer) team_name[0]: ', data.player_info.team_name[0])
  // console.log('player/event.js (onCreatePlayer) sport[0]: ', data.player_info.sport[0])
  // console.log('player/event.js (onCreatePlayer) position[0]: ', data.player_info.position[0])
  // console.log('player/event.js (onCreatePlayer) player_number[0]: ', data.player_info.player_number[0])

  // CHECK FOR VALID USER ENTERED `player_info` DATA in CREATE-PLAYER modal
  // All 5 fields are required in the back end API so make sure each user
  // entered field (player_name, team_name, sport, position. and player_number
  // have data (i.e. first position of string has data).

  // If the first character of ALL `player_info` fields have data, create player
  if ((data.player_info.player_name[0]) &&
    (data.player_info.team_name[0]) &&
    (data.player_info.sport[0]) &&
    (data.player_info.position[0]) &&
    (data.player_info.player_number[0])) {
    api.createPlayer(data)
      .then(ui.createPlayerSuccess)
      .catch(ui.createPlayerFailure)
  } else {
    // User did not enter all required create player `player_info` fields.
    // Ask user to re-enter all required fields.
    const errorTextUponIncompletePlayerInfoFailure = 'All fields are required.  Please verify all player info fields are filled in.'

    // Display error text in CREATE PLAYER modal footer back to user to fill in
    //  all player info fields.
    $('#create-player-footer').html(errorTextUponIncompletePlayerInfoFailure)
  }

  // If user closes out of CREATE PLAYER modal, clear error text message in
  //  CREATE PLAYER modal and reset modal body text.
  const statusTextWhenCreateNewPlayer = 'All player info fields are required.  Please fill in all player info fields.'

  $('#close-create-player-modal').on('click', function () {
    // Refresh create player user text
    // console.log('player/event.js (onCreatePlayer) Closing Create Player Modal - Clearing modal text')

    $('#create-player-footer').html(statusTextWhenCreateNewPlayer)
    $('#create-player').trigger('reset')
  })
}

const onIndexPlayer = function (event) {
  event.preventDefault()
  // console.log('player/events.js (onIndexPlayer) ran!')

  // Don't need to use data object here!
  api.indexPlayer()
    .then(ui.indexPlayerSuccess)
    .catch(ui.indexPlayerFailure)
}

const onShowMorePlayer = function (data) {
  event.preventDefault()
  // console.log('player/events.js (onShowMorePlayer) - (data is ', data)

  api.showMorePlayer(data)
    .then(ui.showMorePlayerSuccess)
    .catch(ui.showMorePlayerFailure)
}

const onSaveUpdatedPlayer = function (event) {
  event.preventDefault()
  // console.log('player/events.js (onSaveUpdatedPlayer) - ID: ', store.favorite_player.id)

  const data = getFormFields(event.target)
  // console.log('player/events.js (onSaveUpdatedPlayer) - Data is: ', data)

  // If the first character of ALL `player_info` UPDATE fields have data,
  //  update player
  if ((data.player_info.team_name[0]) &&
    (data.player_info.sport[0]) &&
    (data.player_info.position[0]) &&
    (data.player_info.player_number[0])) {
    api.updatePlayer(store.favorite_player.id, data)
      .then(ui.updatePlayerSuccess)
      .catch(ui.updatePlayerFailure)
  }
}

const onUpdatePlayer = function (id) {
  event.preventDefault()
  // console.log('player/events.js (onUpdatePlayer)')

  // console.log('player/events.js (onUpdatePlayer) - Favorite Player is: ', store.favorite_player)
  // console.log('player/events.js (onUpdatePlayer) - ID is: ', id)

  // Clear favorite players content
  $('.content').empty()

  // Build handlebars HTML showing UPDATE FORM to have current user update data
  //  about selected favorite player

  const showUpdateMyFavoritePlayerHtml = showUpdateMyFavoritePlayerTemplate({ favorite_player: store.favorite_player })
  $('.content').html(showUpdateMyFavoritePlayerHtml)

  // SOMEHOW THIS DOESN'T WORK (for a FORM! but does work for non-forms)
  // $('.content').on('submit', '#updatePlayerForm', function (event) {
  //   event.preventDefault()
  //   console.log('player/events.js (onUpdatePlayer) ran!  ID is :', id)
  //   onSaveUpdatedPlayer(event, id)
  // })
  $('.content').on('submit', '#updatePlayerForm', onSaveUpdatedPlayer)
}

const onRemovePlayer = function (data) {
  event.preventDefault()
  // console.log('player/events.js (onRemovePlayer) - (data is ', data)

  api.removePlayer(data)
    .then(ui.removePlayerSuccess)
    .catch(ui.removePlayerFailure)
}

const addHandlers = () => {
  // Set up event handler to CREATE NEW PLAYER modal
  $('#create-player').on('submit', onCreatePlayer)

  // Set up event handler to SHOW FAVORITE PLAYERS modal
  $('#index-player').on('submit', onIndexPlayer)

  $('.content').on('click', '.jetertest', onShowMorePlayer)
}

module.exports = {
  addHandlers,
  onShowMorePlayer,
  onUpdatePlayer,
  onSaveUpdatedPlayer,
  onRemovePlayer
}
