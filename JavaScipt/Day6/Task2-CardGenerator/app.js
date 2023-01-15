// Prevent Text Area From Resizing
let txtarea = document.getElementById("pmsg");
txtarea.style.resize = "none";

let radio = document.getElementsByName("pic");
for (let i = 0; i < 6; i++) {
  radio[i].addEventListener("blur", function () {
    setCookie("src", radio[i].previousElementSibling.firstElementChild.src, 7);
  });
}

let txtmsg = document.getElementById("pmsg");
txtmsg.addEventListener("blur", function (e) {
  setCookie("msg", e.target.value, 7);
});

let btn = document.getElementById("btn");
let win;
btn.addEventListener("click", function () {
  win = open("./child.html", "", "width=550, height=250");
  win.focus();
});
