# FROM node:18-bullseye-slim as ui-build
# WORKDIR "/app/react-app"
# COPY react-app/package.json react-app/yarn.lock ./
# RUN yarn install --frozen-lockfile
# COPY react-app/ .
# RUN yarn build


# FROM node:18-bullseye-slim as server-build

# WORKDIR "/app/backend"
# COPY backend/package.json backend/yarn.lock ./
# RUN yarn install --frozen-lockfile
# COPY backend/ .


# FROM node:18-bullseye-slim as server-runner

# WORKDIR "/app/backend"
# COPY --from=server-build /app/backend/dist .
# COPY --from=ui-build /app/react-app/dist dist
# EXPOSE 8080
# CMD node --trace-warnings server.js

FROM node:18-bullseye-slim as server-build

WORKDIR /app

COPY package*.json ./

COPY react-app/package*.json react-app/
RUN yarn install-react-app

COPY backend/package*.json backend/
RUN yarn install-backend

COPY react-app/ react-app/
RUN yarn react-app-build

COPY backend/ backend/

CMD node --trace-warnings backend/src/server.js

EXPOSE 5000



