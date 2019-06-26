ARG BUILD_VERSION

#build environment
FROM node:12.2.0-alpine as build

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
RUN npm run build


# Runtime Environment
FROM nginx:1.16.0-alpine
RUN mkdir -p /usr/share/nginx/html/app1
COPY --from=build /usr/src/app/build /usr/share/nginx/html/app1

ENV BUILD_VERSION=${BUILD_VERSION}

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]