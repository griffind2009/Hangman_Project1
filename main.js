var $elem = {
  word: {
    form: $("#word-form"), // The word form
    input: $("#word-input"), // The input where Player 1 enters the word to use
    submit: $("#word-submit"), // The button that submits the word
    display: $("#word-display"), // The thing that displays the word to Player 2
  },
  letter: {
    form: $("#letter-form"), // The letter form
    input: $("#letter-input"), // The input where Player 2 enters the letter to use
    submit: $("#letter-submit"), // The button that submits the letter
  },
  guesses: {
    left: $("#guesses-left-amount"), // The text that shows the number of guesses left
  },
  stickman: {
    canvas: $("#stickman"), // The canvas element that we'll draw the stickman in
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

// Store some data that we'll need to reference later
var $data = {
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  guesses: {
    left: Object.keys(stickmanParts).length, // let Player 2 guess once for every stickman body part
    history: ""
  },
  word: ""
};

/*
 * THE MAIN STUFF
 * -----------------------------------------------------------------------------
 * This is where all of the actual logic for the hangman game is stored. It's
 * pretty heavily commented so that you can see what is happening at every step
 * of the way.
 */

// Hide the letter form on page load
$elem.letter.form.hide();

// Focus the word form input so that Player 1 can start typing
$elem.word.input.trigger("focus");

// When the word form is submitted...
$elem.word.form.on("submit", function(event) {

  // Prevent the default behavior, which would submit the form and refresh the page
  event.preventDefault();

  // Find the word that Player 1 submitted
  $data.word = $elem.word.input.val().toUpperCase();

  // Build the word display and update the number of guesses left
  _buildWordDisplay($data.word);
  _removeGuess(0);

  // Hide the word form, but show the letter form so Player 2 can guess letters
  $elem.word.form.hide();
  $elem.letter.form.show();

  // Focus the letter input so Player 2 can start typing
  $elem.letter.input.trigger("focus");
});

// When the letter form is submitted...
$elem.letter.form.on("submit", function(event) {

  // Prevent the default behavior, which would submit the form and refresh the page
  event.preventDefault();

  // Find the letter that Player 2 submitted
  var letter = $elem.letter.input.val().toUpperCase();

  // If the letter isn't in the alphabet, tell player 2 and clear the letter input
  if ($data.alphabet.indexOf(letter) === -1) {
    alert("Player 2: Please enter a letter from the alphabet.");
    $elem.letter.input.val("");
    return;
  }

  // If the letter has already been guessed, tell player 2 and clear the letter input
  if ($data.guesses.history.indexOf(letter) !== -1) {
    alert("Player 2: You've checked for '" + letter + "' already. Please check another letter!");
    $elem.letter.input.val("");
    return;
  }

  // Add the guessed letter to the `$data.guesses.history` list
  _addLetterToHistory(letter);

  // If the guessed letter is in the word, reveal the letters in the display
  // Otherwise, remove a guess
  if ($data.word.indexOf(letter) !== -1) {
    _revealWordDisplayLetter(letter);
  } else {
    _removeGuess(1);
  }
});

/*
 * THE HELPER STUFF
 * -----------------------------------------------------------------------------
 * Some logic is stored in helper functions below to keep the main scripts above
 * neat and tidy.
 */

// Function that builds the word display
function _buildWordDisplay(word) {
  var numberOfCharactersInTheWord = word.length;

  // Build a `<span>` element for each character in the word
  var wordDisplayHtml = "";
  for (i = 0; i < numberOfCharactersInTheWord; i++) {
    wordDisplayHtml += '<span data-character="' + word[i] + '" data-hidden>_</span>';
  }

  // Insert the spans into the word display element
  $elem.word.display.html(wordDisplayHtml);
}

// Function that adds a letter to the history of guesses
function _addLetterToHistory(letter) {
  if ($data.guesses.history.indexOf(letter) === -1) {
    $data.guesses.history += letter;
  }
}

// Function that removes a guess and updates the UI to reflect the change
function _removeGuess(number) {
  // For each number that we're to remove...
  for (var i = 0; i < number; i++) {
    // Remove the number from the available guesses
    $data.guesses.left -= 1;

    // Draw the next stickman part
    stickmanParts[$data.guesses.left]();
  }

  // Update the number of available guesses
  $elem.guesses.left.text($data.guesses.left);

  // If Player 2 is out of guesses, tell them and disable the letter form
  if ($data.guesses.left < 1) {
    alert("Player 2: You are out of guesses. Game over!");
    $elem.letter.input.val("").prop("disabled", true);
    $elem.letter.submit.prop("disabled", true);
    return;

  // If Player 2 still has guesses left, clear the letter input and focus it
  } else {
    $elem.letter.input.val("").trigger("focus");
  }
}

// Function that reveals a letter in the word display
function _revealWordDisplayLetter(letter) {
  // Find the span elements to update
  var spansToUpdate = $elem.word.display.find("[data-character='" + letter + "']");

  // Replace the span underscores with the actual letter
  spansToUpdate.html(letter).removeAttr("data-hidden");

  // Clear the letter input
  $elem.letter.input.val("");

  // If the word is complete, tell Player 2 they've won
  if (_wordIsComplete()) {
    alert("Player 2: Congrats - you guessed all the letters correctly. You win!");
  }
}

// Function that checks if the word is complete yet
function _wordIsComplete() {
  if ($elem.word.display.find("[data-hidden]").length) {
    return false;
  } else {
    return true;
  }
}
