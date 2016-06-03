
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    debugger;

    var result = parseInt($("#answer1").val()) + parseInt($("#answer2").val()) + parseInt($("#answer3").val()) + parseInt($("#answer4").val()) + parseInt($("#answer5").val());

    if (result <= 8) {
      $(".filler1 h3").text("Beautifuly Bright China");
      $(".jumbotron").addClass("china");
    } else if (result > 8 && result <= 17) {
      $(".filler1 h3").text("Modern and Artistic England");
      $(".jumbotron").addClass("england");
    } else {
      $(".filler1 h3").text("The Historic and rich Atmosphere of Spain");
      $(".jumbotron").addClass("spain");
    };
  });
});
