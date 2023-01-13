let str = prompt("Enter a Sentence");
let max = 0;

function strLen(string) {
  string = string.split(" ");
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i].length >= max) {
      max = string[i].length;
      word = string[i];
    }
  }
  return "Longest Word is " + word + ", Length is " + word.length;
}

alert(strLen(str));
