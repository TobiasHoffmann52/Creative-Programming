class ChatWindow {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }


  show() {
    // ChatWindow
    fill(253,120);
    stroke(0, 0, 0);
    rect(this.x, this.y, 400, 300, 10);
    rect(this.x, this.y+250, 400, 50, 10);
    let combinedText = join(textArray, '');
    fill(0);

    // Search bar text
    textSize(15);
    noStroke();
    text(combinedText, this.x+10, this.y+280);
  }
  
  
  /*
  markovLoad() {
  for (var j = 0; j < answers.length; j++) {
    var txt = answers[j];
    for (var i = 0; i <= txt.length - order; i++) {
      var gram = txt.substring(i, i + order);
      if (i == 0) {
        beginnings.push(gram);
      }

      if (!ngrams[gram]) {
        ngrams[gram] = [];
      }
      ngrams[gram].push(txt.charAt(i + order));
    }
  }
  button = createButton("Generate");
  button.mousePressed(markovIt);

  console.log(ngrams);
  
  
  }*/
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
    startDotFrame = frameCount;
    textArray.splice(0, textArray.length);
  }
}
