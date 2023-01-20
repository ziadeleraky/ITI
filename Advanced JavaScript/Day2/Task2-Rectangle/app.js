function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return this.width * this.height;
  };
  this.getPerimeter = function () {
    return 2 * this.width + 2 * this.height;
  };
  this.displayInfo = function () {
    console.log("Width = ", this.width);
    console.log("Height = ", this.height);
    console.log("Area = ", this.getArea());
    console.log("Perimeter = ", this.getPerimeter());
  };
}

let rec = new Rectangle(5, 4);
console.log(rec);
console.log(rec.getArea());
console.log(rec.getPerimeter());
console.log(rec.displayInfo());
