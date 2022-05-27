function getTotalBooksCount(books) {
  return books.length;
}
 

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = 0;
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const borrows = book.borrows;
    const borrow = borrows[0];

    if (borrow.returned === false) {
      result += 1;
    }
  }
  return result;
}

function getMostCommonGenres(books) {
  
  let result = []; // [{}, {}, {}];
  const map = {}; //{Science: 3, Fantasy: 2, History: 1}
  // 1 Count the number of books per genre
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const genre = book.genre;
    if (map[genre] === undefined) {
      map[genre] = 1;
    } else {
      map[genre] += 1;
    }
  }
  // 2 Transform the map into an array
  for (let genre in map) {
    const counter = {
      name: genre,
      count: map[genre],
    };
    result.push(counter);
  }
  // 3 Sort the result by value from most common to least common
  result.sort((a, b) => b.count - a.count);
  // 4 Return the first 5 elements of the array
  return result.slice(0, 5);
}


function getMostPopularBooks(books) {
  const result = [];
  // 1 Push the book name and borrow count into the result array
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const borrows = book.borrows;

    result.push({
      name: book.title,
      count: borrows.length,
    });
  }

  // 2 Sort the result by value from most popular to least popular
  result.sort((a, b) => b.count - a.count);

  // 4 Return the first 5 elements of the array
  return result.slice(0, 5);
  
}

function getMostPopularAuthors(books, authors) {
   const result = [];
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    let count = 0;
    for (let j = 0; j < books.length; j++) {
      const book = books[j];
      if (book.authorId === author.id) {
        count += book.borrows.length;
      }
    }
    result.push({
      name: `${author.name.first} ${author.name.last}`,
      count: count,
    });
  }

  result.sort((a, b) => b.count - a.count);

  return result.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
