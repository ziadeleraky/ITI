let arr = [];
let reqNum;

function write(info, msg) {
  document.write(
    "<p style='color: red;'>" +
      msg +
      " " +
      "<span style='color: black; font-weight:bolder;'>" +
      info +
      "</span>" +
      "</p>"
  );
}

// Request for inputs
for (let i = 0; i < 5; i++) {
  reqNum = prompt("Please Enter No. " + (i + 1));
  arr.push(reqNum);
}

write(arr, "You have entered the values of");
write(
  arr.sort(function (a, b) {
    return b - a;
  }),
  "Your values after being sorted descending"
);
write(
  arr.sort(function (a, b) {
    return a - b;
  }),
  "Your values after being sorted ascending"
);
