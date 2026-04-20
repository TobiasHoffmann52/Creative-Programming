/*

var answers;
var order = 5; // n-gram definition ie. how many characters to split the text into
var ngrams = {};
var beginnings = [];
var button;

function preload() {
  
  console.log(answers);
}


function setup() {
  noCanvas();

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
}


function markovIt () {
  var currentGram = random(beginnings);
  var result = currentGram;

  for (var i = 0; i < 500; i++) {
    var possibilities = ngrams[currentGram];
    if (!possibilities) {
      break;
    }
    var next = random(possibilities);
    result = result + next;
    var len = result.length;
    currentGram = result.substring(len - order, len);
  }

  createP(result);
}

*/
