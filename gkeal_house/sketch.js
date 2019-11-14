var housey = 250
var housex = 150
// for animation
var move = 0
var fly = 0







function setup() {
  // put setup code here
  createCanvas(800,600);
background(140, 208, 237)
}

function draw() {

  background(140, 208, 237)

// backyard
strokeWeight(1)
fill(27, 125, 53)
rect(housex-housex,housey*2/1.5,housex*6,housey*4)


//cloud
strokeWeight(0)
fill(255,255,255)
ellipse(housex*2/1.5+move,housey/2,housex/2,housex/2)
ellipse(housex*2/1.3+move,housey/2.4,housex/2,housex/2)
ellipse(housex*2/1.3+move,housey/1.8,housex/2,housex/2)
ellipse(housex*2/1.1+move,housey/1.8,housex/2,housex/2)
ellipse(housex*2/1.1+move,housey/2.4,housex/2,housex/2)
ellipse(housex*2+move,housey/2,housex/2,housex/2)

ellipse(housex/100+move,housey,housex/4,housex/4)
ellipse(housex/10+move,housey-housey/12,housex/4,housex/4)
ellipse(housex/10+move,housey+housey/12,housex/4,housex/4)
ellipse(housex/6+move,housey,housex/3,housex/3)

ellipse(housex*3.5+move,housey,housex/2,housex/2)
ellipse(housex*3.8+move,housey,housex/2,housex/2)
ellipse(housex*3.7+move,housey*2/1.8,housex/2,housex/2)
ellipse(housex*4+move,housey*2/1.8,housex/2,housex/2)


move=move+0.1

// bird
strokeWeight(7)
noFill()
arc(housex+fly, housey/1.5-fly/4, 35, 60, housex/6.6, housex)
arc(housex*2/1.65+fly, housey/1.50-fly/4, 35, 60, housex/6.6, housex)

fly++
//crate
strokeWeight(3)
fill(168, 126, 10)
triangle(housex*4/1.05,housey*2/1.25,housex*4,housey*2/1.3,housex*4,housey*2/1.18)
rect(housex*4/1.05, housey*2/1.4, housex*5/10, housey/6)
rect(housex*4, housey*2/1.3, housex*5/10, housey/6)

  // house body and colour
  strokeWeight(1)
  fill(100,52,52)
rect(housex,housey,housex*2,housey+50)

//roof of house
fill(150,30,30)
strokeWeight(3)
triangle(housex,housey,housex*3,housey,housex*2,housey-housey*2/5)

//window
fill(255,255,255)
strokeWeight(10)
rect(housex+housex*2/10,housey+housey*2/8,housex-housex/4,housey-housey/1.7)
strokeWeight(1)

//window divides
strokeWeight(3)
line(housex+housex*2/3.5,housey+housey*2/3,housex+housex*2/3.5,housey+housey/4)
line(housex+housex*2/10,housey+housey*2/4.5,housex+housex*2/2.2,housey+housey*2/4.5)
//door
fill(115, 95, 14)
rect(housex+housex*2/1.8,housey+housey/2,housex/1.5,housey/1.43)
strokeWeight(10)
point(housex*3/1.3,housey*2/1.15)
//road
strokeWeight(7)
fill(125,125,125)
rect(housex-housex,housey*2,housex*6,housey)
//sun
strokeWeight(0)
fill(250, 242, 5)
ellipse(housex-housex,housey-housey,housex*2,housex*2)




}
