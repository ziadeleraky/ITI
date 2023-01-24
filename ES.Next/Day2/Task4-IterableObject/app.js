// Method One using iterator
let info = {
  fname: "Ziad",
  lname: "Eleraky",
  [Symbol.iterator]: () => {
    let keys = Object.keys(info);
    let counter = 0;
    return {
      next: () => {
        return {
          // Bonus
          value: { key: keys[counter], value: info[keys[counter++]] },
          done: counter > keys.length,
        };
      },
    };
  },
};

for (let key of info) {
  console.log(key);
}

console.log("***************");

// Method Two using generator
let newInfo = {
  fname: "Ziad",
  lname: "Eleraky",
  gen: function* () {
    let keys = Object.keys(newInfo);
    for (let key of keys) {
      typeof newInfo[key] !== "function" ? yield { key, value: newInfo[key] } : "";
    }
  },
};

let generator = newInfo.gen();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
