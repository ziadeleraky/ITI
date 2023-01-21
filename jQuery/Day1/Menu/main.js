// Hiding Elements
function hideElements() {
  $(".main-container > div").filter(":eq(1),:eq(2),:eq(3),:eq(4)").hide();
  $(".complain-response").hide();
}
hideElements();

// Circular Gallery
let counter = 1;
// Right
$(".right").click(function () {
  counter++;
  if (counter <= 8) {
    $(".image").attr("src", "./imgs/" + counter + ".jpg");
  } else {
    counter = 1;
    $(".image").attr("src", "./imgs/" + counter + ".jpg");
  }
});
// Left
$(".left").click(function () {
  counter--;
  if (counter > 0) {
    $(".image").attr("src", "./imgs/" + counter + ".jpg");
  } else {
    counter = 8;
    $(".image").attr("src", "./imgs/" + counter + ".jpg");
  }
});

// Services Slide Down
$(".ser").click(function () {
  $("#services").slideDown(1300);
});

// Complain
$(".btn").click(function () {
  // Complain Form
  setCookie("name", $("#name")[0].value, 7);
  setCookie("email", $("#email")[0].value, 7);
  setCookie("phone", $("#phone")[0].value, 7);
  setCookie("complain", $("#complain-msg")[0].value, 7);
  $(".complain-container").hide();

  // Complain Details
  $(".complain-response").show();
  $(".complain-response p")
    .eq(0)
    .text("Your name is " + getCookie("name"));
  $(".complain-response p")
    .eq(1)
    .text("Your email is " + getCookie("email"));
  $(".complain-response p")
    .eq(2)
    .text("Your phone is " + getCookie("phone"));
  $(".complain-response p")
    .eq(3)
    .text("Your complain is " + getCookie("complain"));
});
$("#edit").click(function () {
  $(".complain-response").hide();
  $(".complain-container").show();
  $("#name")[0].value = getCookie("name");
  $("#email")[0].value = getCookie("email");
  $("#phone")[0].value = getCookie("phone");
  $("#complain")[0].value = getCookie("name");
});

// Navbar Handling
$("li").click(function (e) {
  if (e.target.innerText == "About") {
    hideElements();
    $("#about").show();
  } else if (e.target.innerText == "Gallary") {
    hideElements();
    $("#gallery").show();
  } else if (e.target.innerText == "Services") {
    hideElements();
    $("#services").show();
  } else {
    hideElements();
    $("#complain").show();
  }
});
