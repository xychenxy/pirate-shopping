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

# ARG VITE_FIREBASE_API_KEY
# ARG VITE_FIREBASE_AUTH_DOMAIN
# ARG VITE_FIREBASE_PROJECT_ID
# ARG VITE_FIREBASE_STORAGE_BUCKET
# ARG VITE_FIREBASE_MESSAGING_SENDER_ID
# ARG VITE_FIREBASE_APP_ID
# ARG VITE_FIREBASE_MEASUREMENT_ID
# ARG VITE_STRIPE_PUBLISHABLE_KEY
# ARG STRIPE_SECRET_KEY

# ENV VITE_FIREBASE_API_KEY=${VITE_FIREBASE_API_KEY} \
#     VITE_FIREBASE_AUTH_DOMAIN=${VITE_FIREBASE_AUTH_DOMAIN} \
#     VITE_FIREBASE_PROJECT_ID=${VITE_FIREBASE_PROJECT_ID} \
#     VITE_FIREBASE_STORAGE_BUCKET=${VITE_FIREBASE_STORAGE_BUCKET} \
#     VITE_FIREBASE_MESSAGING_SENDER_ID=${VITE_FIREBASE_MESSAGING_SENDER_ID} \
#     VITE_FIREBASE_APP_ID=${VITE_FIREBASE_APP_ID} \
#     VITE_FIREBASE_MEASUREMENT_ID=${VITE_FIREBASE_MEASUREMENT_ID} \
#     STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY} 

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



