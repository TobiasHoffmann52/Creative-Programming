let score = 0;
let startScore; // Initial score
let timeSinceStart = 0;
let timeSinceRobotPressed = 0;
let flowers = [];
let gameStarted = false;
let robotShown = false;
let overlayAlpha = 220; //starting point for the overlay transparentsy
let textBoxShown = false;
let iconX = 30;
let gameOver = false;

let mailOpened = false;
let mailRead = false;

let displayedText = "";
let charIndex = 0;


class Game {
  contructor() {
  }


  startScreen() {
    if (gameStarted) { //Only runs when game has started
      if (overlayAlpha == 220) { // Only play once, at the very first frame of game start
        logonSound.setVolume(0.5) // 50% Volume
          logonSound.play();
      }
      if (overlayAlpha > 0) { //If the overlay is higher than 0 keep fading
        overlayAlpha -= 2; //It's fading down with 4 every frame
      }
    }

    push();
    fill(0, overlayAlpha);
    rect(0, 0, width, height);

    fill(255);

    textAlign(CENTER);

    if (!gameStarted) { // Only shows when game is not started
      textSize(50);
      text('TYPE LESS, PLANT MORE', width/2, 200);
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

    // Displays darker sky overlay if score is high
    for (let x = 0; x <= width; x++) {
      let overlay = 0

        if (score > 450) {
        overlay = ((score / 800) * 200)-100;
      }

      let y = 340 + (-0.0000000001497 * Math.pow(x, 4))
        + (0.0000006962403 * Math.pow(x, 3))
        - (0.0008557573891 * Math.pow(x, 2))
        + (0.2494275462201 * x);

      fill(0, overlay);
      rect(x, 0, 1, height-y);
    }

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


    image(settings, iconX, 20, 60, 60);
    text('settings.exe', iconX+30, 90);

    image(robot_icon, 130, 20, 60, 60);
    text('fancy bot.exe', 160, 90);

    image(mail, iconX, 120, 60, 60);
    text('mail.exe', iconX+30, 190);

    // Countdown for mail notification
    if (timeSinceRobotPressed >= 20 && mailRead == false) {
      if (timeSinceRobotPressed == 20) {
        notificationSound.play();
        timeSinceRobotPressed++;
      }

      push();
      textAlign(CENTER, CENTER);

      let dotX = 88;
      let dotY = 140;
      let dotSize = 20;

      fill(255, 0, 0);
      noStroke();
      circle(dotX, dotY, dotSize);

      fill(255);
      textFont("Verdana");
      text("1", dotX, dotY);

      pop();
    }

    // Displays mailbox
    if (mailOpened) {
      push();

      let boxX = 108;
      let boxY = 115;
      let boxW = 230;
      let boxH = 265;

      // Mail-window
      fill(255);
      stroke(0);
      rect(boxX, boxY, boxW, boxH);

      // Blue topbar
      fill(50, 100, 200);
      rect(boxX, boxY, boxW, 30);

      fill(255);
      noStroke();
      textAlign(LEFT, CENTER);
      text("Mail", boxX + 10, boxY + 15);

      // Mail-info
      fill(0);
      textSize(12);
      textAlign(LEFT, TOP);

      text("From: noreply@doors.com", boxX+10, boxY+38);
      text("To: you@pollutes.com", boxX+10, boxY+58);
      text("Subject: Save the environment", boxX+10, boxY+78);

      push();
      // linje under subject
      stroke(0);
      line(boxX+10, boxY+103, boxX+boxW-10, boxY+103);
      pop();

      // The message
      let message =
        "Dear User,\n\nYou are ruining the environment with your dumb questions. "
        + "If you want to keep using Fancy Bot, then you must plant flowers to compensate.\n\nBest of luck,";
      text("Danish EPA", boxX+10, boxY+230);

      // x, y, width, height
      text(
        message,
        boxX+10,
        boxY+110,
        boxW-20,
        boxH-80
        );

      textAlign(CENTER, CENTER);
      rectMode(CENTER);
      let rectX = 322;
      let rectY = 130;
      let rectSize = 20;

      fill(255, 0, 0);
      stroke(255);
      strokeWeight(1);
      rect(rectX, rectY, rectSize, rectSize, 5);

      fill(255);
      textFont("Verdana");
      textSize(20);
      noStroke();
      text("x", rectX, rectY);

      pop();
    }

    image(photofolder, iconX, 220, 60, 60);
    text('scroll pictures', iconX+30, 290);

    image(audioplayer, iconX, 320, 60, 60);
    text('mediaplayer.exe', iconX+30, 390);

    if (timeSinceStart > 12 && robotShown == false && mailOpened == false) { // If user has not discovered the Robot program
      push();
      stroke(255);
      textSize(20);
      textAlign(LEFT, TOP);
      angleMode(DEGREES);
      push();
      translate(220, 150);
      rotate(-45);

      line(0, 0, 0, -40);
      triangle(-5, -40, 0, -50, 5, -40);
      pop();
      noStroke();
      text("Try and press me :)", 220, 150);
      pop();
    }

    pop();
    
    // Displays all flowers
    flowers.sort((a, b) => b.y - a.y); // Sorts flowers by y-value, so the front flower is always displayed first
    for (let i = flowers.length - 1; i >= 0; i--) {
      flowers[i].show();
    }

    if (frameCount % (60*5) == 0) { // Removes a random flower every 5 seconds
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


    if (textBoxShown) {
      push();
      fill(255);
      noStroke();

      rect(600, 100, 200, 150, 30);
      triangle(600, 200, 650, 250, 575, roboty+180);

      fill(0);
      noStroke();
      textSize(15);
      textFont(font);
      textAlign(LEFT, TOP);
      typeWriter();
      text(displayedText, 620, 120, 150, 100);

      pop();
    }

    if (frameCount % 60 == 0) { // Adds one every second
      timeSinceRobotPressed++;
    }
  }
  

  gameOver () {

    if (gameOver == false) {
      gameOverSound.play();
      gameOver = true;
    }

    push();
    fill(0, 240);
    rect(0, 0, width, height);

    fill(255);

    textAlign(CENTER);

    textSize(50);
    text('GAME OVER', width/2, 200);
    textSize(20);
    text('PRESS CTRL + R TO RESTART...', width/2, 2 * sin(frameCount * 0.05) + 600);

    pop();
  }
  

  calculateScore() {
    // Calculates the current CO2 emissions
    if (gameStarted) {

      let currentScore = score;

      currentScore = 0 - (flowers.length * 5); // C02 compensation based on the amount of flowers

      if (frameCount % 60 == 0) { // Adds one every second
        timeSinceStart++;
      }

      currentScore += timeSinceStart; // Passive C02 emission

      let promptImpact = sum(prompt) * 1.5; // Adds up the amount of characters typed in total

      score = startScore + currentScore + promptImpact; // Final score calculation

      if (score < 0 ) { // Score can't go past zero
        score = 0;
      }
    }
  }
  

  writeScore() {
    // Writes the current CO2 emissions
    push();
    rectMode(RIGHT);
    stroke(0);
    strokeWeight(1);
    fill(255, 120);
    rect(350, 10, 400, 30);

    noStroke();
    if (score < 450) {
      fill('#7BB662'); // Green
      rect(351, 11, score/2, 28);
    } else if (score >= 450 && score < 600) {
      fill('#FFD301'); // Yellow
      rect(351, 11, score/2, 28);
    } else if (score >= 600 && score < 800) {
      fill('#E03C32'); // Red
      rect(351, 11, score/2, 28);
    } else {
      fill('#E03C32'); // Red
      rect(351, 11, 398, 28);
    }

    textAlign(CENTER);
    textSize(20);
    fill(255);
    stroke(1);

    text("CO2", 320, 22);

    pop();
  }
}


function sum (array) {
  let num = 0;
  for (i = 0; i < array.length; i++) {
    num += array[i];
  }

  return num;
}


function mousePressed() {
  if (
    mouseX > iconX &&
    mouseX < iconX + 60 &&
    mouseY > 120 &&
    mouseY < 180
    ) {
    mailOpened = true;

    mailRead = true;
  }

  if (
    mouseX > 302 && mouseX < 342 &&
    mouseY > 110 && mouseY < 150
    ) {
    mailOpened = false;
  }
}


function typeWriter() {
  if (charIndex < textResult.length) {
    if (frameCount % 2 == 0) { // controls speed, increase number to slow down
      displayedText += textResult[charIndex];
      charIndex++;
    }
  }
}
