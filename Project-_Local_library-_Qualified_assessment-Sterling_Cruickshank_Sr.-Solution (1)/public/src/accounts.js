function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    if (account.id === id) {
      return account;
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort(function (a, b) {
    const nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  const id = account.id;
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const borrows = book.borrows;

    for (let j = 0; j < borrows.length; j++) {
      const borrowedId = borrows[j].id;

      if (borrowedId === id) {
        counter++;
      }
    }
  }

  return counter;
  
}

function getBooksPossessedByAccount(account, books, authors) {
   const booksPossessed = [];
  const id = account.id;

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const borrows = book.borrows;

    for (let j = 0; j < borrows.length; j++) {
      const borrow = borrows[j];
      const borrowedId = borrow.id;
      const isReturned = borrow.returned;

      if (borrowedId === id && isReturned === false) {
        const author = authors.find((author) => author.id === book.authorId);
        book.author = author;
        booksPossessed.push(book);
      }
    }
  }

  return booksPossessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
