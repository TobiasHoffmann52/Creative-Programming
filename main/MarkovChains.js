/*

 let answers;
 let order = 5; // n-gram definition ie. how many characters to split the text into
 let ngrams = {};
 let beginnings = [];
 let button;
 
 function preload() {
 
 console.log(answers);
 }
 
 
 function setup() {
 noCanvas();
 
 for (let j = 0; j < answers.length; j++) {
 let txt = answers[j];
 for (let i = 0; i <= txt.length - order; i++) {
 let gram = txt.substring(i, i + order);
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
 let currentGram = random(beginnings);
 let result = currentGram;
 
 for (let i = 0; i < 500; i++) {
 let possibilities = ngrams[currentGram];
 if (!possibilities) {
 break;
 }
 let next = random(possibilities);
 result = result + next;
 let len = result.length;
 currentGram = result.substring(len - order, len);
 }
 
 createP(result);
 }
 
 */
