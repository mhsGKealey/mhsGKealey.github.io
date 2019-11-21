var x = 50
var y =150
var slide = 1
var up = 0.5
var melt = 0
var xx = 0
var snowfly = 800
var snowfall = 400
function setup() {
  // put setup code here
  createCanvas(800,800);
}


function draw() {
  // put drawing code here
  background(x-50, 29, 46);

// The ground
fill(46, 39, 25);
rect(0, 700, 800, 800);

// The sun
fill(143, 21, 21);
ellipse(x+xx, y, 100, 100);
y=y-up
x=x*2/1.98
if(y<50){up=-up}
// The snowman
melt=170-x*0.5
//stopping the melt
if (melt<0){x=338}
//making the sun continue moving
if (x>337){xx=xx+2}
print(melt);
fill(245, 226, 226);
ellipse(200, 700, 150, 170-x*0.5);
ellipse(200, 600+x*0.3, 100, 120-x*0.35);
strokeWeight(0)
ellipse(200, 520+x*0.55, 75, 90-x*0.27);

//flying snoball when clicked
  ellipse(snowfly,snowfall,20,20)


}

function mouseClicked(){
loop(snowfly=snowfly-2)
}
