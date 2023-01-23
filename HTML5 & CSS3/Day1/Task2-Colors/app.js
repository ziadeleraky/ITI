var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

var paragraph = document.getElementById("colorEffect");

red.addEventListener("input", function () {
  paragraph.style.color = `rgb(${red.value},${green.value},${blue.value})`;
});
blue.addEventListener("input", function () {
  paragraph.style.color = `rgb(${red.value},${green.value},${blue.value})`;
});
green.addEventListener("input", function () {
  paragraph.style.color = `rgb(${red.value},${green.value},${blue.value})`;
});
