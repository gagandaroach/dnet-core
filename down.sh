#!/bin/bash
# Author: Gagan Daroach <gagandaroach@gmail.com>
# Iterate through folders and launch docker services.

# echo "Usage:\n\
#     ./launch.sh <noargs> | Start each service.\n\
#     ./launch.sh build | Call build --pull before starting each service.\n\ #TODO
# "

service_file="active_services.txt"
cat $service_file | while read service; do
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
