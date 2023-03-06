const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("../Client/index.html", "utf-8");
const styles = fs.readFileSync("../Client/styles/styles.css", "utf-8");
const ico = fs.readFileSync("../Client/assets/imgs/ico.png");
let welcome = fs.readFileSync("../Client/welcome.html", "utf-8");
let dataObj;
const clientFiles = fs.readFileSync("../Client/clients.json", "utf-8");
const script = fs.readFileSync("../Client/script.js", "utf-8");
const tableStyle = fs.readFileSync("../Client/styles/tableStyle.css", "utf-8");

http
  .createServer((req, res) => {
    console.log("Requests", req.url);
    if (req.method === "GET") {
      switch (req.url) {
        case "/index.html":
        case "/Client/index.html":
          res.write(index);
          break;
        case "/styles.css":
        case "/Client/styles/styles.css":
          res.write(styles);
          break;
        case "/table.css":
        case "/Client/styles/tableStyle.css":
          res.write(tableStyle);
          break;
        case "/ico.png":
        case "/Client/assets/imgs/ico.png":
        case "/favicon.ico":
          res.write(ico);
          break;
        case "/clients.json":
        case "/Client/clients.json":
          res.write(clientFiles);
          break;
        case "/script.js":
        case "/Client/script.js":
          res.write(script);
          break;
        default:
          if (req.url.includes("/Client/welcome.html")) {
            res.write(welcome);
          }
      }
      res.end();
    } else if (req.method === "POST") {
      // console.log("POST");
      req.on("data", (data) => {
        // console.log(data.toString());
        const dataArray = data.toString().split("&");
        dataObj = {
          name: dataArray[0].split("=")[1].replace("+", " "),
          email: dataArray[1].split("=")[1].replace("%40", "@"),
          mobile: dataArray[2].split("=")[1].replace("%2", "+"),
          address: dataArray[3].split("=")[1].replace("+", " "),
        };
        // console.log(dataObj);
        // write the obj into json
        fs.readFile("../Client/clients.json", (err, data) => {
          let jsonData = JSON.parse(data);
          // console.log(jsonData)
          jsonData.push(dataObj);
          jsonData = JSON.stringify(jsonData);
          fs.writeFileSync("../Client/clients.json", jsonData);
        });
      });
      req.on("end", () => {
        res.setHeader("content-type", "text/html");
        welcome = welcome.replace("{clientName}", dataObj.name);
        welcome = welcome.replace("{clientEmail}", dataObj.email);
        welcome = welcome.replace("{clientMobile}", dataObj.mobile);
        welcome = welcome.replace("{clientAddress}", dataObj.address);

        res.write(welcome);
        res.end();

        // welcome = welcome.replace(dataObj.name, "{clientName}");
        // welcome = welcome.replace(dataObj.email, "{clientEmail}");
        // welcome = welcome.replace(dataObj.mobile, "{clientMobile}");
        // welcome = welcome.replace(dataObj.address, "{clientAddress}");
      });
    }
  })
  .listen(7000, () => {
    console.log("http://localhost:7000");
  });
