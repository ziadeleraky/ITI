conditionizr.load("MathPoly.js", ["chrome"]);
conditionizr.load("MathPoly.css", ["chrome"]);

var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");

// the triangle
context.beginPath();
context.moveTo(75, 75);
context.lineTo(75, 200);
context.lineTo(200, 200);
context.closePath();

// the outline
context.lineWidth = 10;
context.strokeStyle = "black";
context.stroke();

// the fill color
context.fillStyle = "red";
context.fill();

// Text
context.font = "36pt Georgia";
context.fillText("b", 25, 150);
context.fillText("a", 125, 250);
context.fillText("c", 170, 150);