var guess;
var guesses = [];
var word = "";
var alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i,', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// AM: Doesn't look like you ended up using all this canvas code.
// AM: If that's the case, I would remove it from the final project submission.
// AM: If you want to save it, consider putting it in a separate branch (e.g., testing-out-canvas).
var canvas = document.getElementById("Stickman");
if (canvas.getContext("2d")) {
context = canvas.getContext("2d");
//var stickmanParts = {
//0: function () {
context.beginPath();
context.fillStyle = "white";
context.arc(200, 50, 30, 0, Math.PI * 2, true);
context.fill();

context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 3;
context.arc(200, 50, 20, 0, Math.PI, false);
context.stroke();
//},
// body
//1: function () {
context.beginPath();
context.moveTo(200, 80);
context.lineTo(200, 180);
context.strokeStyle = "white";
context.stroke();
//},

// arms
//2: function () {
context.beginPath();
context.strokeStyle = "white";
context.moveTo(200, 80);
context.lineTo(150, 130);
context.moveTo(200, 80);
context.lineTo(250, 130);
context.stroke();
  //},

// legs
//3: function () {
context.beginPath();
context.strokeStyle = "white";
context.moveTo(200, 180);
context.lineTo(150, 280);
context.moveTo(200, 180);
context.lineTo(250, 280);
context.stroke();
    //},
  }
  //};
  //var guessesLeft = Object.keys(stickmanParts).length;
// used outline from http://www.kodyaz.com/html5/draw-stick-man-in-html5-canvas-using-javascript.aspx
// AM: +1 for citing your source

//funtion needs to be created to use the parts of the stickman canvas in an array
function guessALetter() {
  var guess = $(".letter-input").val();
  var isLetterInWord = word.includes(guess)
  // AM: Also remove console.log statements from your final submission. You can again put them in a separate branch if you'd like.
  // AM: This is a good habit to get into too. You don't want to make it hard for potential employers to read through your final code with debugging statements like this.
  console.log(isLetterInWord)
  // isLetterInWord already contains a boolean, so you actually don't have to write out `=== true` here
  if (isLetterInWord === true){
    //return letter.html('_');
    var index = word.indexOf(letter)
  underscores = underscores.substr(0, index) + letter + underscores.substr(index + letter.length+1)
  console.log('log', underscores)
  // AM: On the right path here! It looks like you're replacing the correct underscore with the actual letter.
  // AM: I would suggest now changing the input field (i.e., updating the DOM) so that it shows the updated word, which will be a combination of underscores and letters.
  }

  else {
    //draw a stickmanpart if letter is not in word
  }
}


var wordbutton = $(".word")
var wordinput = $(".word-input")
wordbutton.on("click", function () {
  word = wordinput.val()
  convertLettersToUnderscores(wordinput.val())

})

function convertLettersToUnderscores(word){
  underscores = '_'
  for(var i = 0; i < word.length; i++){
   underscores += "_"
  }
   $(".word-input").val(underscores);
}

// AM: Consider grouping variables that contain jQuery objects together.
// AM: That way you know exactly where to look when you need to figure out something like "Hey, what's the name of the variable that contains a reference to the button on the page?"
var lettersguessed = $("#letters-guessed")
var guessbutton = $(".guess")
var letterinput = $(".letter-input")
guessbutton.on("click", function () {
  letter = letterinput.val()
  lettersguessed.append(letter)
  //$(".letterinput").val('')
      guessALetter(letterinput.val())

})

//end game when all the letters in the word have been guessed and displayed or
//all the parts of the stickman have ben drawn
function endGame () {
  for (var i = 0; i<word.length; i++)
  if (letterinput === wordinput || guessesLeft === 0) {
    return true;
  } else {
    return false;
  }
}
//create function to decrease the amount of guesses the player has left
/*function removeGuess(num) {
  for (var i = 0; i < num; i++) {
    guessesLeft -= 1;
    stickmanParts[guessesLeft];
  }
  removeGuess(4);
}*/

//function decreaseLives () {
  //for ()
//}
