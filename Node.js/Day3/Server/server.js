const express = require("express");
const app = express();
const path = require("path");
const bodyParse = require("body-parser");
const fs = require("fs");

// use body-parser to parse form data sent via HTTP POST requests
app.use(bodyParse.urlencoded({ extended: true }));
// use body-parser to parse JSON bodies sent by API clients
app.use(bodyParse.json());

// use express.static to serve static files from the Client folder
app.use(express.static(path.join(__dirname, "../Client")));

let welcome = fs.readFileSync("../Client/welcome.html", "utf-8");
let dataObj = {};

app.get("/index.html", (req, res) => {
  res.sendFile("index.html");
});

// middleware to write data to the json file
const middleware = (req, res, next) => {
  fs.readFile("../Client/clients.json", (err, data) => {
    // parse JSON object to JS object
    let jsonData = JSON.parse(data);
    jsonData.push(dataObj);
    // stringify JS object to JSON object
    jsonData = JSON.stringify(jsonData);
    fs.writeFileSync("../Client/clients.json", jsonData);
  });

  next();
};

app.post("/welcome.html", middleware, (req, res) => {
  dataObj = req.body;
  // console.log(dataObj);
  welcome = welcome.replaceAll("{clientName}", dataObj.name);
  welcome = welcome.replace("{clientEmail}", dataObj.email);
  welcome = welcome.replace("{clientMobile}", dataObj.mobile);
  welcome = welcome.replace("{clientAddress}", dataObj.address);

  res.send(welcome);

  welcome = welcome.replaceAll(dataObj.name, "{clientName}");
  welcome = welcome.replace(dataObj.email, "{clientEmail}");
  welcome = welcome.replace(dataObj.mobile, "{clientMobile}");
  welcome = welcome.replace(dataObj.address, "{clientAddress}");
});

// Open Server
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
