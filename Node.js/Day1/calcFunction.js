function add(...args) {
  return args.reduce((acc, curr) => +acc + +curr);
}

// console.log(add(1, 2, 3, 4, 5));

function sub(...args) {
  return args.reduce((acc, curr) => +acc - +curr);
}

function mult(...args) {
  return args.reduce((acc, curr) => +acc * +curr);
}

function div(...args) {
  return args.reduce((acc, curr) => +acc / +curr);
}

module.exports = {
  add,
  sub,
  mult,
  div,
};
