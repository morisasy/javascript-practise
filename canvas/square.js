var canvas = document.getElementById("box");
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
console.log("width: ", canvas.width, "height: ", canvas.height);

var ctx = canvas.getContext('2d');

var square = {
    corner: [0,0],
    width: 50,
    height: 50,
    color: "red",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
    }
}

function draw() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
    square.corner[0] += 2;
    square.corner[1] += 2;
    square.draw();
  
}

//draw();

var intervalId = setInterval(draw, 50);