const express = require("express");
const app = express();
const serverless = require("serverless-http");

app.get("/", (req, res) => {
  res.send({ status: 200, message: "Hello World!" });
});

const handler = serverless(app);

const startServer = async () => {
  app.listen(3000, () => {
    console.log("listening on port 3000!");
  });
};

startServer();

module.exports.handler = (event, context, callback) => {
  const response = handler(event, context, callback);
  return response;
};
