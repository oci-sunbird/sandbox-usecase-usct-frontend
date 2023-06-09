FROM node:lts-alpine3.18 AS builder
WORKDIR /app

COPY . .

RUN npm install


RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]