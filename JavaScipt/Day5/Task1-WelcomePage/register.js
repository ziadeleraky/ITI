const expDays = 7;
let usrname = document.getElementById("name");
let usrage = document.getElementById("age");
let usrmale = document.getElementById("male");
let usrfemale = document.getElementById("female");
let usrColor = document.getElementById("color");

usrname.addEventListener("blur", function (e) {
  if (e.target.value) {
    setCookie(usrname.name, e.target.value, expDays);
  }
});

usrage.addEventListener("blur", function (e) {
  if (e.target.value) {
    setCookie(usrage.name, e.target.value, expDays);
  }
});

usrmale.addEventListener("blur", function (e) {
  setCookie(usrmale.name, e.target.value, expDays);
});

usrfemale.addEventListener("blur", function (e) {
  setCookie(usrfemale.name, e.target.value, expDays);
});

usrColor.addEventListener("blur", function (e) {
  setCookie(usrColor.name, e.target.value, expDays);
});

if (!hasCookie("visits")) {
  setCookie("visits", 1, expDays);
}

function goToWelcome() {
  location.assign("./welcome.html");
}
