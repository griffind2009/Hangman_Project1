var $elem = {
  word: {
    form: $("#word-form"), 
    input: $("#word-input"),
    submit: $("#word-submit"),
    display: $("#word-display"),
  },
  letter: {
    form: $("#letter-form"),
    input: $("#letter-input"),
    submit: $("#letter-submit"),
  },
  guesses: {
    left: $("#guesses-left-amount"),
  },
  stickman: {
    canvas: $("#stickman"),
  },
};

// Set up and store information about the Stick man
var stickmanContext = $elem.stickman.canvas.get(0).getContext("2d");
var stickmanParts = {
  // head
  0: function() {
    stickmanContext.beginPath();
    stickmanContext.fillStyle = "black";
    stickmanContext.arc(200, 50, 30, 0, Math.PI * 2, true);
    stickmanContext.fill();
  },

  // neck
  1: function() {
    stickmanContext.beginPath();
    stickmanContext.strokeStyle = "black";
    stickmanContext.lineWidth = 3;
    stickmanContext.arc(200, 50, 20, 0, Math.PI, false);
    stickmanContext.stroke();
  },

  // body
  2: function() {
    stickmanContext.beginPath();
    stickmanContext.moveTo(200, 80);
    stickmanContext.lineTo(200, 180);
    stickmanContext.strokeStyle = "black";
    stickmanContext.stroke();
  },

  // arms
  3: function() {
    stickmanContext.beginPath();
    stickmanContext.strokeStyle = "black";
    stickmanContext.moveTo(200, 80);
    stickmanContext.lineTo(150, 130);
    stickmanContext.moveTo(200, 80);
    stickmanContext.lineTo(250, 130);
    stickmanContext.stroke();
  },

  // legs
  4: function() {
    stickmanContext.beginPath();
    stickmanContext.strokeStyle = "black";
    stickmanContext.moveTo(200, 180);
    stickmanContext.lineTo(150, 280);
    stickmanContext.moveTo(200, 180);
    stickmanContext.lineTo(250, 280);
    stickmanContext.stroke();
  },
};


var $data = {
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  guesses: {
    left: Object.keys(stickmanParts).length,
    history: ""
  },
  word: ""
};


$elem.letter.form.hide();


$elem.word.input.trigger("focus");


$elem.word.form.on("submit", function(event) {


  event.preventDefault();


  $data.word = $elem.word.input.val().toUpperCase();


  _buildWordDisplay($data.word);
  _removeGuess(0);


  $elem.word.form.hide();
  $elem.letter.form.show();


  $elem.letter.input.trigger("focus");
});


$elem.letter.form.on("submit", function(event) {


  event.preventDefault();


  var letter = $elem.letter.input.val().toUpperCase();


  if ($data.alphabet.indexOf(letter) === -1) {
    alert("Player 2: Please enter a letter from the alphabet.");
    $elem.letter.input.val("");
    return;
  }


  if ($data.guesses.history.indexOf(letter) !== -1) {
    alert("Player 2: You've checked for '" + letter + "' already. Please check another letter!");
    $elem.letter.input.val("");
    return;
  }


  _addLetterToHistory(letter);


  if ($data.word.indexOf(letter) !== -1) {
    _revealWordDisplayLetter(letter);
  } else {
    _removeGuess(1);
  }
});




function _buildWordDisplay(word) {
  var numberOfCharactersInTheWord = word.length;


  var wordDisplayHtml = "";
  for (i = 0; i < numberOfCharactersInTheWord; i++) {
    wordDisplayHtml += '<span data-character="' + word[i] + '" data-hidden>_</span>';
  }


  $elem.word.display.html(wordDisplayHtml);
}


function _addLetterToHistory(letter) {
  if ($data.guesses.history.indexOf(letter) === -1) {
    $data.guesses.history += letter;
  }
}


function _removeGuess(number) {

  for (var i = 0; i < number; i++) {

    $data.guesses.left -= 1;


    stickmanParts[$data.guesses.left]();
  }


  $elem.guesses.left.text($data.guesses.left);


  if ($data.guesses.left < 1) {
    alert("Player 2: You are out of guesses. Game over!");
    $elem.letter.input.val("").prop("disabled", true);
    $elem.letter.submit.prop("disabled", true);
    return;
  } else {
    $elem.letter.input.val("").trigger("focus");
  }
}


function _revealWordDisplayLetter(letter) {

  var spansToUpdate = $elem.word.display.find("[data-character='" + letter + "']");


  spansToUpdate.html(letter).removeAttr("data-hidden");


  $elem.letter.input.val("");


  if (_wordIsComplete()) {
    alert("Player 2: Congrats - you guessed all the letters correctly. You win!");
  }
}


function _wordIsComplete() {
  if ($elem.word.display.find("[data-hidden]").length) {
    return false;
  } else {
    return true;
  }
}
