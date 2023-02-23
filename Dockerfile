FROM node:18-bullseye-slim as server-build

WORKDIR /app

COPY package*.json ./

COPY react-app/package*.json react-app/
COPY react-app/auth react-app/
RUN yarn install-react-app

COPY backend/package*.json backend/
COPY backend/auth /backend
RUN yarn install-backend

COPY react-app/ react-app/
RUN yarn react-app-build

COPY backend/ backend/

CMD node --trace-warnings backend/src/server.js

EXPOSE 5000



