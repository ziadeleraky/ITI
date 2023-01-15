document.addEventListener("keydown", function (e) {
  if (e.shiftKey) {
    console.log("Shift Key is pressed!");
  } else if (e.altKey) {
    console.log("Alt Key is pressed!");
  } else if (e.ctrlKey) {
    console.log("Ctrl Key is pressed!");
  } else {
    console.log(e.keyCode);
  }
});
