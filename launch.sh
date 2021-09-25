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
        echo ">>>>> $service found. <<<<<"
        cd "$service" || exit
        if [ "$1" == "build" ]; then
            echo ">>>>> dc build --pull <<<<<"
            docker-compose build --pull
        fi
        echo ">>>>> dc up -d <<<<<"
        docker-compose up -d
        echo ">>>>> $service done. <<<<<"
        cd .. || exit
    else
        echo ">>>>> $service not found. <<<<<"
    fi
done
