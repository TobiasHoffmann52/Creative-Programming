let textArray = [];
let bliss;
let robot;
let audioplayer;
let mail;
let photofolder;
let settings;
let doors;
let font;
let font_italic;
let game = new Game();
let chat = new ChatWindow(600, 300);
let particles = []; // Smoke particles array
let flowersImg = []; //


function preload() {
  // Preloading all the images
  bliss = loadImage('assets/bliss.png');
  robot = loadImage('assets/robot.png');
  robot_icon = loadImage('assets/robot_icon.png');
  audioplayer = loadImage('assets/audioplayer.png');
  mail = loadImage('assets/mail.png');
  photofolder = loadImage('assets/photofolder.png');
  settings = loadImage('assets/settings.png');
  doors = loadImage('assets/doors.png');

  // Loading in the text example for Markov Chains
  answers = loadStrings('/assets/answers.txt');

  // Preloading the fonts
  font = loadFont('/assets/tahoma.ttf');
  font_italic = loadFont('/assets/tahomabolditalic.ttf');

  // Preloading the flowerheads to an array
  for (let i = 0; i < 11; i++) {
    let flowerhead = loadImage('/assets/' + str(i) + '.png');
    flowersImg.push(flowerhead);
  }
}

function setup() {
  createCanvas(1024, 768);
  frameRate(60);
  noStroke();
  textFont(font);
  textAlign(LEFT, CENTER);
  cursor('assets/cursor.png');

  
  for (i = 0; i < 25; i++) {
   let x = random(0, width);
   let y = random(480, height-40);
   let newFlower = new Flower(x, y);
   flowers.push(newFlower);
   }
}


function draw() {
  clear();

  game.run();

  game.show();
  game.writeScore();
  game.startScreen();
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
