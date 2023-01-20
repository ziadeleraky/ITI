function Book(title, nOfChapters, auther, noOfPages, publisher, noOfCopies) {
  Object.defineProperties(this, {
    title: {
      value: title,
    },
    numofChapters: {
      value: nOfChapters,
    },
    author: {
      value: auther,
    },
    numofPages: {
      value: noOfPages,
    },
    publisher: {
      value: publisher,
    },
    numofCopies: {
      value: noOfCopies,
    },
  });

  // Increase Counter by 1 every time that book object has been created
  Book.Counter++;

  this.display = function () {
    return title;
  };
}

// Static Counter
Book.Counter = 0;

// Get Counter
Book.getInstances = function () {
  return Book.Counter;
};

function Box(height, width, length, material) {
  Object.defineProperties(this, {
    height: {
      value: height,
    },
    width: {
      value: width,
    },
    length: {
      value: length,
    },
    material: {
      value: material,
    },
    content: {
      value: [],
      writable: true,
    },
  });

  // Get number of books in content attr.
  this.Count = function () {
    let count = 0;
    for (let i in this.content) count++;
    return count;
  };

  // Add Method that take a Book Object and add it to box's content
  this.AddBook = function (book) {
    if (this.Count() < this.length) {
      this.content.push(book);
    } else {
      throw new Error("Box is Full!");
    }
  };

  // Delete Method that take a title and search for the first element that carry the same title
  this.Delete = function (title) {
    for (let i in this.content) {
      if (this.content[i].title == title) {
        delete this.content[i];
        // Book.Counter--;
        break;
      }
    }
  };

  Box.prototype.toString = function () {
    return console.log(
      `
  Box Dimensions
  --------------
  Height = ${this.height}
  Width = ${this.width}
  Length = ${this.length}
  No. of Books = ${this.Count()}
  Content = 
  `,
      this.content
    );
  };

  Box.prototype.valueOf = function () {
    return this.Count();
  };

  // Display box's content
  this.display = function () {
    return this.content;
  };
}

// TEST
// ------- BOOK1
let book1 = new Book("ziad", 5, "ahmed", 20, "eleraky", 3);
let book2 = new Book("mohamed", 5, "ziad", 20, "ahmed", 3);
let book3 = new Book("ziad", 5, "ahmed", 20, "eleraky", 3);
let box = new Box(10, 10, 5, "paper");

// ------- BOOK2
let book4 = new Book("ziad", 5, "ahmed", 20, "eleraky", 3);
let book5 = new Book("mohamed", 5, "ziad", 20, "ahmed", 3);
let book6 = new Book("ziad", 5, "ahmed", 20, "eleraky", 3);

let box1 = new Box(10, 10, 5, "paper");
box.AddBook(book1);
box.AddBook(book2);
box.AddBook(book3);

box1.AddBook(book4);
box1.AddBook(book5);

console.log(box.Count());
console.log(box1.Count());
console.log(box + box1);

box.Delete("ziad");

console.log(box.Count());

// -------- valueOf()
// console.log(box + box1);

// -------- toString()
console.log(box.toString());

// -------- Count
// console.log("---> Count is: ", box.Count());

// Static Counter - No. of Books
// console.log("----> No. of Books that have been created: ",Book.getInstances());
