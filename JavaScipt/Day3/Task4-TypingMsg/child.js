let reqMsg = prompt("Enter a Message");
let msg = [];
let i = 0;
let x;

setInterval(function () {
  if (i < reqMsg.split("").length) {
    x = reqMsg[i];
    msg.push(x);
    document.write("<span>" + msg.join("") + "</span>");
    i++;
    msg = [];
  } else {
    window.close();
  }
}, 200);
