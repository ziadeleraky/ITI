let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

let img = new Image();
img.src = "./imgs/jdkwvolq7oaul6nemgxt (Custom).jpg";
img.onload = function () {
  ctx.drawImage(img, 0, 0);
  ctx.font = "40pt Georgia";
  ctx.fillStyle = "#e6e6e651";
  ctx.fillText("JavaScipt", 45, 230);
  ctx.font = "40pt Georgia";
  ctx.fillStyle = "white";
  ctx.fillText("JavaScipt", 40, 225);
};
