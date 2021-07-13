let i = 0;
function setup(){
  createCanvas(windowWidth,windowHeight);
  r = random(PI);
}

// function mouseClicked() {
//   save("drawing.png");
// }

function draw() {
 //background(255);
 i+=.01;
 push();
 translate(mouseX+(width/4*sin(i)),mouseY+(height/4*cos(i*r)));
 rotate(sin(i)*HALF_PI);
 let ly = 5;
 ly+=sin(i*PI)*200;
 stroke(abs(sin(i))*255, abs(sin(i))*255, abs(cos(i))*255);
 strokeWeight(100);
 line(0,-ly, 0, ly); 
 pop();
 textAlign(CENTER);
 text("control brushstroke with mouse position", width/2, 30);
}