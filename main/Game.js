var score = 0;
var trees = [];

class Game {
  contructor() {
  }


  run() {
    // Displays background image
    image(bliss, 0, 0, width, height);

    // Displays Robot and makes him float
    var roboty = 10 * sin(frameCount * 0.02) + 300;
    image(robot, 20, roboty, 200, 300);

    // Displays all trees
    for (let i = trees.length - 1; i >= 0; i--) {
      trees[i].show();
    }

    var lastTime = 0;
    var time 
    if ((millis() - lastTime) > 5000) {
      
      lastTime = millis();

      trees.splice(floor(random(trees.length)), 1);

      console.log(floor(millis()) + ", " + floor(lastTime)+ ", " + floor(millis()-lastTime));
    }
  }

  calculateScore() {
    // Calculates the current CO2 emissions

    score = 0 - (trees.length * 10);
    score = score + frameCount / 50;
  }

  writeScore() {
    // Writes the current CO2 emissions

    game.calculateScore();
    textAlign(LEFT, CENTER);
    textSize(36);
    fill(255);
    text("CO2 emissions: " + int(score) + "g", 20, 20);
  }
}
