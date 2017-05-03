'use strict'

const store = require('../store')

const errorTextUponSignUpFailure = 'User has already signed up.  Please sign in.'
const errorTextUponIncorrectPasswordFailure = 'Password is incorrect.  Please type in correct password.'

const welcomeText = 'Welcome!!!'
const signUpOrSignInText = 'Please SIGN UP or SIGN IN!'
const createNewPlayerText = 'Please Create a New Favorite Sports Player or Show All Your Favorite Players!'
const thankYouTextUponSignOutSuccess = 'Thank you for playing!!!'

const signUpSuccess = (ajaxResponse) => {
  // console.log('(auth/ui.js) signUpSuccess ran!  Data is :', ajaxResponse)

  // Clear error text message in SIGN UP modal.
  $('#sign-up-footer').html(' ')

  // Clear modal body text in SIGN UP modal
  $('#sign-up').trigger('reset')

  // Hide the SIGN UP modal from displaying to the user
  $('#mySignUpModal').modal('hide')

  // Upon successful user sign up, hide SIGN UP modal button
  $('#select-sign-up').hide()

  // Upon successful user sign up, show SIGN IN modal
  $('#mySignInModal').modal('show')
}

const signUpFailure = (error) => {
  // console.log('(auth/ui.js) Sign-up failure! Error is :', error)
  console.error(error)

  // Display error text in SIGN UP modal footer back to user that the user
  //  has already signed up
  // NOTE: Front-end client (auth/events.js: onSignUp) checks for invalid
  //  password mismatch prior to submitting AJAX sign-up call so an invalid
  //  password mismatch will not get this far.
  $('#sign-up-footer').html(errorTextUponSignUpFailure)

  // Clear modal body text in SIGN UP modal
  $('#sign-up').trigger('reset')

  // If user closes out of SIGN UP modal, clear error text message in SIGN UP
  //  MODAL and reset modal body text.
  $('#close-sign-up-modal').on('click', function () {
    $('#sign-up-footer').html(' ')
    $('#sign-up').trigger('reset')
  })

  // DELAY 2 seconds for user to read error text and then close SIGN UP modal,
  //  show SIGN IN modal, and clear error text message in SIGN UP modal.
  window.setTimeout(function () {
    // Hide the modal from displaying to the user
    $('#mySignUpModal').modal('hide')
    $('#mySignInModal').modal('show')
    $('#sign-up-footer').html(' ')
  }, 2000)
}

const signInSuccess = (ajaxResponse) => {
  // console.log('(auth/ui.js) signInSuccess ran!  Data is :', ajaxResponse)

  // Clear error text message in SIGN IN modal
  $('#sign-in-footer').html(' ')

  // Clear modal body text in SIGN IN modal
  $('#sign-in').trigger('reset')

  // Store user object
  store.user = ajaxResponse.user

  // console.log('ui.js: signInSuccess - store is: ', store)

  // Hide the SIGN IN modal from displaying to the user
  $('#mySignInModal').modal('hide')

  // Upon successful user sign in, hide SIGN UP modal button
  $('#select-sign-up').hide()

  // Upon successful user sign in, hide SIGN IN modal button
  $('#select-sign-in').hide()

  // Upon successful user sign in, show CHANGE PASSWORD modal button
  $('#select-change-password').show()

  // Upon successful user sign in, show SIGN OUT modal button
  $('#select-sign-out').show()

  // Upon successful user sign in, show CREATE NEW PLAYER modal button
  $('#select-create-player').show()

  // Upon successful user sign in, show SHOW FAVORITE PLAYERS modal button
  $('#select-index-player').show()

  // Set GUI status bar after user signs in
  const userString = 'Welcome ' + store.user.email + '!!!'
  document.getElementById('status-bar-1').innerHTML = userString
  document.getElementById('status-bar-2').innerHTML = createNewPlayerText
}

const signInFailure = (error) => {
  // console.log('(auth/ui.js) Sign-in failure!  Error is :', error)
  console.error(error)

  // Display error text in SIGN IN modal footer back to user to correct
  //  incorrect password
  $('#sign-in-footer').html(errorTextUponIncorrectPasswordFailure)

  // Clear modal body text in SIGN IN modal
  $('#sign-in').trigger('reset')

  // If user closes out of SIGN IN modal, clear error text message in SIGN IN
  //  MODAL and reset modal body text.
  $('#close-sign-in-modal').on('click', function () {
    $('#sign-in-footer').html(' ')
    $('#sign-in').trigger('reset')
  })
}

const changePasswordSuccess = (ajaxResponse) => {
  // console.log('(auth/ui.js) Password successfully changed')

  // Clear error text message in CHANGE PASSWORD modal
  $('#change-password-footer').html(' ')

  // Clear modal body text in CHANGE PASSWORD modal
  $('#change-password').trigger('reset')

  // Hide the CHANGE PASSWORD modal from displaying to the user
  $('#myChangePasswordModal').modal('hide')
}

const changePasswordFailure = (error) => {
  // console.log('(auth/ui.js) Change-Password failure!  Error is :', error)
  console.error(error)

  // Display error text in CHANGE PASSWORD modal footer back to user to correct
  //  incorrect original password
  $('#change-password-footer').html(errorTextUponIncorrectPasswordFailure)

  // Clear modal body text in CHANGE PASSWORD modal
  $('#change-password').trigger('reset')

  // If user closes out of CHANGE PASSWORD modal, clear error text message in
  //  CHANGE PASSWORD modal and reset modal body text.
  $('#close-change-password-modal').on('click', function () {
    $('#change-password-footer').html(' ')
    $('#change-password').trigger('reset')
  })
}

const signOutSuccess = () => {
  // console.log('(auth/ui.js) signOutSuccess ran!  Nothing was returned')

  // OREO COOKIE!
  // console.log('store is: ', store)
  // Clear user
  store.user = null
  // console.log('store is: ', store)

  // Display thank you message in SIGN OUT modal footer
  $('#sign-out-footer').html(thankYouTextUponSignOutSuccess)

  // DELAY 3 seconds for user to read thank you text and then close SIGN OUT modal
  //  and update other modal buttons and favorite players content
  window.setTimeout(function () {
    // Hide the SIGN OUT modal from displaying to the user
    $('#mySignOutModal').modal('hide')

    // Clear modal body text in SIGN OUT modal
    $('#sign-out').trigger('reset')

    // Upon successful user sign out, show SIGN UP modal button
    $('#select-sign-up').show()

    // Upon successful user sign out, show SIGN IN modal button
    $('#select-sign-in').show()

    // Upon successful user sign out, hide CHANGE PASSWORD modal button
    $('#select-change-password').hide()

    // Upon successful user sign out, hide SIGN OUT modal button
    $('#select-sign-out').hide()

    // Upon successful user sign out, hide CREATE NEW PLAYER modal button
    $('#select-create-player').hide()

    // Upon successful user sign out, hide SHOW FAVORITE PLAYERS modal button
    $('#select-index-player').hide()

    // Upon successful user sign out, clear favorite players content
    $('.content').empty()

    // Set GUI status bar on app initialization
    document.getElementById('status-bar-1').innerHTML = welcomeText
    document.getElementById('status-bar-2').innerHTML = signUpOrSignInText
  }, 3000)
}

const signOutFailure = (error) => {
  // console.log('(auth/ui.js) Sign-out failure!  Error is :', error)
  console.log(error)

  // Hide the SIGN OUT modal from displaying to the user
  $('#mySignOutModal').modal('hide')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
