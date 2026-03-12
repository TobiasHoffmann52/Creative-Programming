let dataset;

let time = 0;
function preload () {
  dataset = loadTable("/assets/global-plastics-production.csv", "csv", "header");
}

function setup() {
  createCanvas(1600, 800);
  background(0, 100, 200);
}

function draw() {
  let r;


  r = dataset.getNum(time, "Global plastics production (million tonnes)");

  time = int(frameCount/2);
  fill(255);
  noStroke();
  circle(width/2, height/2, r/1000000);
}
