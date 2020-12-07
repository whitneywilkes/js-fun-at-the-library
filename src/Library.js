const book = require("./book");

function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
  };
  
function addBook(library, book) {
library.shelves[book.genre].push(book);
};

function checkoutBook(library, book, genre) {
  library.shelves[genre].splice(0,1)
    return `You have now checked out ${book} from the ${library.name}`
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};