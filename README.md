# [Daroach.net](https://daroach.net) Source Code

It has been a life goal to host a website on the internet. I envy those who grew up during the dot com boom. Daroach.net is a stack of web services running on my server.

I use docker to modularize each microservice, and docker-compose to organize each microservice stack. The nginx-proxy-letencrypt directory contains the primary entrypoint for daroach.net, routing traffic to the other services.

Organized by domain name, each folder contains the microservice source code, `docker-compose.yml` stack description, and configuration details.

| Service Stack           | Details                                                    |
| ----------------------- | ---------------------------------------------------------- |
| nginx-proxy-letsencrypt | jwilder's nginx proxy and letsencrypt companion container. |
| daroach.net             | VueJS Nuxt hybrid server-client application.               |
| api.daroach.net         | NodeJS Express App w/ MongoDB                              |
| cloud.daroach.net       | Nextcloud                                                  |
| portainer.daroach.net   | Docker container management                                |
| salmon.daroach.net      | Webchat                                                    |
| media.daroach.net       | Plex                                                       |

I have port forwarding set up from my router to the nginx-proxy-letsencrypt docker service stack. Then this proxy connects to all the other web service docker containers through a docker network called "daroachnetwork".

## Server Host Port Mappings

| Stack                   | Service       | Host Port(s) | Virtual Port(s) |
|-------------------------|---------------|--------------|-----------------|
| nginx-proxy-letsencrypt | nginx         | 20080,20443  | 80,443          |
| daroach.net             | nuxt server   | 20000        | 3000            |
| portainer.daroach.net   | portainer     | 20001        | 9000            |
| api.daroach.net         | node api      | 20002        | 3001            |
| api.daroach.net         | mongodb       | 20003        | 27017           |
| api.daroach.net         | mongo express | 20004        | 8081            |
| salmon.daroach.net      | rocketchat    | ~            | 3000            |
| cloud.daroach.net       | nextcloud     | ~            | 80              |
| media.daroach.net       | plex          | ~            | 32400           |
| media.daroach.net       | deluge        | 20010        | 8112            |
| media.daroach.net       | jackett       | 20011        | 9117            |
| media.daroach.net       | radarr        | 20012        | 7878            |
| media.daroach.net       | sonarr        | 20013        | 8989            |
| dekho.daroach.net       | node          | ~            | 80              |
| tracking.daroach.net    | nextjs        | ~            | 3000            |
| medschooldreams.com     | nextjs        | ~            | 3000            |
