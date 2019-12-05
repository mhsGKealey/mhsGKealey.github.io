var size = 50
var wide = 50

function setup() {
  // put setup code here
  createCanvas(600,800);
}

function draw() {
background(20,5)
  // draw an ellipse at the current mouse location
  //2variables will be used mouseX mouseY
  strokeWeight(0)
  //make program react when moused pressed
//continuously check if mousepressed
if(mouseIsPressed){ rect(mouseX,mouseY,size,wide)}


}
function mousePressed(){
//change colour wehen mouse pressed
fill(random(0,255),random(0,255),random(0,255))

}
function mouseReleased(){
  size=random(0,100)
  wide=random(0,100)


}
