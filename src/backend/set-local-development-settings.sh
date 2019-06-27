rm -rf ./client
mkdir -p ./client
cp -r ../build/* ./client

export BUILD_VERSION=0.1.1.1
export ENVIRONMENT_NAME=localdev
export APP_NAME=App1
export PORT=3000

# Build the client code and place it in /client/api1 in this directory.

npm run start