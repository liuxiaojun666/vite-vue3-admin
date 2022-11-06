#!/bin/bash
ENV=$1
IMAGE_PREFIX=ccr.ccs.tencentyun.com/xxx
IMAGE_NAME_DEV=image_name
PROJECT_NAME=project_name  # 来自自研部署平台的项目名称
SHORT_HEAD=`git rev-parse --short HEAD`
TEST_ENV_IMAGE=$IMAGE_PREFIX/${IMAGE_NAME_DEV}:test_${SHORT_HEAD}
echo ${TEST_ENV_IMAGE}
docker build -t $TEST_ENV_IMAGE . --network="host" --build-arg build_type=test
sudo docker push $TEST_ENV_IMAGE
docker rmi $TEST_ENV_IMAGE
# 自研部署平台的接口，根据项目名称和镜像名称，更新测试环境的镜像
python3 /home/user/opt/auto_script/deploy/deploy.py ${PROJECT_NAME} ${TEST_ENV_IMAGE} ${ENV}
