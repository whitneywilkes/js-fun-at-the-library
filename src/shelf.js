function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  };
};

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
    return shelf.splice(i, 1);  
    };
  };
};

function listTitles(shelf) {
  var newList = [];
  for (var i = 0; i < shelf.length; i++) {
    if (newList.push(shelf[i]['title']));
  };
  return newList.join(", ");
};

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      return true;
      } else {
    if (title != shelf[i].title);
    };
  };
  return false; 
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};