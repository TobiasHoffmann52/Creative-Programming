let prompt = [];
let textArray = ["Type here..."];
let firstType = true;

class ChatWindow {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }


  show() {
    // ChatWindow
    fill(253, 120);
    stroke(0, 0, 0);
    rect(this.x, this.y, 400, 100, 10);
    let combinedText = join(textArray, '');
    fill(0);

    // Search bar text
    push();
    textSize(15);
    noStroke();
    textAlign(LEFT, TOP);
    text(combinedText, this.x+10, this.y+10, 400-20, 100);

    pop();
  }
}

function keyPressed() {

  if (gameStarted && robotShown) {
    if (keyCode == 8) { //length er længden på arrayet, ved at -1, kan man slette det sidste index i sin tekst
      textArray.splice(textArray.length - 1, 1);
    }


    if (keyCode <= 90 && keyCode >= 65 || keyCode <= 190 && keyCode >= 187 || keyCode == 32 || keyCode == 49 ) { // "Or" is "||" in an if statement
      if (firstType == true) {
        textArray.splice(0, textArray.length);
        firstType = false;
      }

      if (textArray.length < 140) { // begrænsning på hvormange bogstaver der kan skrives
        textArray.push(key);
      }
    }
    if (keyCode == 13 && textArray.length >= 1) { // If Enter is pressed
      textBoxShown = true;
      prompt.push(textArray.length);

      textArray.splice(0, textArray.length);

      markovIt();
      displayedText = "";
      charIndex = 0;
    }
  }

  if (!gameStarted) {
    timeSinceStart = 0;
  }
  gameStarted = true;  // First keypress starts the game
}
