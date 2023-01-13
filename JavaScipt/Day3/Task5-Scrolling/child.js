let scr = setInterval(function () {
  scrollBy(0, 25);
}, 250);

setTimeout(function () {
  clearInterval(scr);
  window.close();
}, 7000);
