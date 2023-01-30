let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let counter = 0;
let angle = 30;

let interval = setInterval(function () {
  if (counter == 12) {
    angle = -1 * angle;
    ctx.clearRect(0, 0, 700, 650);
  } else {
    ctx.beginPath();
    ctx.translate(80, 80);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.translate(-80, -80);
    ctx.rect(90, 80, 60, 20);
    ctx.fillStyle = "rgba(127, 191, 255, 0.8)";
    ctx.fill();
  }

  counter++;

  if (counter >= 25) {
    clearInterval(interval);
  }
}, 100);
