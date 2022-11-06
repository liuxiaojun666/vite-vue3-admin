#!/bin/bash
IMAGE_PREFIX=ccr.ccs.tencentyun.com/xxx
IMAGE_NAME_PROD=image_name

IMAGE_TAG=`date +'%Y%m%d%H%M'`-`git rev-parse --short HEAD`
PROD_IMAGE=$IMAGE_PREFIX/${IMAGE_NAME_PROD}:prod_${IMAGE_TAG}
echo ${PROD_IMAGE}
docker build -t $PROD_IMAGE . --network="host"
sudo docker push $PROD_IMAGE
docker rmi $PROD_IMAGE
