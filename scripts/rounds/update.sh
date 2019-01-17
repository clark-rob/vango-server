#!/bin/bash

API="http://localhost:4741"
URL_PATH="/rounds"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "round": {
      "number": "'"${NUMBER}"'",
      "phrase": "'"${PHRASE}"'",
      "drawing": "'"${DRAWING}"'"
    }
  }'

echo
