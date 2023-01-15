let i1 = 10,
  i2 = 480,
  ii = 10,
  setInt,
  count = 0;

let container = window.getComputedStyle(document.getElementById("div1"));
let width = container.getPropertyValue("width");
let height = container.getPropertyValue("height");
height = parseInt(height);
width = parseInt(width);

let image1 = document.getElementById("icon1");
image1.style.top = height / 2 + "px";
image1.style.left = 10 + "px";

let image2 = document.getElementById("icon2");
let t = window.getComputedStyle(image2);
image2width = parseInt(t.getPropertyValue("width"));
image2.style.top = height / 2 + "px";
image2.style.left = width - image2width + "px";

let topimage = document.getElementById("top");
topimage.style.left = width / 2 + "px";

let button = document.getElementById("btn");
button.addEventListener("click", () => {
  if (button.value === "Go") {
    gofly();
    button.value = "Stop";
  } else {
    stopfly();
    button.value = "Go";
  }
});

function gofly() {
  image1.style.left = i1 + "px";
  image2.style.left = i2 + "px";
  topimage.style.top = i1 + "px";
  i1 += ii;
  i2 += ii * -1;

  count += 10;
  if (count == 460) {
    ii *= -1;
    count = 0;
  }
  setInt = setTimeout(gofly, 50);
}

function stopfly() {
  clearTimeout(setInt);
}

function resetimage() {
  clearTimeout(setInt);
  button.value = "go";

  image1.style.left = "0px";
  image2.style.left = width - image2width + "px";
  topimage.style.top = "0px";
  i1 = 10;
  i2 = 480;
  count = 0;
  ii = 10;
}
