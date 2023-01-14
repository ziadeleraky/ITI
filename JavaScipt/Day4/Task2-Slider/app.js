let pic = document.querySelector("img");
let i = 1;
let interval;
console.log(pic.src);

function nextPic() {
  clearInterval(interval);
  i++;
  interval = setInterval(function () {
    pic.src = "./imgs/" + i + ".jpg";
    i++;
    if (i > 6) {
      i = 5;
      clearInterval(interval);
    }
  }, 2000);
}

function prePic() {
  clearInterval(interval);
  i--;
  interval = setInterval(function () {
    if (i > 0) {
      pic.src = "./imgs/" + i + ".jpg";
      i--;
    } else {
      i = 1;
      clearInterval(interval);
    }
  }, 2000);
}

function stopShow() {
  clearInterval(interval);
}

function slideShow() {
  i = 1;
  interval = setInterval(function () {
    if (i <= 6) {
      pic.src = "./imgs/" + i + ".jpg";
      i++;
    } else {
      i = 1;
    }
  }, 2000);
}
