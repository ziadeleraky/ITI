let trimObj = {
  [Symbol.replace]: (string) => {
    if (string.length > 15) {
      return string.substring(0, 15) + "...";
    }
    return string;
  },
};

console.log("Hello from VSCode".replace(trimObj));
