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
let flowersImg = []; // Array of different flowerheads
let logonSound;
let notificationSound;
let plantSound = []; // Array of three different plant sounds
let gameOverSound;


function preload() {
  // Loading all the images
  bliss = loadImage('assets/bliss.png');
  robot = loadImage('assets/robot.png');
  robot_icon = loadImage('assets/robot_icon.png');
  audioplayer = loadImage('assets/audioplayer.png');
  mail = loadImage('assets/mail.png');
  photofolder = loadImage('assets/photofolder.png');
  settings = loadImage('assets/settings.png');
  doors = loadImage('assets/doors.png');

  // Loading all the soundeffects
  logonSound = loadSound('assets/Windows_XP_Logon.mp3');
  notificationSound = loadSound('assets/Windows_XP_Notification.mp3');
  plantSound.push(loadSound('assets/plant1.mp3'));
  plantSound.push(loadSound('assets/plant2.mp3'));
  plantSound.push(loadSound('assets/plant3.mp3'));
  gameOverSound = loadSound('assets/Windows_XP_Shutdown.mp3');

  // Loading in the text example for Markov Chains
  answers = loadStrings('/assets/answers.txt');

  // Loading the fonts
  font = loadFont('/assets/tahoma.ttf');
  font_italic = loadFont('/assets/tahomabolditalic.ttf');

  // Loading the flowerheads to an array
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

  startScore = floor(random(200, 400));
  markovLoad();
}



function draw() {
  clear();

  game.run();

  game.show();
  game.writeScore();
  game.startScreen();

  if (score > 800) {
    game.gameOver();
  }
}
