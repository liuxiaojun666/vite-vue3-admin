#!/usr/bin/env sh

# 首次如果使用的部署pnpm，可能会有残留文件。需要清理一下，然后重新安装

if [ -f package-lock.json ]; then
  pnpm run rm
  pnpm install
fi

if [ -f yarn.lock ]; then
  pnpm run rm
  pnpm install
fi
