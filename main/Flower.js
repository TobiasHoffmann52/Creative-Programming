class Flower {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ImageNumber = floor(random(0, 10));
  }


  show() {
    push();
    angleMode(RADIANS);
    let sway = sin(frameCount * 0.05 + this.ImageNumber) * 10;

    stroke(0, 100, 0);
    strokeWeight(2);
    noFill();


    beginShape();

    curveVertex(this.x, this.y);
    curveVertex(this.x, this.y);

    curveVertex(this.x + sway * 0.3, this.y - 40);

    curveVertex(this.x + sway, this.y - 80);
    curveVertex(this.x + sway, this.y - 80);

    endShape();

    // Flowerhead
    imageMode(CENTER);
    image(flowersImg[this.ImageNumber], this.x + sway, this.y - 80, 30, 30);
    pop();
  }
}


function mouseClicked() {
  if (gameStarted) {
    if ((768-mouseY) <
      (-0.0000000001497 * Math.pow(mouseX, 4))
      + (0.0000006962403 * Math.pow(mouseX, 3))
      - (0.0008557573891 * Math.pow(mouseX, 2))
      + ((0.2494275462201 * mouseX))
      + 350 && mouseY < height-40) { // Makes sure Flowers can only spawn on the grassy area

      let newFlower = new Flower(mouseX, mouseY);
      flowers.push(newFlower);
    }
  }
}
