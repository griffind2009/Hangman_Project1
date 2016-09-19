
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
var getWord = $(".word").html();


var word = prompt("Please enter a word");
word = document.querySelector('input').innerHTML = "text"
/*var canvasArray = [head, body, arms, legs];
var animate = function () {
  canvasArray();
}
var word = function () {
  for (i=0; i<word.length; i++) {
    document.querySelector('input').innerHTML = "text"
  }
}*/
var guessButton = $("#Guesses" .input)
guessButton.on("click", function () {
  var guesses = ("#Guesses .input").val()
  console.log(guesses)
  myGuess()
});
function myGuess () {
  for (i = 0; i < alphabet.length; i++) {
    var guesses = alphabet[i];
    if (guesses === true) {
      return guesses }
      console.log(myGuess('a'))
    }
  }
  function convertLettersToUnderscores(word){
    var getWord = $(".word").html();
   var underscores = ''
    for(var i = 0; i < word.length; i++){
     underscores += "_"
    }
    return underscores
  }

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
