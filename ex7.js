const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }
];


// Item A
function getBookTitle(bookId) {
  const book = books.find(b => b.id === bookId);
  return book ? book.title : null;
}

console.log (getBookTitle()) //null cause the book cannot be found
console.log (getBookTitle(3)) //1984


// Item B

function getOldBooksWrittenBefore1950() {
    return books.filter(book =>
        book.year<1950
    );
}

console.log(getOldBooksWrittenBefore1950());

//Item C

function addGenre() {
  return books.map(book => ({...book, genre: 'classic' }));
}

console.log(addGenre())

//Item D

function getTitles(authorInitial) {
  return books
    .filter(book => book.author.startsWith(authorInitial))
    .map(book => book.title);
}

console.log(getTitles('F')); // ['The Great Gatsby'] (F. Scott Fitzgerald)

console.log(getTitles('H')); // ['To Kill a Mockingbird'] (Harper Lee)

// Item E

function latestBook() {
  const latestbook = books;

  // First, find the latest year using forEach
  books.forEach(book => {
    if (book.year > latestYear) {
      latestYear = book.year;
    }
  });

  // Then, use find to get the first book with that year
  return books.find(book => book.year === latestYear);
}

console.log(latestBook());