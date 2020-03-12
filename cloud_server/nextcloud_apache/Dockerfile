FROM nextcloud:apache

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