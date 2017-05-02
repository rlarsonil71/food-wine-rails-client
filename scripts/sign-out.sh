#!/bin/bash

#ID=2 TOKEN=token scripts/sign-out.sh

# sign-out
# CURL DELETE that signs out a signed in user with a given user
#  $ID and $TOKEN passed in parameters

# Must sign up and sign in user first in order for this script to work

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/sign-out/$ID"
curl "${API}${URL_PATH}" \
      --include \
      --request DELETE \
      --header "Authorization: Token token=$TOKEN"

# data output from curl doesn't have a trailing newline
echo
