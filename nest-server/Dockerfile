FROM keymetrics/pm2:latest-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install --production

COPY ./ ./

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]