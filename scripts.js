$(document).ready(function () {
  const text = ["garbage ", "gabitron ", "git sh*t ", "bluecifer ", "lingo ", "retro ", "gusto ", "milkman ", "kansas raptor ", "NaN ", "gradients! ", "blakement ", "game time ", "ku sucks ", "blake street vault ", "javascript tears ", "ku sucks again ", "chaz-isms"];

  $("#generate-button").on("click", function () {
    for (var i = 0; i < text.length; i++) {
      $("textarea").append(text[i]);
    }
  });






}); //end of jQuery body
