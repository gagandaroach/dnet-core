# DAROACHNET

My (Gagan Daroach) personal website source code. Uses VueJS, Nuxt, & Bootstrap.

Feel free to reference or clone to launch your own site. Happy coding!

Please ask any questions via a pull request or direct message.

## Using Nuxt Webserver

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how Nuxt things work, check out [Nuxt.js docs](https://nuxtjs.org).

```
$ docker build . -t dnet_nuxt:dev
$ docker run -u "$(id -u):$(id -g)" -it -v "$(pwd):/usr/src/nuxt-webserver" -p 3000:3000 dnet_nuxt:dev /bin/sh
```