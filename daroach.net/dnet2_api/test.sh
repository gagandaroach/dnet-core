#!/bin/bash

ADDRESS="localhost:3001"
API_KEY="apikey"
CURL_OPTS="-s"

TEST_JSON='{"site":"test","route":"bash.sh"}'
echo $TEST_JSON

echo POST to hits
curl $CURL_OPTS -X POST -H "Content-Type: application/json" -d $TEST_JSON $ADDRESS/dnet/hits?api-key=$API_KEY
echo 
echo

# echo GET $ADDRESS
# curl $CURL_OPTS -X GET $ADDRESS
# echo 
# echo

# echo GET /dnet no key
# curl $CURL_OPTS -X GET $ADDRESS/dnet
# echo 
# echo

echo GET /dnet
curl $CURL_OPTS -X GET $ADDRESS/dnet?api-key=$API_KEY
echo 
echo

echo GET /dnet/hits
curl $CURL_OPTS -X GET $ADDRESS/dnet/hits?api-key=$API_KEY
echo 
echo


