let x = location.toString();
let queries = decodeURIComponent(x);
console.log(queries);
queries = queries.substring(1); // Without ?
queries = queries.split("&"); // ['username=ziadeleraky', 'email=ziad%40test.com', 'password=1234', 'title=software+developer', 'phone=01225215679', 'gender=male', 'address=sheikh+zayed']
// console.log(queries);

let infoCop = [];
for (let i in queries) {
  infoCop[i] = queries[i].split("=");
}
// console.log(infoCop);

let info = [];
for (let i = 0; i < infoCop.length; i++) {
  info[infoCop[i][0]] = infoCop[i][1];
}
// console.log(info);

document.querySelector(".username").innerHTML =
  "<h2>Hello, " + info.title + ": " + info.username + "</h2>";

document.querySelector(".info").innerHTML =
  "<h3> Address: " +
  info.address +
  "<br>Gender: " +
  info.gender +
  "<br> Email: " +
  info.email +
  "<br>Mobile: " +
  info.phone +
  "</h3>";

if (navigator.userAgent.indexOf("Chrome") > -1) {
  console.log(
    "%cWelcome in Google Chrome",
    "color:green; font-weight:bolder; font-size:2.5rem;"
  );
} else {
  console.log(
    "%cWe Recommend you to use Google Chrome",
    "color:red; font-weight:bolder; font-size:2.5rem;"
  );
}