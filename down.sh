#!/bin/bash
# Author: Gagan Daroach <gagandaroach@gmail.com>

echo "Usage:"
echo " ./down.sh --- Stop each service."

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
