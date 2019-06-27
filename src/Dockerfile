ARG BUILD_VERSION
ARG APP_NAME=App1
FROM node:12.2.0-alpine as build

# Create client app build
RUN mkdir -p /usr/src/app

# Install app dependencies
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install

ENV BUILD_VERSION=${BUILD_VERSION}
ENV APP_NAME=${APP_NAME}

# Bundle app source
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm run build


# Runtime Environment
FROM node:12.2.0-alpine

# Create client app and backend app directories
RUN mkdir -p /usr/src/app/client

# Install backend dependencies
WORKDIR /usr/src/app
COPY ./backend/package.json /usr/src/app
RUN npm install

# Copy over backend
COPY ./backend/. /usr/src/app

ENV BUILD_VERSION=${BUILD_VERSION}
ENV APP_NAME=${APP_NAME}
ENV PORT=3000

COPY --from=build /usr/src/app/build /usr/src/app/client

EXPOSE 3000

CMD [ "npm", "run",  "start" ]