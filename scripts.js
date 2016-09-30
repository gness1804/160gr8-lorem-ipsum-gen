$(document).ready(function () {

  const generateButton = $("#generate-button");

  const advancedOptionsContainer = $("#advanced-options-container");
  const advancedButton = $("#advanced");

  const randomChoiceRadio = $("#random-choice-button");
  const wordChoiceRadio = $("#words-choice-button");
  const wordCountInput = $("#word-count-input");
  const addNewWordInput = $("#add-new-word-input");
  const hideOptionsButton = $("#hide-these-options");

  const textBox = $("textarea");

  const copyTextButton = $("#copy-text-button");
  const clearTextButton = $("#clear-text-from-textarea");

  const text = ["garbage ", "gabitron ", "git-sh*t ", "bluecifer ", "lingo ", "retro ", "gusto ", "milkman ", "kansas-raptor ", "NaN ", "suhdude ", "gradients! ", "yoga-instructor ", "blakement ", "game-time ", "K.U.-sucks ", "blake-street-vault ", "carne-asada ", "javascript-tears ", "go-blue ", "chaz-isms ", "magenta ", "rabbit-holes ", "epically-bad-gusto-coffee ", "broncos ", "bicycles ", "champus ", "daledalf ", "rainbow-css-vomit ", "star-bar ", "k's-horse ", "bree's-tattoos ", "ps-lounge ", "merge-conflicts ", "weird-gifs ", "command-line ", "stack-overflow-forever ", "monstertorium ", "mod-1-beards ", "dale's-pale-ale ", "bad-wine ", "dressage ", "slack-attack ", "steve's-bad-day ", "wheres-my-cubby ", "to-posse-or-not-to-posse"];

  let wordsInBox = [];

  advancedOptionsContainer.hide();

  advancedButton.on("click", function () {
    advancedOptionsContainer.show();
    advancedButton.hide();
  });

  hideOptionsButton.on("click", function () {
    advancedOptionsContainer.hide();
    advancedButton.show();
  });

  wordChoiceRadio.on("click", function () {
    wordCountInput.prop("disabled", false);
  });

  randomChoiceRadio.on("click", function () {
    wordCountInput.prop("disabled", true);
  });

  generateButton.on("click", function () {

    let usersWord = addNewWordInput.val();

    if (usersWord !== "") {
      text.push(usersWord + " ");
    }

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
        console.log(wordsInBox);
      }
      else {
        generateDown();
        console.log(wordsInBox);
      } // end of if else

      function generateUp() {

        const random2 = function () {
          let min = 0;
          let max = 4;
          return Math.floor(Math.random() * (max - min) + min);
        }; // end of random2

        for (var i = 0; i < text.length; i = i + random2()) {
          textBox.append(text[i]);
          wordsInBox.push(text[i]);
        } // end of for loop

      } // end of generateUp

      function generateDown() {

        const random3 = function () {
          let min = 0;
          let max = 4;
          return Math.floor(Math.random() * (max - min) + min);
        }; // end of random3

        for (var i = text.length - 1; i > 0; i = i - random3()) {
          textBox.append(text[i]);
          wordsInBox.push(text[i]);
        } // end of for loop

      } // end of generateDown

    } //end of generateRandomText

    countWords();

  }); // end of grand function triggered when user clicks "generate" button

  function generateWordCountText() {
    let wordCount = parseInt(Math.floor(wordCountInput.val()));

    if (wordCount < 1 || wordCount > 100) {
      alert('Please choose a number between 1 and 100.');
      wordCountInput.val("");
      return;
    }
    else {
      goAheadAndGenerateText(wordCount);
    }

    function goAheadAndGenerateText(wordCount) {
      let i = 0;
      while (i < wordCount) {
        textBox.append(text[i]);
        i++;
      }
    } // end of goAheadAndGenerateText

  } // end of generateWordCountText

  function countWords() {

  } // end of countWords

  copyTextButton.on("click", function () {
    textBox.select();
    document.execCommand("copy");
    alert('Text copied!');
  }); // end of copy text

  clearTextButton.on("click", function () {
    textBox.text("");
    wordsInBox = [];
    console.log(wordsInBox);
  }); // end of clear text

}); //end of jQuery body
