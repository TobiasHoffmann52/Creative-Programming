var score = 0;
var flowers = [];

class Game {
  contructor() {
  }


  run() {
    // Displays background image
    image(bliss, 0, 0, width, height);

    // Calculates Y-coordinate for robot
    var robotx = -20;
    var roboty = 10 * sin(frameCount * 0.02) + 100;

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

    // Displays all flowers
    for (let i = flowers.length - 1; i >= 0; i--) {
      flowers[i].show();
    }

    if (frameCount % (60*8) == 0) {
      flowers.splice(floor(random(flowers.length)), 1);
    }

    // Displays Robot and makes him float

    image(robot, robotx, roboty, 405*0.7, 488*0.7);
  }

  calculateScore() {
    // Calculates the current CO2 emissions

    score = 0 - (flowers.length * 10);
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
