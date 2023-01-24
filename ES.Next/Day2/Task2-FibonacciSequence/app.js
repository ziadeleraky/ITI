// A (indices)
function* fibIndex(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  for (let i in arr) {
    yield arr[i];
  }
}

let generator = fibIndex(5);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

console.log("***********");

// B (max number)
function* fibMax(maxNum) {
  let arr = [0, 1];
  for (let i = 2; i < maxNum; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
    if (arr[i] > maxNum) {
      arr.pop();
      break;
    }
  }
  for (let i in arr) {
    yield arr[i];
  }
}

let gen = fibMax(6);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
