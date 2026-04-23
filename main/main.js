let textArray = [];

let bliss;
let robot;
let font;
let game = new Game();
let chat = new ChatWindow(400, 100);
let particles = []; // smoke particles array
let flowersImg = [];


function preload() {
  bliss = loadImage('assets/bliss.png');
  robot = loadImage('assets/robot.png');
  answers = loadStrings('/assets/answers.txt');
  font = loadFont('/assets/tahoma.ttf');
  for (let i = 0; i < 11; i++) {
    let image = loadImage('/assets/' + str(i) + '.png');
    flowersImg.push(image);
  }
}

function setup() {
  createCanvas(1024, 768);
  frameRate(60);
  noStroke();
  textFont(font);
  
}


function draw() {
  clear();
  
  
  
  
  game.run();
  chat.show();
  game.writeScore();
}











/*
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
 */
