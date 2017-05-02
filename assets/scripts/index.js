'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')
const gameEvents = require('./player/events.js')

// On document ready
$(() => {
  setAPIOrigin(location, config)
  // console.log('index.js: Inside Favorite Player (on document ready)')

  // Set up click events for modal buttons
  $('#select-sign-up').on('click', function () {
    $('#mySignUpModal').modal('show')
  })

  $('#select-sign-in').on('click', function () {
    $('#mySignInModal').modal('show')
  })

  $('#select-change-password').on('click', function () {
    $('#myChangePasswordModal').modal('show')
  })

  $('#select-sign-out').on('click', function () {
    $('#mySignOutModal').modal('show')
  })

  $('#select-create-player').on('click', function () {
    $('#myCreatePlayerModal').modal('show')
  })

  $('#select-index-game').on('click', function () {
    $('#myIndexGameModal').modal('show')
  })

  $('#select-show-game').on('click', function () {
    $('#myShowGameModal').modal('show')
  })

  $('#select-update-game-state').on('click', function () {
    $('#myUpdateGameStateModal').modal('show')
  })

  // Hide Change Password and Sign Out modal buttons initially until user
  //  signs in.
  $('#select-change-password').hide()
  $('#select-sign-out').hide()

  // Hide Create New Player modal button initially until user signs in.
  $('#select-create-player').hide()

  // ** COMMENTED OUT *** DEBUG MODAL buttons
  $('#select-index-game').hide()
  $('#select-show-game').hide()
  $('#select-update-game-state').hide()
  // END DEBUG

  // Set GUI status bar on game initialization
  document.getElementById('status-bar-1').innerHTML = 'Welcome!!!'
  document.getElementById('status-bar-2').innerHTML = 'Please SIGN UP or SIGN IN!'

  authEvents.addHandlers()
  gameEvents.addHandlers()
})
