let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

// Blue
let grd1 = ctx.createLinearGradient(0, 0, 0, 200);
grd1.addColorStop(0, "#03bdff");
grd1.addColorStop(1, "#cff2ff");
ctx.fillStyle = grd1;
ctx.strokeStyle = grd1;
ctx.beginPath();
ctx.fillRect(0, 0, 400, 200);

// Green
let grd2 = ctx.createLinearGradient(0, 200, 0, 400);
grd2.addColorStop(0, "#03ff7d");
grd2.addColorStop(1, "#cfffe6");
ctx.fillStyle = grd2;
ctx.strokeStyle = grd2;
ctx.beginPath();
ctx.fillRect(0, 200, 400, 400);

let grd3 = ctx.createLinearGradient(100, 100, 0, 300);
grd3.addColorStop(0, "black");
grd3.addColorStop(1, "#66666635");
ctx.fillStyle = grd3;
ctx.strokeStyle = grd3;
ctx.fillRect(100, 150, 10, 150);

let grd4 = ctx.createLinearGradient(100, 100, 0, 300);
grd4.addColorStop(0, "black");
grd4.addColorStop(1, "#66666635");
ctx.fillStyle = grd4;
ctx.strokeStyle = grd4;
ctx.fillRect(300, 150, 10, 150);

let grd5 = ctx.createLinearGradient(100, 100, 0, 300);
grd5.addColorStop(0, "black");
grd5.addColorStop(1, "#66666635");
ctx.fillStyle = grd5;
ctx.strokeStyle = grd5;
ctx.fillRect(100, 150, 200, 10);