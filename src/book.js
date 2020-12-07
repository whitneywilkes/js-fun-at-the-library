function createTitle(bookIdea) {
  return (`The ${bookIdea}`);
};

function buildMainCharacter(name, age, pronouns) {
  ghoulCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  };
return ghoulCharacter;
};

function saveReview(bookReview, reviews) {
  if (reviews.includes(bookReview)) {
    return reviews;
  } else {
  reviews.push(bookReview);
  };
};

function calculatePageCount(createTitle) {
 return (createTitle.length * 20);
  };

function writeBook(title,mainCharacter, genre) {
  book = {
    title: title,
    mainCharacter: mainCharacter, 
    pageCount: calculatePageCount(title),
    genre: genre
  };
  return book;
};

function editBook(title) {
  return title.pageCount = title.pageCount * .75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
};