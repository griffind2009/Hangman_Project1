canvasArray[drawStickman]()
function drawStickman () {
var canvas = document.getElementById("Stickman");
if (canvas.getContext("2d")) {
context = canvas.getContext("2d");
drawStickman(head) {
context.beginPath();
context.fillStyle = "white";
context.arc(200, 50, 30, 0, Math.PI * 2, true);
context.fill();


context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 3;
context.arc(200, 50, 20, 0, Math.PI, false);
context.stroke();
}
// body
drawStickman(body) {
context.beginPath();
context.moveTo(200, 80);
context.lineTo(200, 180);
context.strokeStyle = "white";
context.stroke();
}

// arms
drawStickman(arms) {
context.beginPath();
context.strokeStyle = "white";
context.moveTo(200, 80);
context.lineTo(150, 130);
context.moveTo(200, 80);
context.lineTo(250, 130);
context.stroke();
}

// legs
drawStickman (legs) {
context.beginPath();
context.strokeStyle = "white";
context.moveTo(200, 180);
context.lineTo(150, 280);
context.moveTo(200, 180);
context.lineTo(250, 280);
context.stroke();
    }
  }
}
drawStickman();
