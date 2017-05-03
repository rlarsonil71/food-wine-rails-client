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

  // console.log('THIS: ', this)

  const data = getFormFields(this)
  api.createPlayer(data)
    .then(ui.createPlayerSuccess)
    .catch(ui.createPlayerFailure)
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

  // console.log('THIS: ', this)

  const data = getFormFields(this)
  // console.log('player/events.js (onSaveUpdatedPlayer) - Data is: ', data)

  api.updatePlayer(store.favorite_player.id, data)
    .then(ui.updatePlayerSuccess)
    .catch(ui.updatePlayerFailure)
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
