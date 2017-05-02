#!/bin/bash

#TOKEN=token scripts/users.sh

# users
# CURL GET that gets all signed in users with a given user $TOKEN passed in
#  as a parameter

# Must sign up and sign in user first in order for this script to work

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/users"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
