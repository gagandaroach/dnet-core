FROM nextcloud:21-apache

COPY ldap_tls.crt /etc/ldap/ca.crt
COPY ldap.conf /etc/ldap/ldap.conf

RUN set -ex; \
    \
    apt-get update; \
    apt-get install -y --no-install-recommends \
      ffmpeg \
      libmagickcore-6.q16-3-extra \
      libreoffice \
    ; \
    rm -rf /var/lib/apt/lists/*

ENV NEXTCLOUD_UPDATE=1