FROM node:18-bullseye-slim

WORKDIR "/app/backend"

COPY backend/package*.json ./

RUN yarn install


EXPOSE 8080
CMD yarn dev