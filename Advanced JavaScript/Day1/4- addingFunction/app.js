function add() {
  let result = 0;
  if (arguments.length == 0) {
    throw new Error("Please enter parameters");
  }
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] != "number") {
      throw new Error("Enter number data type only!");
    } else {
      result += arguments[i];
    }
  }
  return console.log(result);
}

add(1, 2, 3);
