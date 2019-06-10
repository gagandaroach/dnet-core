#!/bin/bash

docker-compose build --pull
docker-compose down
docker-compose up -d
docker-compose logs -f
