function setup() {
  createCanvas(800, 800);
  background(225);
  frameRate(60);

}

function draw() {
  fill(225,0,220,5);
  noStroke();
  if(mouseIsPressed) {
    ellipse(mouseX,mouseY,100,100);
  }
}