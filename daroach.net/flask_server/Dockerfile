# Simple Flask App Dockerfile for api.daroach.net
#
# author: Gagan Daroach <gagandaroach@gmail.com>

FROM python:3.8

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip3 install -r requirements.txt

COPY ./app /app

EXPOSE 5000

CMD [ "python", "flask_api.py" ]
