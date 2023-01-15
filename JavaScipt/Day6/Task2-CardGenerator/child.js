let img = document.getElementById("image");
img.src = getCookie("src");

let txt = document.getElementById("paragraph");
txt.innerText = getCookie("msg");

document.getElementById("close").addEventListener("click", function () {
  window.close();
});
