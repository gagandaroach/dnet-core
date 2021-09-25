#!/bin/bash
# Author: Gagan Daroach <gagandaroach@gmail.com>
# Iterate through folders and launch docker services via docker-compose up.

echo "Usage:"
echo " ./up.sh --- Start each service."
echo " ./up.sh build --- Rebuild each service before starting."
echo

service_file="active_services.txt"
cat $service_file | while read service; do
    if [ -d "$service" ]; then
        echo ">>>>> $service found. <<<<<"
        cd "$service" || exit
        if [ "$1" == "build" ]; then
            echo ">> dc build --pull <<"
            docker-compose build --pull
        fi
        echo ">> dc up -d <<"
        docker-compose up -d
        echo ">>>>> $service done. <<<<<"
        cd .. || exit
    else
        echo ">>>>> $service not found. <<<<<"
    fi
done
