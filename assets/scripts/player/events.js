'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// *** COMMENTED OUT *** const gameLogic = require('./gameLogic')

// AJAX Player Event Handler Functions
const onCreatePlayer = function (event) {
  event.preventDefault()
  console.log('player/events.js (onCreatePlayer) ran!')

  // New game so clear out all cells on game board
  // *** COMMENTED OUT *** gameLogic.clearGameBoard()

  const data = getFormFields(this)
  api.createPlayer(data)
    .then(ui.createPlayerSuccess)
    .catch(ui.createPlayerFailure)
}

const onIndexPlayer = function (event) {
  event.preventDefault()
  console.log('player/events.js (onIndexPlayer) ran!')

  // Don't need to use data object here!
  api.indexPlayer()
    .then(ui.indexPlayerSuccess)
    .catch(ui.indexPlayerFailure)
}

const onRemovePlayer = function (data) {
  event.preventDefault()
  console.log('player/events.js (onRemovePlayer) - (data is ', data)

  api.removePlayer(data)
    .then(ui.removePlayerSuccess)
    .catch(ui.removePlayerFailure)
}

const onShowGame = function (event) {
  event.preventDefault()
  // console.log('show-game ran!')

  // Don't need to use data object here!
  api.showGame()
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onUpdateGameState = function (event) {
  event.preventDefault()
  // console.log('update-game-state ran!')

  const data = getFormFields(this)
  api.updateGameState(data)
    .then(ui.updateGameStateSuccess)
    .catch(ui.updateGameStateFailure)
}

// Game Board Event Handler Functions
// *** COMMENTED OUT *** const onClickBoard = function (event) {
//   event.preventDefault()
//   // console.log('game/events.js (onClickBoard) - Event: ', event)
//   // console.log('game/events.js (onClickBoard) - Event Target: ', event.target)
//   // console.log('game/events.js (onClickBoard) - Event Target Id: ', event.target.id)
//
//   // Get cell position of user click on game board
//   const targetIdString = event.target.id  // Last character is cellPosition
//   const cellPosition = targetIdString.substr(targetIdString.length - 1)
//   // console.log('game/events.js (onClickBoard): Cell Position: ', cellPosition)
//
//   // Get cell value of user click on game board
//   // console.log('game/events.js (onClickBoard): THIS: ', $(this))
//   const cellValue = $(this).text()
//   // console.log('game/events.js (onClickBoard): Cell Value: ', cellValue)
//
//   gameLogic.processClick(event, cellPosition, cellValue)
// }

const addHandlers = () => {
  // Set up event handler to CREATE NEW PLAYER modal
  $('#create-player').on('submit', onCreatePlayer)

  // Set up event handler to SHOW FAVORITE PLAYERS modal
  $('#index-player').on('submit', onIndexPlayer)

  // Set up event handlers for temporary simulation modals to test GAME API
  //  AJAX calls
  $('#show-game').on('submit', onShowGame)
  $('#update-game-state').on('submit', onUpdateGameState)

  // Set up game board event handlers for each game board cell (3x3)
  // *** COMMENTED OUT *** for (let cellPosition = 0; cellPosition < 9; cellPosition++) {
  //   const gameBoardCellIdName = '#game-board-cell-' + cellPosition
  //   $(gameBoardCellIdName).on('click', onClickBoard)
  // }
}

module.exports = {
  addHandlers,
  onRemovePlayer
}
