FROM node:18-bullseye-slim

WORKDIR "/app"

COPY ./package.json ./

RUN yarn install

COPY . .

CMD yarn start