class Particle {

  constructor() {
    // coordinates for the placement of the smoke
    this.x = 20;
    this.y = 345;
    this.vx = random(-2, 2); // x velocity
    this.vy = random(-9, -1); // y velocity
    this.alpha = 235;
    this.size = 1
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 7; // when the particles fade out
    this.size += 2;
  }

  show() {
    noStroke();
    //stroke(255);
    fill(157, 141, 145, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}
