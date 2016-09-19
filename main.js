
//window.onload = function (){
var alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i,', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  console.log(alphabet)

var guess;
var guesses = alphabet;
var word;
var space = "_";
var correctGuess;
//var getWord = $(".word .input").html();



//word = document.querySelector('input').innerHTML = "text"
/*var canvasArray = [head, body, arms, legs];
var animate = function () {
  canvasArray();
}
var word = function () {
  for (i=0; i<word.length; i++) {
    document.querySelector('input').innerHTML = "text"
  }
}*/
//document.createElementByClass = ('.word')
//var getword = (".word").html();
var guessButton = $("#Guesses").children("input.guess")
var wordButton = $("#hiddenWord").children("input.word")
var guessButton = $("#Guesses" .input)
guessButton.on("click", function () {
  var guesses = ("#Guesses .input").text()
  console.log(guesses)
  myGuess()
});
var wordButton = $("#hiddenWord" .input)
wordButton.on("click", function () {
  var word = ("#hiddenWord .input").text()
  console.log(word)
  myGuess()
});

function myGuess () {
  for (i = 0; i < alphabet.length; i++) {
    var guesses = alphabet[i];
    if (guesses === true) {
      return guesses
    }
  }
}

// var getWord = $(".word .input").html();
function convertLettersToUnderscores(word){
 var underscores = ''
  for(var i = 0; i < word.length; i++){
   underscores += "_"
  }
  return underscores
}

// grab the user's input
var word = prompt("Please enter a word").toLowerCase();

// convert the word to all underscores
var convertedWord = convertLettersToUnderscores(word)

// player2 enters a letter to guess
 function guessALetter(){
  var guess = prompt("Guess a letter").toLowerCase()
  // if the guessed letter is in the original word
    var isLetterInWord = word.includes(guess)
    console.log(isLetterInWord);
    // reveal the letter in the convertedWord
    if (isLetterInWord === true){
      return (guess, convertedWord);
      console.log(guess, convertedWord)
      alert("what is guess?!")
    }
  // otherwise, mark as an incorrect guess
  else {
    canvasArray()
  }
    // draw another portion of the stick figure
}

guessALetter()









var canvas = document.getElementById("Stickman");
if (canvas.getContext("2d")) {
context = canvas.getContext("2d");

context.beginPath();
context.fillStyle = "white";
context.arc(200, 50, 30, 0, Math.PI * 2, true);
context.fill();


context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 3;
context.arc(200, 50, 20, 0, Math.PI, false);
context.stroke();

// body

context.beginPath();
context.moveTo(200, 80);
context.lineTo(200, 180);
context.strokeStyle = "white";
context.stroke();


// arms

context.beginPath();
context.strokeStyle = "white";
context.moveTo(200, 80);
context.lineTo(150, 130);
context.moveTo(200, 80);
context.lineTo(250, 130);
context.stroke();


// legs

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


//var index = 0
//alphabet[i];
/*var canvas = document.getElementById("canvas")
function {
  Stickman= document.getElementById("Stickman");
  context = canvas.getContext('2d');
  context.beginpath();
  context.strokestyle = rgb(255,255,255);
  context.lineWidth = 3;
  context.arc(60, 25, 10, 0, Math.PI*2, true);
  context.stroke();
}*/
/*if guess === true ('You win')
guess.addEventListener("click", aplhabet);
}*/
