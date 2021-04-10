#!/bin/bash

ADDRESS="localhost:3001"
API_KEY="apikey"
CURL_OPTS="-s"

echo GET $ADDRESS
curl $CURL_OPTS -X GET $ADDRESS
echo 
echo

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

