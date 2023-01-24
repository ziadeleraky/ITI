function course(obj) {
  // Default Params
  let defaultObj = {
    courseName: "ES6",
    courseDuration: "3days",
    courseOwner: "Ziad",
  };

  // Bonus
  // Keys of the given args
  let objKeys = Object.keys(obj);

  // Check for obj nums
  if (objKeys.length > 3) {
    throw new Error("You must enter only 3 parameters!");
  }

  // Check for obj keys
  for (let key in obj) {
    if (!Object.keys(defaultObj).includes(key)) {
      throw new Error("Key is invalid!");
    }
  }

  let newObj = Object.assign({}, defaultObj, obj);
  return `Course name is ${newObj.courseName}, Course Duration is ${newObj.courseDuration}, and Course Owner is ${newObj.courseOwner}`;
}

console.log(course({ courseName: "JS", courseDuration: "7days" }));
console.log(course({ courseDuration: "7days", courseOwner: "Ahmed" }));
console.log(course({ courseDuration: "7days", courseOwnerr: "Ahmed"}));
// console.log(course({ courseName: "JS", courseDuration: "7days", courseOwner: "Ahmed", course: "JS" }));
