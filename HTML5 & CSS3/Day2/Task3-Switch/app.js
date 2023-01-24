let canvasElement = document.querySelector("#myCanvas");
let context = canvasElement.getContext("2d");

function drawUpperHalfCircle() {
  context.beginPath();
  context.arc(100, 75, 50, 0, Math.PI);
  context.lineWidth = 7;
  context.stroke();
  context.fillStyle = "yellow";
  context.fill();
}

function drawLowerHalfCircle() {
  context.beginPath();
  context.arc(100, 75, 50, 0, Math.PI, true);
  context.lineWidth = 7;
  context.stroke();
  context.fillStyle = "yellow";
  context.fill();
}

function clearDrawing() {
  context.clearRect(0, 0, canvasElement.width, canvasElement.height);
  context.fillStyle = "white";
  context.fill();
}

let flag = true;
let counter = 0;

let interval = setInterval(function () {
  counter++;
  clearDrawing();
  if (flag) {
    drawUpperHalfCircle();
    flag = false;
  } else {
    drawLowerHalfCircle();
    flag = true;
  }

  if (counter == 10) {
    drawUpperHalfCircle();
    drawLowerHalfCircle();
    clearInterval(interval);
  }
}, 500);
