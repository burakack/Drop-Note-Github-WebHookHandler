const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.urlencoded({ extended: true })); // for taking body paramaters
app.use(express.json()); //parsing json like query
const http = require("http");
const server = http.createServer(app);

const routes = require("./src/routes");
routes.map((route) => {
  app.use(`/${route.prefix}`, route.route);
});

app.route("/").post((req, res) => {
  const shell = require("shelljs");
  shell.exec("./updateproject.sh");
  res.send({ msg: "GUNCELLENDİ" });
});

server.listen(3001, () => {
    console.log(
      `🚀 Server listening to ${`http://localhost:3001`} `
    );
  });
  
  module.exports = app;