//#region Factory Design Pattern
// const book1 = {
//   title: "Harry Potter",
//   author: "JK Rowling",
//   isbn: "AB123",
// };
// const book2 = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   isbn: "CD456",
// };
// const book3 = {
//   title: "Moby-Dick",
//   author: "Herman Melville",
//   isbn: "EF789",
// };
// const book4 = {
//   title: "Harry Potter",
//   author: "JK Rowling",
//   isbn: "AB123",
// };
// const book5 = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   isbn: "CD456",
// };
// books = [book1, book2, book3, book4, book5];
// console.log(books);

//#endregion

// function that takes in the title, author, and isbn and returns an object with those properties
const createBookFactory = (title, author, isbn) => {
  return {
    title,
    author,
    isbn,
  };
};

// create books using the createBook function
const book1 = createBookFactory("Harry Potter", "JK Rowling", "AB123");
const book2 = createBookFactory("The Great Gatsby", "F. Scott Fitzgerald", "CD456");

const books = [book1, book2];
console.log(books);
