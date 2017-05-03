'use strict'

const config = require('../config')
const store = require('../store')

const createPlayer = (data) => {
  // console.log('player/api.js (createPlayer) - (data is ', data)

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

const indexPlayer = () => {
  // console.log('player/api.js (indexPlayer)')

  // store.user is stored in ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/my-favorite-players/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showMorePlayer = (data) => {
  // console.log('player/api.js (showMorePlayer) - (data is ', data)

  // store.user is stored in ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/my-favorite-players/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePlayer = (id, data) => {
  // console.log('player/api.js (updatePlayer) - ID is: ', id)
  // console.log('player/api.js (updatePlayer) - Data is: ', data)

  // store.user is stored in ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/favorite_players/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const removePlayer = (data) => {
  // console.log('player/api.js (removePlayer) - (data is ', data)

  // store.user is stored in ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/favorite_players/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createPlayer,
  indexPlayer,
  showMorePlayer,
  updatePlayer,
  removePlayer
}
