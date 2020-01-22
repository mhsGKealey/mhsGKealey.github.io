
var level = 0

var x = 1
var y = 1
var move = 4
  var l = -120
  var ll = 20
  var fadeOut = 500
  var fadeIn = -360

var hit1 = false
var hit2 = false

var wide = 400
var widen = 4.5

var hide = 0
var hide2 = 0
var hide3 = 0
var hide4 = 0
var hide5 = 0


var blok;
var tree
var sound
var dirt
var earth
var guard
var guardx = 1
var spikes
var plane
var exit

var time = 0
var timer =0

function setup() {
  // put setup code here
  createCanvas(800,800);
  sound.setVolume(1)
    sound.play()
}

function preload(){
  blok=loadImage('blok.png')
  tree=loadImage('tree.png')
  sound=loadSound('soundtrack.mp3')
  dirt=loadImage('dirt.png')
  earth=loadImage('earth.png')
  guard=loadImage('guard.png')
  spikes=loadImage('spikes.png')
plane=loadImage('plane.png')
exit=loadImage('end screen.png')
}

function draw() {


  // put drawing code here
background(50,50,50)
strokeWeight(0)

if(level==0){
  fill(50,50,50)
  rect(0,0,800,800)
fill(255,255,255)
textSize(32)
text('full metal jacket',300,50)
text('press enter to start',300,100)
text('press I for instructions',50,700)



if (level==0,keyIsDown(73)){level=10}
if (level==0,keyIsDown(13)){level=1}


}
if (level==10){
fill(255,255,255)
textSize(22)
text('try to reach the end of the level by touching the bright red',0,50)
text('move with the arrow keys',0,150)
text('and avoid spikes and guards',0,250)
image(spikes,300,200,200,200)
image(guard,500,170,500,500)
text('press b to go back',0,350)
if (level==0,keyIsDown(66)){level=0}

}



if(level==1){
  fill(50,50,50)
rect(0,0,800,800)
fill(255,255,255)
  timer=timer+1
  if (timer==60){timer=1,time=time+1}
  if(level==0)



rect(x-150,y,300,50)

rect(x+100,y,50,300)

rect(x-150,y+200,50,200)

rect(x-500,y+200,350,50)

rect(x-500,y+200,50,150)

rect(x+100,y+250,400,50)

rect(x-500,y+350,400,50)

rect(x+100,y+450,400,50)

rect(x+100,y+452,50,300)

rect(x-450,y+750,600,50)

rect(x-600,y+550,500,50)

rect(x-650,y,50,1350)

rect(x-450,y+800,50,300)

rect(x-650,y,800,50)

rect(x-450,y+1100,300,50)

rect(x+450,y+250,50,200)

rect(x-650,y+1300,500,50)
fill(255,0,0)
ellipse(x-150,y+1225,100,100)

image(tree,x-50,y-250)
image(tree,x+150,y+500)
image(tree,x-100,y+800)
image(earth,x+125,y+50,200,200)
image(dirt,x-150,y+450,800,800)
image(dirt,x-50,y-250,800,800)
image(earth,x-850,y+50,200,200)
image(earth,x-850,y+150,200,200)
image(earth,x-850,y+250,200,200)
image(earth,x-950,y+50,200,200)
image(earth,x-950,y+150,200,200)
image(earth,x-950,y+250,200,200)
image(blok,300,300,100,100)
noFill()
rect(300,300,100,100)
fill(255,255,255)

hit1=collideRectRect(300,300,100,100, /*sprite cordinates*/ x-150,y,300,50 /* box */)
if(hit1==true){y=y-3}

hit2=collideRectRect(300,300,100,100, /*sprite cordinates*/ x-150,y+210,50,190 /* box */)
if(hit2==true){x=x-3}

hit3=collideRectRect(300,300,100,100, /*sprite cordinates*/ x+100,y,50,299 /* box */)
if(hit3==true){x=x+3}

hit4=collideRectRect(300,300,100,100, /*sprite cordinates*/x-500,y+200,350,50 /* box */)
if(hit4==true){y=y+3}

hit33=collideRectRect(300,300,100,100, /*sprite cordinates*/x-500,y+200,50,150 /* box */)
if(hit33==true){x=x+3}

hit5=collideRectRect(300,300,100,100, /*sprite cordinates*/x+100,y+250,300,50 /* box */)
if(hit5==true){y=y-3}

hit6=collideRectRect(300,300,100,100, /*sprite cordinates*/x-500,y+350,400,50 /* box */)
if(hit6==true){y=y-3}

hit6=collideRectRect(300,300,100,100, /*sprite cordinates*/x-500,y+348,400,50 /* box */)
if(hit6==true){y=y+3}

hit7=collideRectRect(300,300,100,100, /*sprite cordinates*/x+100,y+450,400,50 /* box */)
if(hit7==true){y=y+3}

hit8=collideRectRect(300,300,100,100, /*sprite cordinates*/x+100,y+452,50,300 /* box */)
if(hit8==true){x=x+3}

hit9=collideRectRect(300,300,100,100, /*sprite cordinates*/x-400,y+750,600,50/* box */)
if(hit9==true){y=y+3}

hit10=collideRectRect(300,300,100,100, /*sprite cordinates*/x-600,y+550,500,50 /* box */)
if(hit10==true){y=y+3}

hit11=collideRectRect(300,300,100,100, /*sprite cordinates*/x-600,y+552,500,50 /* box */)
if(hit11==true){y=y-3}

hit12=collideRectRect(300,300,100,100, /*sprite cordinates*/x-602,y+552,500,50 /* box */)
if(hit12==true){x=x+3}

hit13=collideRectRect(300,300,100,100, /*sprite cordinates*/x-600,y+552,500,50 /* box */)
if(hit13==true){x=x-3}

hit14=collideRectRect(300,300,100,100, /*sprite cordinates*/x-650,y,50,1350 /* box */)
if(hit14==true){x=x-3}

hit15=collideRectRect(300,300,100,100, /*sprite cordinates*/x-650,y,500,50 /* box */)
if(hit15==true){y=y-3}

hit16=collideRectRect(300,300,100,100, /*sprite cordinates*/x-450,y+800,50,300 /* box */)
if(hit16==true){x=x+3}

hit17=collideRectRect(300,300,100,100, /*sprite cordinates*/x-450,y+1100,300,50 /* box */)
if(hit17==true){y=y-3}

hit18=collideRectRect(300,300,100,100, /*sprite cordinates*/x-650,y+1300,500,50 /* box */)
if(hit18==true){y=y+3}

hit18=collideRectRect(300,300,100,100, /*sprite cordinates*/x+450,y+250,50,200 /* box */)
if(hit18==true){x=x+3}

hit20=collideRectCircle(300,300,100,100, /*sprite cordinates*/x-150,y+1225,100,100 /* box */)
if(hit20==true){level=level+1}

fill(200,200,200)
textSize(32)
text(time,300,50)
fill(255,255,255)
}

if (level==2){
var yy=600
var xx=-500
fill(50,205,50)
rect(0,0,800,800)
fill(100,100,100)


rect(x+xx,y-200+yy,50,900)
hit21=collideRectRect(300,300,100,100, /*sprite cordinates*/x+xx,yy+y-200,50,900 /* box */)
if(hit21==true){x=x-3}

rect(x+xx,y+700+yy,650,50)
hit22=collideRectRect(300,300,100,100, /*sprite cordinates*/x+xx,y+700+yy,650,50 /* box */)
if(hit22==true){y=y+3}

rect(x+650+xx,y-200+yy,50,950)
hit23=collideRectRect(300,300,100,100, /*sprite cordinates*/x+650+xx,y-200+yy,50,950 /* box */)
if(hit23==true){x=x+3}

image(blok,300,300,100,100)

image(guard,guardx+100+x+xx,y+50+yy,600,600)
noFill()
rect(guardx+190+x+xx,y+150+yy,220,100)
hit24=collideRectRect(300,300,100,100, /*sprite cordinates*/guardx+180+x+xx,y+150+yy,210,100 /* box */)
if(hit24==true){level=100}

image(spikes,x+30+xx,y-100+yy,200,200)

rect(x+30+xx,y-80+yy,200,100)
hit25=collideRectRect(300,300,100,100, /*sprite cordinates*/x+30+xx,y-80+yy,200,100/* box */)
if(hit25==true){level=100}


image(spikes,x+450+xx,y-170+yy,200,200)

rect(x+450+xx,y-150+yy,200,100)
hit26=collideRectRect(300,300,100,100, /*sprite cordinates*/x+450+xx,y-150+yy,200,100/* box */)
if(hit26==true){level=100}

fill(255,0,0)
rect(x+xx,y-200+yy,700,50)
hit27=collideRectRect(300,300,100,100, /*sprite cordinates*/x+xx,y-200+yy,700,50/* box */)
if(hit27==true){x=-150,y-70,level=3}




guardx=guardx+move
if(guardx>250){move=-move}

if(guardx<-100){move=4}
timer=timer+1
if (timer==60){timer=1,time=time+1}
fill(200,200,200)
textSize(32)
text(time,300,50)

}

if (level==100){
ll=ll+3
  l=l+2
  fill(50,205,50)
  rect(0,0,800,800)
  fill(0,0,0,ll)
  rect(0,0,800,800)
  fill(200,0,0,l)
  textSize(72)
  text('YOU DIED',200,300)
  textSize(20)
  text('press enter',50,700)

  if(level==100,keyIsDown(13)){level=1,x=0,y=0}

}

if (level==3){


wide = wide +widen
fill(155,0,0)
rect(x-600,y-300,10000,wide)
image(blok,300,300,100,100)
fill(200,200,200)
rect(x+400,y+2100,300,300)
image(plane,x+400,y+2100,300,300)


fill(100,255,150)


rect(x+400+hide,y+700,50,50)
hit28=collideRectRect(300,300,100,100, /*sprite cordinates*/x+400,y+700,50,50/* box */)
if(hit28==true){wide=wide-4,hide=1000}

rect(x+500+hide2,y+1000,50,50)
hit29=collideRectRect(300,300,100,100, /*sprite cordinates*/x+500+hide2,y+1000,50,50/* box */)
if(hit29==true){wide=wide-100,hide2=1000}

rect(x+350+hide3,y+1400,50,50)
hit29=collideRectRect(300,300,100,100, /*sprite cordinates*/x+400+hide3,y+1400,50,50/* box */)
if(hit29==true){wide=wide-100,hide3=1000}

rect(x+500+hide4,y+1750,50,50)
hit29=collideRectRect(300,300,100,100, /*sprite cordinates*/x+500+hide4,y+1750,50,50/* box */)
if(hit29==true){wide=wide-100,hide4=1000}

rect(x+400+hide5,y+1900,50,50)
hit30=collideRectRect(300,300,100,100, /*sprite cordinates*/x+400+hide5,y+1900,50,50/* box */)
if(hit30==true){wide=wide-100,hide5=1000}


hit31=collideRectRect(300,300,100,100, /*sprite cordinates*/x+400,y+2100,300,300/* box */)
if(hit31==true){level=50}


hit32=collideRectRect(300,300,100,100, /*sprite cordinates*/x-600,y-300,10000,wide/* box */)
if(hit32==true){level=100}

timer=timer+1
if (timer==60){timer=1,time=time+1}
fill(200,200,200)
textSize(32)
text(time,300,50)
fill(255,255,255)

}

if(level==50){
  fadeOut=fadeOut-2
  fadeIn=fadeIn+1

  fill(0,0,0,fadeOut)
    image(exit,0,0,800,800)
  rect(0,0,800,800)

  fill(0,0,0,fadeIn)
rect(0,0,800,800)

if(fadeIn>255){
  fill(255,255,255)
  textSize(32)
  text('hey! you got your breath of fresh air',100,100)
  text('it took you',100,300)
  text(time,255,300)
  text('seconds',295,300)
  text('might want to go faster next time',100,500)
}

print(fadeIn)
}




if(keyIsDown(37)){x=x+3}
if(keyIsDown(38)){y=y+3}
if(keyIsDown(39)){x=x-3}
if(keyIsDown(40)){y=y-3}

}
