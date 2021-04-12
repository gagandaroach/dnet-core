---
title: [Daroach.net](https://daroach.net) Source Code
description: The virtual machine configuration for launching daroach.net, and the underlying source code for the microservices and applications.
---

# [Daroach.net](https://daroach.net) Source Code

It has been a life goal to host a website on the internet. I envy those who grew up during the dot com boom. Daroach.net is a stack of web services running on my server.

I use docker to modularize each microservice, and docker-compose to organize each microservice stack. The nginx-proxy-letencrypt directory contains the primary entrypoint for daroach.net, routing traffic to the other services.

Organized by domain name, each folder contains the microservice source code, `docker-compose.yml` stack description, and configuration details.

| Service                 | Details                                                    |
| ----------------------- | ---------------------------------------------------------- |
| nginx-proxy-letsencrypt | jwilder's nginx proxy and letsencrypt companion container. |
| daroach.net             | VueJS Nuxt hybrid server-client application.               |
| api.daroach.net         | NodeJS Express App w/ MongoDB                              |
| cloud.daroach.net       | Nextcloud                                                  |
| portainer.daroach.net   | Docker container management                                |
| salmon.daroach.net      | Webchat                                                    |
| media.daroach.net       | Plex                                                       |

I have port forwarding set up from my router to the nginx-proxy-letsencrypt docker service stack. Then this proxy connects to all the other web service docker containers through a docker network called "daroachnetwork".