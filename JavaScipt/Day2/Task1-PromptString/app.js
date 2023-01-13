let str = prompt("Enter a String");
let char = prompt("Enter a Character");
let choice = prompt("Ignore case sensitivity? - y or n -");
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (choice == "y" || choice == "Y") {
    if (str[i].toLowerCase() === char) {
      count++;
    }
  } else {
    if (str[i] === char) {
      count++;
    }
  }
}

alert("No. of chars = " + count);
