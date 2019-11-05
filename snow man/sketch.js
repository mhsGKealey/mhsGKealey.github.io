function setup() {
  // put setup code here
  createCanvas(600,800);
}

function draw() {
  // put drawing code here
  background(14, 29, 46);

// The ground
fill(46, 39, 25);
rect(0, 300, 400, 100);

// The sun
fill(143, 21, 21);
ellipse(80, 64, 100, 100);

// The snowman
fill(245, 226, 226);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);
}
