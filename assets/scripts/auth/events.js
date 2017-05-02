'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('Sign-up ran!')

  const data = getFormFields(this)
  // console.log('auth/event.js (onSignUp) Data: ', data)

  // CHECK FOR USER ENTERED PASSWORD MISMATCH in SIGN-UP modal
  if (data.credentials.password === data.credentials.password_confirmation) {
    // User entered the same passwords, try to sign up user
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  } else {
    // User did not enter the same passwords.  Ask user to re-enter passwords.
    const errorTextUponPasswordMismatchFailure = 'Passwords do not match.  Please verify passwords match.'

    // Display error text in SIGN UP modal footer back to user to correct
    //  incorrect password.
    $('#sign-up-footer').html(errorTextUponPasswordMismatchFailure)

    // If user closes out of SIGN UP modal, clear error text message in SIGN
    //  UP modal and reset modal body text.
    $('#close-sign-up-modal').on('click', function () {
      $('#sign-up-footer').html(' ')
      $('#sign-up').trigger('reset')
    })
  }
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Sign-in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('Change Password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
     .then(ui.changePasswordSuccess)
     .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('Sign-out ran!')

  // Don't need to use data object here!
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
