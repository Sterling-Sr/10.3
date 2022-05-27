function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) {
      return author;
    }
  }
}

function findBookById(books, id) {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookId = book.id;

    if (bookId === id) {
      return book;
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let result = [[], []];
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const borrows = book.borrows;
    const borrow = borrows[0];

    if (borrow.returned === false) {
      result[0].push(book);
    } else {
      result[1].push(book);
    }
  }
  return result;
}

   
function getBorrowersForBook(book, accounts) {
  let result = [];
  for (let i = 0; i < book.borrows.length; i++) {
    const borrow = book.borrows[i];
    const account = accounts.find((account) => {
      return account.id === borrow.id;
    });
    if (account) {
      account.returned = borrow.returned;
      result.push(account);
    }

    // If we ever reach to ten accounts, we can exit the function
    if (result.length === 10) {
      return result;
    }
  }

  return result;
}




/*{
  let result = [];
  for (let i = 0; i < accounts.length; i++) {
    
      const account = accounts[i];
      const accountId = account.id;

      const borrows = book.borrows;
      for (let j = 0; j < borrows.length; j++) {
        const borrow = borrows[i];
          const borrowId = borrow.id;
          const isReturned = borrow.returned;
        
             
        if (borrowId === accountId) {
          account.borrow = isReturned;
          result.push(account);
        
    }if (result.length === 10) {
      return result;
    }
  }

  return result;
    
}
}*/
  /*while (i >= 9) {
         

       
      
    }
  }

  return result;*/


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
