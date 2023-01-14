let current = document.querySelectorAll("img");
let i = 0;
let slider;

function slideShow() {
  slider = setInterval(function () {
    current[i].src = "./imgs/marble1.jpg";
    if (i < 4) {
      i++;
    } else {
      i = 0;
    }
    current[i].src = "./imgs/marble3.jpg";
  }, 1000);
}
slideShow();

function stopSlide() {
  clearInterval(slider);
}
