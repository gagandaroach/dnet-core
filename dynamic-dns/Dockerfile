ARG CONF_FILE=example.com.conf

FROM dragoncube/google-domains-ddns

LABEL maintainer="gagandaroach@gmail.com"

ARG CONF_FILE

RUN echo "Using conf file: ${CONF_FILE}"

COPY "./${CONF_FILE}" "/config/google-domains-ddns.conf"
