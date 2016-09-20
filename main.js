
//window.onload = function (){
var alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i,', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  console.log(alphabet)

var guess;
var guesses = alphabet;
var word = '';
//var space;
//var correctGuess;
var totalLives = 4;
var head;
var body;
var arms;
var legs;
var canvasArray = [];
//var getWord = $(".word .input").html();



//word = document.querySelector('input').innerHTML = "text"

/*var word = function () {
  for (i=0; i<word.length; i++) {
    document.querySelector('input').innerHTML = "text"
  }
}*/
//document.createElementByClass = ('.word')
//var getword = (".word").html();
var guessButton = $("#Guesses").children("input.guess")
var wordButton = $("#hiddenWord").children("input.word")
var guessButton = $("#Guesses" .input)


/*function myGuess () {
  for (i = 0; i < alphabet.length; i++) {
    var guesses = indexOf(alphabet.length);
    if (guesses === word) {
      return guesses
    }
  }
}*/


// grab the user's input
var word = prompt("Please enter a word").toLowerCase();

// convert the word to all underscores
var convertedWord = convertLettersToUnderscores(word)
function convertLettersToUnderscores(word){
  var word = $(".word").html(convertedWord);
 var underscores = ''
  for(var i = 0; i < word.length; i++){
   underscores += "_"
  }
  return convertedWord;
}
// player2 enters a letter to guess
 function guessALetter(){
   //var guess = $(".input .guess").html();
  var guess = prompt("Guess a letter").toLowerCase()
  // if the guessed letter is in the original word
    var isLetterInWord = word.includes(guess)
    console.log(isLetterInWord);
    // reveal the letter in the convertedWord
    if (isLetterInWord === word.includes(guess)){
      return $('#guess').val('');
    }
  // otherwise, mark as an incorrect guess
  else {

    return newLives();
  }
    // draw another portion of the stick figure
}
guessALetter()

function repeatGuesses() {

}

function newLives() {
    var livesRemaining = totalLives,
            string = word.toLowerCase();

    for (var i = 0; i < guesses.length; i++) {
        if (string.indexOf(guesses[i], 0) == -1) {
            livesRemaining-=1;
            console.log(livesRemaining)
        }
    }

 if (livesRemaining <= 0) {
   showLives.innerHTML = "Game Over";
 }
 for (var i = 0; i < geusses.length; i++) {
   if (convertedWord === word) {
     showLives.innerHTML = "You Win!";
   }
 }
}
guessButton.on("click", function () {
  var guesses = ("#Guesses .input").text()
  console.log(guesses)
  guessALetter()
});
var wordButton = $("#hiddenWord" .input)
wordButton.on("click", function () {
  var word = ("#hiddenWord .input").text()
  console.log(word)
  guessALetter()
});

var canvasArray = [head, body, arms, legs]
var canvas = document.getElementById("Stickman");
if (canvas.getContext("2d")) {
context = canvas.getContext("2d");

var head =
context.beginPath();
context.fillStyle = "white";
context.arc(200, 50, 30, 0, Math.PI * 2, true);
context.fill();

var head =
context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 3;
context.arc(200, 50, 20, 0, Math.PI, false);
context.stroke();

// body
var body =
context.beginPath();
context.moveTo(200, 80);
context.lineTo(200, 180);
context.strokeStyle = "white";
context.stroke();


// arms
var arms =
context.beginPath();
context.strokeStyle = "white";
context.moveTo(200, 80);
context.lineTo(150, 130);
context.moveTo(200, 80);
context.lineTo(250, 130);
context.stroke();


// legs
var legs =
context.beginPath();
context.strokeStyle = "white";
context.moveTo(200, 180);
context.lineTo(150, 280);
context.moveTo(200, 180);
context.lineTo(250, 280);
context.stroke();
    }

// help from http://www.kodyaz.com/html5/draw-stick-man-in-html5-canvas-using-javascript.aspx


/*function togglehiddenWord() {

  var myWord = document.getElementByClass('.word');

  var displaySetting = myWord.style.display;

  var hiddenWord = document.getElementByClass('word');

  if (displaySetting == 'block') {
    myWord.style.display = 'none';
    word.innerHTML = 'Show word';
  }
  else {
    myWord.style.display = 'block';
    word.innerHTML = 'Hide word';
  }
}*/
/*result = function () {
 wordHolder = document.getElementById('hold');
 correct = document.createElement('ul');*/


/*$("button").on("click", function() {
  var word = $("#hiddenWord .input").text().hide()
  hideWord()
});

function hideWord() {
var word = prompt("enter word");
var word = $("#hiddenWord .input").text().hide()
}

/*var letters = function () {
  for (i = 0; i < alphabet.length; i++) {
    var myGuess = $(".guess").val();
    var alphabet = alphabet[i];
  }
}
}*/
/*var myGuess = $(".guess").val();
var buttons = function() {$( "<li>buttons</li>" );
$( "ul" ).append(letters);
for (i = 0; i < alphabet.length; i++) {
var letters.$("#alphabet")
var list.$("#letter")
var list = $('html').attr('list')
$("#aplhabet").eq()
var buttons.append(letters).eq()
var letters.append(list)
var myButtons.appendChild(letters);
}
}*/
