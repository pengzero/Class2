var x = 0;
var speed = 20;
function setup() {
  createCanvas (600,600)
  
}

function draw() {
  background(255)

    for (var y=0; y < height; y+=20){
      new bouncingball(x,y,20)
    }
    if(x > width){
      speed = -20
    }
    x = x + speed
    if (mouseIsPressed)
    speed = 0
  }


var bouncingball = function(x,y,ellipseSize){
  var colors = color(random(0,255),random(0,255),random(100,255));
  fill(colors)
  line(x,y,mouseX,mouseY)
  ellipse(x,y,ellipseSize,ellipseSize)
}

