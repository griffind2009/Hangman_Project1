var guess;
var guesses = [];
var word = "";
var alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i,', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

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

//funtion needs to be created to use the parts of the stickman canvas in an array
function guessALetter() {
  var guess = $(".letter-input").val();
  var isLetterInWord = word.includes(guess)
  console.log(isLetterInWord)
  if (isLetterInWord === true){
    //return letter.html('_');
    var index = word.indexOf(letter)
  underscores = underscores.substr(0, index) + letter + underscores.substr(index + letter.length+1)
  console.log('log', underscores)
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
