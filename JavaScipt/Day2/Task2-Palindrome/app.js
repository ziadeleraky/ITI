let str = prompt("Enter a String");
let choice = prompt("Ignore case sensitivity? - y or n -");
let count = 0;

function palindrom(string) {
  let regex = /[^a-zA-Z0-9]/g; // any whitespace
  // Case Sensitivity
  if (choice === "y" || choice === "Y") {
    string = string.toLowerCase().replace(regex, ""); // wil remove any whitespace in the sentence
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== string[string.length - 1 - i]) {
        return "Not Palindrom";
      }
    }
    return "Palindrom";
    // Ignoring Case Senitivity
  } else {
    string = string.replace(regex, ""); // wil remove any whitespace in the sentence
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== string[string.length - 1 - i]) {
        return "Not Palindrom";
      }
    }
    return "Palindrom";
  }
}

alert(palindrom(str));
