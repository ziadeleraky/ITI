const http = require("http");
const fs = require("fs");
const calcFunction = require("./calcFunction.js");

function shiftFirstTwo(array) {
  array.shift();
  array.shift();
  return array;
}

const server = http
  .createServer((req, res) => {
    // console.log(req.url);
    if (req.url !== "/favicon.ico") {
      // url will be something like /add/1/2/3/4/5
      const url = req.url.split("/");
      // operations will be something like add or sub or mult or div
      const operation = url[1];
      // numbers will be something like [1, 2, 3, 4, 5]
      const numbers = shiftFirstTwo(url);
      const result = calcFunction[operation](...numbers);
      // console.log(calcFunction[operation](...numbers));
      res.write("<h1>Operation: " + operation + " " + numbers + " = " + "<span style='color: red'>" + result + "</span></h1>");
      // write the result to a file
      fs.writeFile("result.txt", "Operation: " + operation + " " + numbers + " = " + result, () => {});
      // end the response
      res.end();
    }
  })
  .listen(7000);
