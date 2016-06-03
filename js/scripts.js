
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var result = parseInt($("#answer1").val()) + parseInt($("#answer2").val()) + parseInt($("#answer3").val()) + parseInt($("#answer4").val()) + parseInt($("#answer5").val());
    $(".result-box").fadeIn();
    if (result <= 8) {
      $(".filler1 h1").text("Beautifuly Bright China");
      $(".jumbotron").addClass("china");
      $("#result-china").fadeIn();
      $("#result-england").hide();
      $("#result-spain").hide();
    } else if (result > 8 && result <= 17) {
      $(".filler1 h1").text("Modern and Artistic England");
      $(".jumbotron").addClass("england");
      $("#result-china").hide();
      $("#result-england").fadeIn();
      $("#result-spain").hide();
    } else {
      $(".filler1 h1").text("The Historic and rich Atmosphere of Spain");
      $(".jumbotron").addClass("spain");
      $("#result-china").hide();
      $("#result-england").hide();
      $("#result-spain").fadeIn();
    };
  });
});
