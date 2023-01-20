let obj1 = {
  id: "SD-10",
  location: "SV",
  addr: "123 st.",
};

let obj2 = {
  name: "ali",
  age: 10,
  fun: function () {},
};

let customObj = {
  description: "Getters & Setters",
  getSetGen: function () {
    for (let i in this) {
      // Checking if it's not a member method
      if (typeof this[i] != "function") {
        // Getters
        this["get" + i] = function () {
          return this[i];
        };

        // Setters
        this["set" + i] = function () {
          this[i] = arguments[0];
        };
      }
    }
  },
};


// console.log(obj1);
customObj.getSetGen.call(obj1);
// console.log(obj1);

// console.log(obj2);
// customObj.getSetGen(obj2);
// console.log(obj2);

console.log("id before: ", obj1.getid());
console.log(obj1.setid(123));
console.log("id after: ", obj1.getid());

console.log("location before: ", obj1.getlocation());
console.log(obj1.setlocation("UI"));
console.log("location after: ", obj1.getlocation());

console.log("addr before: ", obj1.getaddr());
console.log(obj1.setaddr("st. 475"));
console.log("addr after: ", obj1.getaddr());
