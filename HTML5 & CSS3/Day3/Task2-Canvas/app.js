let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

let grd1 = ctx.createRadialGradient(150, 0, 50, 150, 150, 200);
grd1.addColorStop(0, "white");
grd1.addColorStop(1, "#224aff");

ctx.fillStyle = grd1;
ctx.beginPath();
ctx.arc(200, 200, 150, 0, 2 * Math.PI);
ctx.fill();

let grd2 = ctx.createRadialGradient(100, 100, 70, 150, 150, 250);
grd2.addColorStop(1, "white");
grd2.addColorStop(0, "#224aff");

ctx.fillStyle = grd2;
ctx.beginPath();
ctx.arc(200, 200, 125, 0, 2 * Math.PI);
ctx.fill();

ctx.font = "175pt Georgia";
ctx.fillStyle = "white";
ctx.fillText("Z", 125, 285);
