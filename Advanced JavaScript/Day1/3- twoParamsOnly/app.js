function twoParams(num1, num2) {
  if (arguments.length != 2) {
    throw new Error("Enter Two Parameters Only");
  }
  console.log("Two Parameters");
}

twoParams(1, 2);
