#!/bin/bash

#ID=2 TOKEN=token scripts/user.sh

# user
# CURL GET that gets the signed in user with a given user $ID and $TOKEN
#  passed in parameters

# Must sign up and sign in user first in order for this script to work

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/users"
curl "${API}${URL_PATH}/$ID" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
