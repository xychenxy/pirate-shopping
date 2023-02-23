FROM node:18-bullseye-slim

WORKDIR "/app/backend"

COPY backend/package*.json ./

COPY backend/auth ./

RUN yarn install


EXPOSE 8080
CMD yarn dev