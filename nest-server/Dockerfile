FROM node:10-alpine AS builder
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM keymetrics/pm2:latest-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app ./
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]