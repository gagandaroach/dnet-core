#!/bin/bash
# Author: Gagan Daroach <gagandaroach@gmail.com>
# Iterate through folders and launch docker services.

# echo "Usage:\n\
#     ./launch.sh <noargs> | Start each service.\n\
#     ./launch.sh build | Call build --pull before starting each service.\n\ #TODO
# "

services=(nginx-proxy-letsencrypt portainer.daroach.net media.daroach.net)

for service in ${services[@]}; do
    if [ -d "$service" ]; then
        echo Service: "$service" found. Entering dir.
        cd "$service" || exit
        docker-compose down
        echo Done. Returning to parent dir.
        cd .. || exit
    else
        echo Service: "$service" not found.
    fi
done
