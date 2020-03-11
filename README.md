# [Daroach.net Live HTML](https://daroach.net/)
> the html for my homelab webserver. https://daroach.net/

I use nuxt js to serve the content, amazing tool. I am using the bootstrap vue frontend becaue its easy. The deliberation was solely spent on the front end. [VueJS](https://vuejs.org/) is great.

## **FEEDBACK IS ENCOURAGED**

please contact me through email or at my page https://daroach.net/about/me

## Deployment setup

execute [docker-compose up](https://docs.docker.com/compose/reference/up/)

gets hit by jwilder's [nginx-proxy](https://github.com/jwilder/nginx-proxy) companion container. this container leverages the power of docker to wrap all my web services with https. absolutely great stuff.

## Development setup

Using node package manager. Execute below to run dev server.

```
cd dnet_nuxt
npm install
npm run serve
```