class ChatWindow {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }


  show() {
    fill("brown");
    rect(this.x-10, this.y, 20, -70);
    fill("green");
    circle(this.x, this.y-60, 40);
  }
}

function keyPressed() {

  if (keyCode == 8) { //length er længden på arrayet, ved at -1, kan man slette det sidste index i sin tekst
    textArray.splice(textArray.length - 1, 1);
  }

  // "eller" er "||" i en if statement
  if (keyCode <= 90 && keyCode >= 65 || keyCode == 32) {
    if (textArray.length < 30) { // begrænsning på hvormange bogstaver der kan skrives
      textArray.push(key);
    }
  }
  if (keyCode == 13) {
    showGenerating = true;
    startDotFrame = frameCount;
    textArray.splice(0, textArray.length);
  }
}
