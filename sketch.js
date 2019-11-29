function setup() {
  // put setup code here
  createCanvas(1700,900);
}
var drive=1
function draw() {

background(47, 107, 55)
fill(100,100,100)
strokeWeight(0)
rect(225,50,75,800,)
rect(525,50,75,800,)
rect(800,50,75,800,)
rect(1100,50,75,800,)
rect(1400,50,75,800,)
rect(0,0,1700,50)
strokeWeight(1)

drawneighborhood()



fill(255,0,0)
rect(240,75+drive,25,25,)
rect(240,30+drive,25,25,)
rect(235,50+drive,35,35,)


drive=drive*1.02
print(drive)
}

function drawhouse(x,y){
var x
var y
fill(67, 97, 55)
rect (x-50,y-15,60,130)
fill(161,85,3)
rect(x,y,100,100,)
line(x,y,x+100,y+100)
line(x+100,y,x,y+100)
}

function drawblock(x,y){

drawhouse(x+50,y+50)
drawhouse(x+50,y+200)
drawhouse(x+50,y+400)
drawhouse(x+50,y+600)

}
function drawneighborhood(x,y){
drawblock(50,100)
drawblock(350,100)
drawblock(640,100)
drawblock(940,100)
drawblock(1240,100)
drawblock(1540,100)

}
