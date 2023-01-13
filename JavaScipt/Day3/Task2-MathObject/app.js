function circleArea(rad) {
  return 3.14 * rad * rad;
}

function sqRoot(area) {
  return Math.sqrt(area);
}

function cosAng(angle) {
  let x = Math.cos((angle * Math.PI) / 180);
  return x.toFixed(2);
}

let reqCircle = prompt("What is the value of your circles radius");
alert("Total area of the circle is " + circleArea(reqCircle));

let reqArea = prompt("What is the value of you want to calc its square root");
alert("Square root of " + reqArea + " is " + sqRoot(reqArea));

let reqAngle = prompt("What is the angle you want to calc its cos value");
document.write("cos " + reqAngle + "&deg; is " + cosAng(reqAngle));
