FROM node:16.18.0 AS build
ARG build_type=prod

WORKDIR /app/

COPY ./scripts/ /app/scripts/
COPY ./config/ /app/config/

COPY package*.json /app/
RUN npm ci --registry=http://registry.npm.taobao.org

COPY . /app/
RUN npm run build:${build_type}

FROM nginx:stable-alpine
ADD ./deploy/default.conf /etc/nginx/conf.d/default.conf
ADD ./deploy/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

