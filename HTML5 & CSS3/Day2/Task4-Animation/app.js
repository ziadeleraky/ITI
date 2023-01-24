let canvasElement = document.querySelector("#myCanvas");
let context = canvasElement.getContext("2d");

context.beginPath();
context.moveTo(0, 0);

let x = 0;
let y = 0;

let animation = setInterval(function () {
  x += 10;
  y += 10;
  context.lineTo(x, y);
  context.stroke();
  if (x >= 400) {
    clearInterval(animation);
    alert("Animation Ended");
  }
}, 100);
