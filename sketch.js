
//level tracker
var level = 1
//movement variables
var x;
var y;
var grav = 1
//pictures used
var img;
var ground1;
var dirttow;
var dirttow2;
//collision detection
var box1=false
var box2=false
var box3=false
var box4=false
var triangle=false
var circle=false
var box5=false
var box6=false
var box7=false
var box8=false
var circle2=false

function preload() {
  //loading up my images
  img=loadImage('alien.png')
  ground1=loadImage('groundright.png')
  dirttow=loadImage('dirt tower.png')
  dirttow2=loadImage('dirt tower2.png')
}

function setup() {
  // put setup code here
  createCanvas(700,700);

x=200
y=500
}

function draw() {
  // opening screen
if(level == 1){
background(10,10,10)
fill(255,255,255)
textSize(40)
text("space run",200,250)
}
else if (level == 2) {
  background(240,240,240)
  strokeWeight(0)
  noFill()
  //player hitbox
rect(x,y+grav,60,100)
fill(150,50,100)
//collision squares
rect(100,500,150,600)
rect(100,495,150,600)

rect(0,400,100,600)
rect(0,395,100,600)
//
noFill()
triangle(600,600,700,500,700,600)
//end level
fill(0,255,0)
ellipse(30,350,50,50)
//collision code
box1=collideRectRect(x,y+grav,60,100,100,500,150,600)
box2=collideRectRect(x,y+grav,60,100,100,495,150,600)


box3=collideRectRect(x,y+grav,60,100,0,400,100,600)
box4=collideRectRect(x,y+grav,60,100,0,395,100,600)

circle=collideRectCircle(x,y+grav,60,100,30,360,50,50)
//images used in the level
 image(img,x,y+grav)

 image(ground1,300,200,600,600)

}
//ground
 fill(150,50,100)
 rect(0,600,700,700,)

 if (level==3) {
   fill(200,200,200)
   rect(0,0,700,600)
   //player
   image(img,x,y+grav)
//collision squares
   rect(0,400,100,200)
    rect(0,395,100,195)

    rect(600,400,170,200)
     rect(600,395,170,195)

  image(dirttow,0-20,400,200,200)
  box5=collideRectRect(x,y+grav,60,100,0,400,100,200)
  box6=collideRectRect(x,y+grav,60,100,0,395,100,195)


 image(dirttow2,600,400,170,200)
 box7=collideRectRect(x,y+grav,60,100,600,400,170,200)
 box8=collideRectRect(x,y+grav,60,100,600,395,170,195)

fill(0,255,0)
ellipse(650,350,50,50)
circle2=collideRectCircle(x,y+grav,60,100,650,360,50,50)

}

if(level==4){
  fill(100,255,0)
  rect(0,0,700,700)
  textSize(40)
  fill(0,0,0)
  text('you win!!',270,350)
}

//gravity
 if(y+grav>500){grav=grav-2,y}
 grav = grav+2


//what to do in a collision
if(box1==true){x=x+7}
if(box2==true){grav=grav-2,y+300}
if(box3==true){x=x+7}
if(box4==true){grav=grav-2,y+300}
if(triangle==true){grav=grav-5}
if(circle==true){level=3}
if(box5==true){x=x+7}
if(box6==true){grav=grav-2}
if(box7==true){x=x-7}
if(box8==true){grav=grav-2}
if(circle2==true){level=4}

if(keyIsDown(65)){x=x-7}
if(keyIsDown(68)){x=x+7}
if(keyIsDown(87)){y=y-5}

print(level)



}
function keyPressed(){
  if(keyIsDown(13)){level=2}


}
