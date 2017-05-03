'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')
const playerEvents = require('./player/events.js')

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

  $('#select-index-player').on('click', function () {
    $('#myIndexPlayerModal').modal('show')
  })

  $(document).on('click', '.show-more-button', function () {
    // console.log('scripts/index.js (ODR - show-more-button) ran!  ID is :', this.id)
    playerEvents.onShowMorePlayer(this.id)
  })

  $(document).on('click', '.update-button', function () {
    // console.log('scripts/index.js (ODR - update-button) ran!  ID is :', this.id)
    playerEvents.onUpdatePlayer(this.id)
  })

  $(document).on('click', '.remove-button', function () {
    // console.log('scripts/index.js (ODR - remove-button) ran!  ID is :', this.id)
    playerEvents.onRemovePlayer(this.id)
  })

  // Hide Change Password and Sign Out modal buttons initially until user
  //  signs in.
  $('#select-change-password').hide()
  $('#select-sign-out').hide()

  // Hide Create New Player modal button initially until user signs in.
  $('#select-create-player').hide()

  // Hide Get Favorite Players modal button initially until user signs in.
  $('#select-index-player').hide()

  // Set GUI status bar on app initialization
  document.getElementById('status-bar-1').innerHTML = 'Welcome!!!'
  document.getElementById('status-bar-2').innerHTML = 'Please SIGN UP or SIGN IN!'

  authEvents.addHandlers()
  playerEvents.addHandlers()
})
