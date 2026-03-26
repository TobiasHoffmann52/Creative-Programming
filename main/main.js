let score = 0;
let trees = [];

function setup() {
  createCanvas(1200, 800);
  noStroke();

}


function draw() {
  clear();
  background(120);

  fill(25, 209, 250);
  rect(0, 0, width, height*1/3);
  fill(87, 166, 3);
  rect(0, height*1/3, width, height*2/3);

  writeScore(20, 20);

  for (let i = trees.length-1; i >= 0; i--) {
    trees[i].show();
  }

  calculateScore();
  
  for (let i = 0; i <= 5; i++) {
    let x = random (0, width);
    let y = random (0, height/3);
    fill(255, 180);
    ellipse(x, y, 150, 70);
  }
}

function mouseClicked() {
  if (mouseY > (height*1/3)) {
    let newTree = new Tree(mouseX, mouseY);
    trees.push(newTree);
  }
}


function writeScore(x, y) {
  // Writes the current CO2 emissions on the specified x/y-coordinates
  push();

  translate(x, y);
  textAlign(LEFT, CENTER);
  textSize(36);
  fill(255);
  text("CO2 emissions: " + score + "g", x, y);

  pop();
}


function calculateScore() {
  score = 0 - (trees.length * 10);
}
