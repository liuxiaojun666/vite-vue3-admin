#!/bin/bash

IMAGE_PREFIX=ccr.ccs.tencentyun.com/xxx
IMAGE_NAME_DEV=image_name
SHORT_HEAD=`git rev-parse --short HEAD`
TEST_ENV_IMAGE=$IMAGE_PREFIX/${IMAGE_NAME_DEV}:prod_${SHORT_HEAD}
echo ${TEST_ENV_IMAGE}
docker build -t $TEST_ENV_IMAGE . --network="host"
