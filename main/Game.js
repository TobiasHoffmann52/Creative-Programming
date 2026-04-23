var score = 0;
var trees = [];

class Game {
  contructor() {
  }


  run() {
    // Displays background image
    image(bliss, 0, 0, width, height);


    let p = new Particle();
    particles.push(p);
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        // remove this particle
        particles.splice(i, 1);
      } // removes object at position i



      // Displays Robot and makes him float
      var roboty = 10 * sin(frameCount * 0.02) + 100;
      image(robot, 20, roboty, 405*0.7, 488*0.7);
    }



    // Displays all trees
    for (let i = trees.length - 1; i >= 0; i--) {
      trees[i].show();
    }

    if (frameCount % (60*8) == 0) {
      trees.splice(floor(random(trees.length)), 1);
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
