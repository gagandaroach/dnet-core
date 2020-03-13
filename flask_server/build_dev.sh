#!/bin/bash

echo running dev server on localhost:5000
echo safe to ctrl-c out of script, flask server stays running in container

docker stop flask_server
docker rm flask_server
docker build -t dtech_api_flask:latest .
docker run -d -p 5000:5000 --name flask_server dtech_api_flask 
docker logs -f flask_server