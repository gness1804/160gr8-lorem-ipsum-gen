$(document).ready(function () {
  const text = ["garbage ", "gabitron ", "git sh*t ", "bluecifer ", "lingo ", "retro ", "gusto ", "milkman ", "kansas raptor ", "NaN ", "gradients! ", "blakement ", "game time ", "ku sucks ", "blake street vault ", "javascript tears ", "go blue ", "chaz-isms "];

  $("#generate-button").on("click", function () {

    function random1() {
      return Math.random();
    }

    if (random1() < 0.5) {
      generateUp();
    }

    function generateUp() {

      const random2 = function () {
        let min = 0;
        let max = 4;
        return Math.floor(Math.random() * (max - min) + min);
      }; // end of random2

      for (var i = 0; i < text.length; i = i + random2()) {
        $("textarea").append(text[i]);
      } // end of for loop

    } // end of generateUp



  }); // end of main generate function






}); //end of jQuery body
