function setup() {
    createCanvas(400, 400);
   background("yellow");
  }
  function draw() {
  stroke("pink");
  fill("red");
  if(mouseIsPressed){
  rect(mouseX,mouseY,40,20);
  }
  }