class Polygon {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Rectangle extends Polygon {
  constructor(width, height) {
    super(width, height);
  }
  toString() {
    return this.width * this.height;
  }
  draw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    let x1 = 20;
    let y1 = 20;
    let x2 = x1 + this.width;
    let y2 = y1 + this.height;
    ctx.rect(x1, y1, x2, y2);
    ctx.stroke();
  }
}

class Square extends Polygon {
  constructor(width) {
    super(width);
  }
  toString() {
    return this.width * this.width;
  }
  draw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    let x1 = 30;
    let y1 = 30;
    let x2 = x1 + this.width;
    let y2 = y1 + this.width;
    ctx.rect(x1, y1, x2, y2);
    ctx.stroke();
  }
}

class Triangle extends Polygon {
  constructor(width, height) {
    super(width, height);
  }
  toString() {
    return 0.5 * this.width * this.height;
  }
  draw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.lineTo(150, 300);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }
}

class Circle extends Polygon {
  constructor(radius) {
    super(radius);
  }
  toString() {
    return Math.PI * this.width * this.width;
  }
  draw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(200, 100, this.width, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

let rect = new Rectangle(250, 150);
rect.draw();
console.log("Rect Area =", rect.toString());

let sq = new Square(50);
sq.draw();
console.log("Square Area =", sq.toString());

let tri = new Triangle(5, 10);
tri.draw();
console.log("Triangle Area =", tri.toString());

let cir = new Circle(50);
cir.draw();
console.log("Circle Area =", cir.toString());
