$("#img").animate({ left: "720px" }, 2000, "linear");

setInterval(function () {
  $("#img-element").text(`<img src='12.gif' style='left: ${parseInt($("#img").css("left"))}px'>`);
}, 100);
