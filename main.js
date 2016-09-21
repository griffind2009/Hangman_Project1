var guess;
var guesses = [];
var word;
var alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i,', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

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

function guessALetter(){
  var guess = $(".letter-input").val();
  var isLetterInWord = word.includes(guess)
  if (isLetterInWord === true){
    return letter.html('_');
  }

  else {
    //remove letter
  }

}


var wordbutton = $(".word")
var wordinput = $(".word-input")
wordbutton.on("click", function () {
  word = wordinput.val()
  convertLettersToUnderscores(wordinput.val())
})

function convertLettersToUnderscores(word){
 var underscores = '_'
  for(var i = 0; i < word.length; i++){
   underscores += "_"
  }
   $(".word-input").val(underscores);
}

var guessbutton = $(".guess")
var letterinput = $(".letter-input")
guessbutton.on("click", function () {
  letter = letterinput.val(
  console.log(letterinput.val())
  )
  //$(".letterinput").val('')
      guessALetter(letterinput.val())
})
function endGame () {
  for (i = 0; i<word.length; i++)
  if (guesses[i] === wordinput) {
    return true ("You win");
  } else {
    return false;
  }
}
