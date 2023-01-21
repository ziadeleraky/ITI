$("h1").css({ textAlign: "center" });

$("#item").draggable();

$("#blackhole").droppable({
  drop: function () {
    $("#item").hide("explode");
  },
});
