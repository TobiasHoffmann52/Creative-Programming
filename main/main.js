let score = 0;
let trees = [];

let textArray = [];
let showGenerating = false;
let lastDotFrame = 0;
let startDotFrame = 0;
let circle_x = 150;
let circle_y = 400;
let circle_diam = 200;

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

  fill(25, 209, 250);
  rect(0, 0, width, height*1/3);
  fill(87, 166, 3);
  rect(0, height*1/3, width, height*2/3);


  image(bliss, 0, 0, width, height);

  writeScore(20, 20);

  for (let i = trees.length - 1; i >= 0; i--) {
    trees[i].show();
  }

  calculateScore();

  let glow = 255;
  if (showGenerating) { // hvis "enter" bliver trykket på vil cirklen begynde at "glow"
    glow = 100 + 40 * sin(frameCount * 0.03); // Sin is used for pulsing - glow er et tal imellem 60 og 140
  }
  //circle
  noStroke();
  fill(128, 0, 128, glow);

  if (showGenerating) {
    fillGradient('radial', {
      from:
        [circle_x, circle_y, 0], // x, y, radius
      to:
        [circle_x, circle_y, circle_diam], // x, y, radius
      steps:
        [
          color(128 + 100 * sin(frameCount * 0.03), 0, 128 + 100 * sin(frameCount * 0.03)),
          color(128 + 50 * sin(frameCount * 0.03), 0, 128 + 50 * sin(frameCount * 0.03)),
          color(128 + 10 * sin(frameCount * 0.03), 0, 128 + 10 * sin(frameCount * 0.03)),
          color(128, 0, 128),
          //          color(0, 96, 164),
          //          color()
        ] // Array of p5.color objects or arrays containing [p5.color Object, Color Stop (0 to 1)]
    }
    );
  }
  circle(circle_x, circle_y, circle_diam, glow);


  // searchbar rect
  stroke(128, 0, 128, 255 - glow);
  fill(253);
  stroke(0, 0, 0);
  rect(50, 550, 200, 50, 10);
  let combinedText = join(textArray, '');
  fill(0);

  // "!" betyder "ikke/not"
  if (!showGenerating) {
  }
  textSize(15);
  noStroke();
  text(combinedText, 60, 575);
  if (showGenerating) {
    generating();
  }
}

function mouseClicked() {
  if (mouseY > (height * 1 / 3)) {
    let newTree = new Tree(mouseX, mouseY);
    trees.push(newTree);
  }
}

function keyPressed() {

  if (keyCode == 8) { //length er længden på arrayet, ved at -1, kan man slette det sidste index i sin tekst
    textArray.splice(textArray.length - 1, 1);
  }

  // "eller" er "||" i en if statement
  if (keyCode <= 90 && keyCode >= 65 || keyCode == 32) {
    if (textArray.length < 30) { // begrænsning på hvormange bogstaver der kan skrives
      textArray.push(key);
    }
  }
  if (keyCode == 13) {
    showGenerating = true;
    startDotFrame = frameCount;
  }
  //console.log(textArray.length);
} // keyPressed()


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
