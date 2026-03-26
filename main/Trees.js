class Tree {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }


  show() {
    fill("brown");
    rect(this.x-10,this.y,20,-70);
    fill("green");
    circle(this.x,this.y-60,40);
    
  }
}
