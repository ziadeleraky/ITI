const BookModel = require("../Models/book.model");
const AuthorModel = require("../Models/author.model");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema, GraphQLNonNull } = require("graphql");

const BookType = new GraphQLObjectType({
  name: "BookType",
  description: "Book",
  fields: () => ({
    name: { type: GraphQLString },
    author: { type: GraphQLString },
    numOfPages: { type: GraphQLInt },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "AuthorType",
  description: "Author",
  fields: () => ({
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: { type: new GraphQLList(GraphQLString) },
  }),
});

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "Get All Requests",
  fields: () => ({
    Books: {
      type: new GraphQLList(BookType),
      description: "Get All Books",
      resolve: () => {
        return BookModel.find({});
      },
    },
    Authors: {
      type: new GraphQLList(AuthorType),
      description: "Get All Users",
      resolve: () => {
        return AuthorModel.find({});
      },
    },
  }),
});

const mutateQuery = new GraphQLObjectType({
  name: "MutationQuery",
  description: "Mutate your DB",
  fields: () => ({
    AddBook: {
      type: BookType,
      description: "Add new book",
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) },
        numOfPages: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        return BookModel.create({ name: args.name, author: args.author, numOfPages: args.numOfPages });
      },
    },
    UpdateBook: {
      type: BookType,
      description: "Update an existing book by ID",
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        author: { type: GraphQLString },
        numOfPages: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        return BookModel.findByIdAndUpdate(args.id, { name: args.name, author: args.author, numOfPages: args.numOfPages });
      },
    },
    DeleteBook: {
      type: BookType,
      description: "Delete a book",
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        return BookModel.findByIdAndRemove(args.id);
      },
    },
    AddAuthor: {
      type: AuthorType,
      description: "Add new author",
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        books: { type: new GraphQLList(GraphQLString) },
      },
      resolve: (parent, args) => {
        return AuthorModel.create({ name: args.name, age: args.age, books: args.books });
      },
    },
    UpdateAuthor: {
      type: AuthorType,
      description: "Update an existing author",
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: { type: new GraphQLList(GraphQLString) },
      },
      resolve: (parent, args) => {
        return AuthorModel.findByIdAndUpdate(args.id, { name: args.name, age: args.age, books: args.books });
      },
    },
    DeleteAuthor: {
      type: AuthorType,
      description: "Delete an author",
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        return AuthorModel.findByIdAndRemove(args.id);
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: mutateQuery,
});

module.exports = schema;
