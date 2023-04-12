const express = require("express");
const app = express();
const test = require("./test/index.test.js");

app.use(test);

app.listen(4000, () => {
  console.log("server is running on port 3000");
});
