let info = {
  name: "Ziad",
  addr: "Elsheikh Zayed City",
  age: 24,
};

let handler = {
  set(target, property, value) {
    // Info must have only three properties
    if (target.hasOwnProperty(property)) {
      // Name Validation
      if (property === "name" && value.length !== 7) {
        throw new Error("Name doesn't contain 7 chars!");
      } else {
        target[property] = value;
      }

      // Address Validation
      if (property === "addr" && typeof value !== "string") {
        throw new Error(`Address isn't a String!`);
      } else {
        target[property] = value;
      }

      // Age Validation
      if (property === "age" && (value > 60 || value < 25)) {
        throw new Error("The only allowed age is between 25-60!");
      } else {
        target[property] = value;
      }
    } else {
      throw new Error(`Can't add new property!`);
    }
  },
};

let proxy = new Proxy(info, handler);

proxy.name = "ziadzia";
// proxy.name = "ziadeleraky";

proxy.addr = "Port Said";
// proxy.addr = 5;

proxy.age = 30;
// proxy.age = 20;

// New Property
// proxy.lname = "eleraky";

console.log(proxy);
