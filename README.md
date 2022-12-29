# [Daroach.net](https://daroach.net) Source Code

It has been a life goal to host a website on the internet. I envy those who grew up during the dot com boom. Daroach.net is a stack of web services running on my server.

I use docker to modularize each microservice, and docker-compose to organize each microservice stack. The nginx-proxy-letencrypt directory contains the primary entrypoint for daroach.net, routing traffic to the other services.

