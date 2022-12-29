#!/bin/bash
container="dnet_nuxt:dev"
port="3000:3000"
nuxt_dir="$(pwd)"
container_nuxt_dir="/usr/src/nuxt-webserver"

if [ "$1" = "build" ]; then
    docker build . -t $container
fi

docker run -u "$(id -u):$(id -g)" --rm -it -v "$nuxt_dir:$container_nuxt_dir" -p $port $container /bin/sh -c "yarn install && yarn dev"

# docker run -u "$(id -u):$(id -g)" --rm -it -v "$nuxt_dir:$container_nuxt_dir" -p $port $container /bin/sh

echo "docker returned: $?"
exit 0
