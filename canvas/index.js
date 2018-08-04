var canvas = document.getElementById("box");
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
console.log("width: ", canvas.width, "height: ", canvas.height);

var ctx = canvas.getContext('2d');

var upperLeftX = 0;
var upperLeftY = 0;
var width = 50;
var height = 50;
ctx.fillRect(upperLeftX, upperLeftY, width, height);


ctx.fillStyle = "orange";
ctx.fillRect(upperLeftX, upperLeftY, width, height);



ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(40, 40);
ctx.lineTo(0, 80);
ctx.fill();
ctx.closePath();