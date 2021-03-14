#!/bin/bash
# Author: Gagan Daroach <gagandaroach@gmail.com>
# Iterate through folders and launch docker services.

# echo "Usage:\n\
#     ./launch.sh <noargs> | Start each service.\n\
#     ./launch.sh build | Call build --pull before starting each service.\n\
# "

services=(daroach.net portainer.daroach.net cloud.daroach.net)

for service in ${services[@]}; do
    if [ -d "$service" ]; then
        echo Service: "$service" found. Entering dir.
        cd "$service" || exit
        if [ $1 -eq "build"]; then
            echo "### Building service.."
            docker-compose build --pull  
        fi
        docker-compose up -d
        echo Done. Returning to parent dir.
        cd .. || exit
    else
        echo Service: "$service" not found.
    fi
done
