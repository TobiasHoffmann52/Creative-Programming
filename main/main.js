let score = 0;
let trees = [];

let textArray = [];
let showGenerating = false;
let lastDotFrame = 0;
let startDotFrame = 0;

let textX = 100;
let textY = 400;

let bliss;


function preload() {
  bliss = loadImage('assets/bliss.jpg');
}

function setup() {
  createCanvas(1500, 800);
  frameRate(60);
  noStroke();
}


function draw() {
  clear();
  background(120);



  image(bliss, 0, 0, width, height);

  writeScore(20, 20);

  for (let i = trees.length - 1; i >= 0; i--) {
    trees[i].show();
  }

  calculateScore();

  // searchbar rect
  fill(253);
  stroke(0, 0, 0);
  rect(550, 200, 600, 500, 10);
  let combinedText = join(textArray, '');
  fill(0);


  textSize(15);
  noStroke();
  text(combinedText, 560, 575);
}

function mouseClicked() {
  if (mouseY > (height * 1 / 3)) {
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
  text("CO2 emissions: " + int(score) + "g", x, y);

  pop();
}


function calculateScore() {
  score = 0 - (trees.length * 10);
  score = score + frameCount / 50;
}

function generating() {
  //let time = Date.now();
  // let glow = 100 + 40 * sin(frameCount * 0.90); // Sin is used for pulsing
  console.log("Generating...");
  textSize(20);
  fill(250, 120);

  //  let dots = frameCount
  let framesPassed = frameCount - startDotFrame;
  if (framesPassed < 25) {
    text("Generating", textX, textY);
    console.log("framesPassed :", framesPassed);
  }
  if (framesPassed > 25 && framesPassed < 50) {
    text("Generating.", textX, textY);
    console.log("framesPassed :", framesPassed);
  }
  if (framesPassed > 50 && framesPassed < 75) {
    text("Generating..", textX, textY);
    console.log("framesPassed :", framesPassed);
  }
  if (framesPassed > 75 && framesPassed < 100) {
    text("Generating...", textX, textY);
    console.log("framesPassed :", framesPassed);
    startDotFrame = frameCount;
  }
  console.log("frameCount :", frameCount);
}
