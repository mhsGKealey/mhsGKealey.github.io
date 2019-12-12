var x = 100
var y = 100
var size = 75
var xspeed = 12
var yspeed = 8

var player1x = 15
var player1y = 15

var player2x = 15
var player2y = 735

var padwidth = 150
var padheight = 20

var player1hit = false
var player2hit = false

var score1=0
var score2=0



function setup() {
  // put setup code here
  createCanvas(600,800);
}

function draw() {
  background(50,100,)
  // put drawing code here
  fill(255,255,255)
  strokeWeight(7)
  fill(255,255,255)
  line(0,400,600,400)
  strokeWeight(1)
  moveball()
  bounce()
  drawball()
  drawplayer1()
  drawplayer2()
  movepaddle()
  hitpaddle()
  scoreboard()
}


function moveball(){
  x=x+xspeed
  y=y+yspeed
}

function bounce(){
  if(x>550){xspeed=-xspeed}
  if(x<50){xspeed=10}
  if(y>800){y=400,x=300,xspeed=0,yspeed=0,score1=score1+1}
  if(y<0){y=400,x=300,xspeed=0,yspeed=0,score2=score2+1}
  if(keyIsDown(32)){xspeed=10,yspeed=10}
}

function drawball(){
  fill(2,55,255)
  ellipse(x,y,size)
}

function drawplayer1(){
  rect(player1x,player1y,padwidth,padheight)
}

function drawplayer2(){
  rect(player2x,player2y,padwidth,padheight)
}

//detect whether the ball hit either paddle
function hitpaddle(){
  player1hit=collideRectCircle(player1x,player1y,padwidth,padheight,x,y,size)

  player2hit=collideRectCircle(player2x,player2y,padwidth,padheight,x,y,size)

  if(player1hit==true){yspeed=10}
  if(player2hit==true){yspeed=-10}
}

function movepaddle(){
if(keyIsDown(68)){player1x=player1x+15}
if(keyIsDown(65)){player1x=player1x-15}
if(keyIsDown(39)){player2x=player2x+15}
if(keyIsDown(37)){player2x=player2x-15}
if(keyIsDown(83)){player1y=player1y+7}
if(keyIsDown(87)){player1y=player1y-7}
if(keyIsDown(38)){player2y=player2y-7}
if(keyIsDown(40)){player2y=player2y+7}
if(player2y<500){player2y=player2y+7}
if(player1y>300){player1y=player1y-7}
if(player1x<0){player1x=player1x+15}
if(player1x>490){player1x=player1x-15}
if(player2x<0){player2x=player2x+15}
if(player2x>490){player2x=player2x-15}
if(player2y>775){player2y=player2y-7}
if(player1y<25){player1y=player1y+7}
}
function scoreboard(){
  fill(255,255,255)
  textSize(10)
  text("press space to move ball again",220,400)
  textSize(40)

  text(score1,550,300)
  text(score2,550,500)
}
