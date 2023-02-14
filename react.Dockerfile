FROM node:18-bullseye-slim

WORKDIR "/app/react-app"

COPY react-app/package*.json  ./

RUN yarn install

EXPOSE 8080
CMD yarn dev