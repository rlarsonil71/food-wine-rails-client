#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
#ID=2 OLDPW=triplets NEWPW=password TOKEN=token scripts/change-password.sh
#ID=2 OLDPW=password NEWPW=triplets TOKEN=token scripts/change-password.sh

# change-password
# CURL PATCH that changes the password for a signed in user with a given user
#  $ID passed in parameter as well as passed in $OLDPW and $NEWPW parameters

# Must sign up and sign in user first in order for this script to work

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/change-password/$ID"
curl --include --request PATCH "${API}${URL_PATH}" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
