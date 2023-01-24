var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// A
console.log(
  fruits.every((fruit) => {
    return typeof fruit === "string";
  })
); //true

// B
console.log(fruits.some((fruit) => fruit.startsWith("a"))); //true

// C
let filtered = fruits.filter((fruit) => fruit.startsWith("b") || fruit.startsWith("s"));
console.log(filtered); //['strawberry','banana']

// D
let likedFruits = fruits.map((fruit) => `I like ${fruit}`);
console.log(likedFruits); //['I like apple', 'I like strawberry', 'I like banana', 'I like orange', 'I like mango']

// E
likedFruits.forEach((fruit) => console.log(fruit));
