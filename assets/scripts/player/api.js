'use strict'

const config = require('../config')
const store = require('../store')

const createPlayer = (data) => {
  console.log('player/api.js (createPlayer) - (data is ', data)

  // store.user is stored in ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/favorite_players/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // data: data  (Same thing!)
    data
  })
}

const showUserStats = () => {
  // console.log('game/api.js (showUserStats)')

  // store.user is stored in ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexPlayer = () => {
  console.log('player/api.js (indexPlayer)')

  // store.user is stored in ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/my-favorite-players/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGame = () => {
  // console.log('game/api.js (showGame)')

  // store.game is stored in games/ui.js -> createGameSuccess
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGameState = (data) => {
  console.log('game/api.js (updateGameState) - (data is ', data)

  // store.game is stored in games/ui.js -> createGameSuccess
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
      // AJAX or RAILS doesn't know what to do with 2nd header below
      // Content-Type: application/json
    },
    data
  })
}

module.exports = {
  createPlayer,
  showUserStats,
  indexPlayer,
  showGame,
  updateGameState
}
