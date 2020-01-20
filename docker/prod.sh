#!/usr/bin/env bash

IMAGE_NAME=listvue-prod
CONTAINER_NAME=listvue-prod

THIS_DIR=$(dirname "$0")
cd "${THIS_DIR}/.."

docker build \
       -f docker/Dockerfile.production \
       -t ${IMAGE_NAME} \
       . && \
docker run -i --rm \
       -p 8080:80 \
       --name ${CONTAINER_NAME} \
       ${IMAGE_NAME}
