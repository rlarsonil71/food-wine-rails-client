#!/bin/bash

#curl "http://localhost:3000/sign-up" \
#EMAIL=ben@larson.com PASSWORD=triplets scripts/sign-up.sh

# sign-up
# CURL POST that signs up a new user with the passed in $EMAIL and $PASSWORD
#  parameters

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/sign-up"
curl "${API}${URL_PATH}" \
      --include \
      --request POST \
      --header "Content-Type: application/json" \
      --data '{
        "credentials": {
          "email": "'"${EMAIL}"'",
          "password": "'"${PASSWORD}"'",
          "password_confirmation": "'"${PASSWORD}"'"
        }
      }'

# data output from curl doesn't have a trailing newline
echo
