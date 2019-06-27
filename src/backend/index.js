const express = require("express");
const path = require("path");

const app = express();

//app.set("case sensitive routing", true);

// Serve the static files from the React app
var clientLocation = path.join(__dirname, "client/");
// eslint-disable-next-line no-console
console.log(`Back end running as app '${process.env.APP_NAME}'`);
// eslint-disable-next-line no-console
console.log(`Service static files from ${clientLocation}`);

app.use(`/${process.env.APP_NAME}`, express.static(clientLocation));

// An api endpoint that returns a short list of items
app.get(`/${process.env.APP_NAME}/api/getEnvironment`, (req, res) => {
  var environmentName = process.env.ENVIRONMENT_NAME;
  res.json(environmentName);
});

// Handles any requests that don't match the ones above
app.get(`/${process.env.APP_NAME}/*`, (req, res) => {
  res.sendFile(path.join(__dirname + "/client/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port);

// eslint-disable-next-line no-console
console.log(`App is listening on port ${port}`);
