let win,
  flag = 0;

win = open("child.html", "", "width=250, height=250");

setInterval(function () {
  win.focus();
  if (win.screenX >= 590 || win.screenY >= 530) {
    flag = 1;
  }
  if (win.screenY == 0) {
    flag = 0;
  }
  if (flag) {
    win.moveBy(-150, -150);
  } else {
    win.moveBy(150, 150);
  }
}, 500);

function closeWin() {
  win.close();
}
