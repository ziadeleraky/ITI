function first(num1, num2, num3) {
  return console.log([].reverse.call(arguments));
}

function second(num1, num2, num3) {
  return console.log([].reverse.apply(arguments));
}

function third(num1, num2, num3) {
  let rev = [].reverse.bind(arguments);
  return console.log(rev());
}

first(1, 2, 3, 4);
second(5, 6, 7);
third(8,9,10)