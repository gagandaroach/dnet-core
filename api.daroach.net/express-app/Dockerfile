FROM node:lts-alpine

WORKDIR /usr/local/dnet-api

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3001
CMD [ "node", "app.js" ]