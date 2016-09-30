//add function to allow user to add a phrase to the text arrey (clears on page reload)

$(document).ready(function () {

  const generateButton = $("#generate-button");
  const copyTextButton = $("#copy-text-button");
  const randomChoiceRadio = $("#random-choice-button");
  const wordChoiceRadio = $("#words-choice-button");
  const clearTextButton = $("#clear-text-from-textarea");

  const text = ["garbage ", "gabitron ", "git sh*t ", "bluecifer ", "lingo ", "retro ", "gusto ", "milkman ", "kansas raptor ", "NaN ", "suhdude ", "gradients! ", "yoga instructor ", "blakement ", "game-time ", "ku sucks ", "blake street vault ", "carne asada ", "javascript tears ", "go blue ", "chaz-isms ", "magenta ", "rabbit holes ", " epically bad gusto coffee ", "broncos ", "bicycles ", "champus ", "daledalf ", "rainbow css vomit ", "star bar ", "k's horse ", "bree's rules ", "ps lounge ", "merge conflicts ", "weird gifs ", "command line ", "stack overflow forever ", "monstertorium ", "mod 1 beards ", "dale's pale ale ", "bad wine ", "dressage "];

  generateButton.on("click", function () {

    if (randomChoiceRadio.prop("checked")) {
      generateRandomText();
    }
    else if (wordChoiceRadio.prop("checked")) {
      generateWordCountText();
    }

    function generateRandomText() {
      function random1() {
        return Math.random();
      }

      if (random1() < 0.5) {
        generateUp();
      }
      else {
        generateDown();
      } // end of if else

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

      function generateDown() {

        const random3 = function () {
          let min = 0;
          let max = 4;
          return Math.floor(Math.random() * (max - min) + min);
        }; // end of random3

        for (var i = text.length - 1; i > 0; i = i - random3()) {
          $("textarea").append(text[i]);
        } // end of for loop

      } // end of generateDown

    } //end of generateRandomText

  }); // end of grand function triggered when user clicks "generate" button

  function generateWordCountText() {
    let i = 0;
    while (i < 100) {
      $("textarea").append(text[i]);
      i++;
    }
  } // end of generateWordCountText

  copyTextButton.on("click", function () {
    $("textarea").select();
    document.execCommand("copy");
    alert('Text copied!');
  }); // end of copy text

  clearTextButton.on("click", function () {
    $("textarea").text("");
  }); // end of clear text

}); //end of jQuery body
