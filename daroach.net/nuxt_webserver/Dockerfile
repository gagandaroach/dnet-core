FROM node:lts-alpine

ENV HOST 0.0.0.0
EXPOSE 3000

# make the 'app' folder the current working directory
RUN mkdir -p /usr/src/nuxt-webserver
WORKDIR /usr/src/nuxt-webserver

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN yarn install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build web objects
RUN yarn build

CMD [ "yarn", "start" ]
