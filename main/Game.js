var score = 0;
var flowers = [];
let gameStarted = false;
let robotShown = false;
let overlayAlpha = 240; //starting point for the overlay transparentsy
let timeSinceStart;

class Game {
  contructor() {
  }

  startScreen() {
    if (gameStarted) { //Only runs when game has started
      if (overlayAlpha > 0) { //If the overlay is higher than 0 keep fading
        overlayAlpha -= 2; //It's fading down with 4 every frame
      }
    }

    push();
    fill(0, overlayAlpha);
    rect(0, 0, width, height);

    fill(255);

    textAlign(CENTER);

    if (!gameStarted) { //'!' means if the game is not started yet
      textSize(50);
      text('WINDOWS GAME (WIP)', width/2, 200);
      textSize(20);
      text('PRESS ANY KEY TO START...', width/2, 2 * sin(frameCount * 0.05) + 600);
    }
    pop();
  }


  run() {

    // Continuously calculates the current score
    game.calculateScore();

    // Shows robot if icon is pressed
    if (mouseIsPressed) {
      if (mouseX > 130 && mouseX < 190 && mouseY > 20 && mouseY < 100) {
        robotShown = true;
      }
    }
  }

  show() {
    // Displays background image
    image(bliss, 0, 0, width, height);

    // Displays taskbar
    push();

    fill('#245DDA');
    rect(0, height-40, width, 40);

    fill('#44AF3D');
    rect(-20, height-37, 150, 40, 8);

    image(doors, 5, height-33, doors.width*0.125, doors.height*0.125);

    fill(255);
    textSize(18);
    textFont(font_italic);
    text("start", 75, height-20);

    textSize(14);
    textFont(font);
    textAlign(RIGHT, CENTER);

    text(hour() + ":" + minute()+ ":" + second(), width-10, height-30);
    text(day() + "-" + month()+ "-" + year(), width-10, height-15);

    pop();

    // Displays desktop icons
    push();
    fill(255);
    stroke(1);
    textSize(14);
    textAlign(CENTER);
    let iconX = 30;

    image(settings, iconX, 20, 60, 60);
    text('settings.exe', iconX+30, 90);

    image(robot_icon, 130, 20, 60, 60);
    text('fancy bot.exe', 160, 90);

    image(mail, iconX, 120, 60, 60);
    text('mail.exe', iconX+30, 190);

    image(photofolder, iconX, 220, 60, 60);
    text('scroll pictures', iconX+30, 290);

    image(audioplayer, iconX, 320, 60, 60);
    text('mediaplayer.exe', iconX+30, 390);

    pop();



    // Displays all flowers
    for (let i = flowers.length - 1; i >= 0; i--) {
      flowers[i].show();
    }

    if (frameCount % (60*8) == 0) { // Remove a random flower every 8 seconds
      flowers.splice(floor(random(flowers.length)), 1);
    }

    if (robotShown) {
      game.showRobot();
    }
  }

  showRobot() {

    chat.show();

    // Calculates Y-coordinate for robot
    var robotx = 300;
    var roboty = 10 * sin(frameCount * 0.02) + 80;

    // Makes smoke particles
    let p = new Particle(robotx + 85, roboty + 200);
    particles.push(p);
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        // remove this particle
        particles.splice(i, 1);
      } // removes object at position i
    }

    // Displays Robot and makes him float

    image(robot, robotx, roboty, robot.width*0.7, robot.height*0.7);
  }

  calculateScore() {
    // Calculates the current CO2 emissions
    if (gameStarted) {

      score = 0 - (flowers.length * 2.5); // C02 compensation based on the amount of flowers

      if (frameCount % 60 == 0) { // Adds one every second
        timeSinceStart++;
      }

      score += timeSinceStart; // Passive C02 emission

      if (score < 0 ) { // Score can't go past zero
        score = 0;
      }
    }
  }

  writeScore() {
    // Writes the current CO2 emissions
    push();

    textAlign(CENTER);
    textSize(36);
    fill(255);
    stroke(1);
    text("CO2 emissions: " + floor(score) + "g", width/2, 20);

    pop();
  }
}
