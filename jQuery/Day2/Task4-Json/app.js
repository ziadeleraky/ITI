$("h1").css({ textAlign: "center" });

// Check Band Name
function checkBand(x, event) {
  $("#artist").empty();
  if (event.target.value == x) {
    $.ajax({
      url: "./rockbands.json",
      success: function (res) {
        for (let i in res[event.target.value]) {
          $("#artist").append("<option value='" + res[event.target.value][i].value + "'>" + res[event.target.value][i].name + "</option>");
        }
      },
    });
  }
}

// Listen the change of Band options
$("#band").on("change", function (e) {
  checkBand("beatles", e);
  checkBand("stones", e);
  checkBand("genesis", e);
  checkBand("eagles", e);
});

// Redirect to new URL
$("#artist").on("change", function (e) {
  location.assign(e.target.value);
});
