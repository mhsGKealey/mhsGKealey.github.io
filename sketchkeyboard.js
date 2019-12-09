var x = 200
var y = 200
var size = 100
var slide = 1
//create global variables for our shape

function setup() {
  // put setup code here
  createCanvas(600,800);
}

function draw() {
  background(size*2+10,size+50/1.5,size*2-10)
  // put drawing code here ----- draw a circle
  fill(50,200,50)
  ellipse(x,y,size)
  fill(100,200,100)
  line(x,y,0,0)
  line(x,y,600,0)
  //border collide
  if(x>550){x=549}
  if(y>750){y=749}
  if(x<50){x=51}
  if(y<50){y=51}
  //gravity
  if(y<200){y=y+4}
  else if (y<300){y=y+3}
  else if (y<400){y=y+2}
  else if (y<500){y=y+1}
  else if (y>500){y=y-3}
fill(size*-30,size+50/1.5,size*2-20)
strokeWeight(0)
rect(0,550,800,600)
ellipse(slide,560,100,50)
slide=slide+1
if (slide>620){slide = -30}
strokeWeight(1)

  //continuously check if key pressd
  if(keyIsDown(RIGHT_ARROW)){x=x+5}
  if(keyIsDown(LEFT_ARROW)){x=x-5}
  if(keyIsDown(UP_ARROW)){y=y-5}
  if(keyIsDown(DOWN_ARROW)){y=y+5}
  if(keyIsDown(87)){size=size+5}
  if(keyIsDown(83)){size=size-5}


}
/*
function keyPressed(){
  if (keyCode==UP_ARROW){size=size+5}
  if (keyCode==DOWN_ARROW){size=size-5}

}
*/
