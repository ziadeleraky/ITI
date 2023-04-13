const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/products", (req, res) => {
  res.status(200).send("Products");
});

var server = app.listen(3000);
module.exports = server;
