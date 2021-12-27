# BASE
FROM node:16.13.1-slim AS base
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --no-progress
COPY . .

# BUILD
FROM base AS build
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ARG _SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$_SENTRY_AUTH_TOKEN
WORKDIR /build

COPY --from=base /app ./
RUN apt-get update -y
RUN apt-get install ca-certificates -y
RUN yarn build

# Package install
FROM node:16.13.1-slim AS node_modules

ENV NODE_ENV=production
WORKDIR /modules

COPY package.json yarn.lock ./
RUN yarn install --non-interactive --frozen-lockfile --production --no-progress

# Production Run
FROM gcr.io/distroless/nodejs:16
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

COPY package.json yarn.lock next.config.js ./
COPY --from=build /build/public ./public
COPY --from=build /build/.next ./.next
COPY --from=node_modules /modules/node_modules ./node_modules

EXPOSE 8080

CMD ["node_modules/.bin/next", "start", "-p", "$PORT"]
