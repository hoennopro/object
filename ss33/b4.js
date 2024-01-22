function Book(title, author, publishedYear) {
  this.title = title;
  this.author = author;
  this.publishedYear = publishedYear;

  this.displayFullInfo = function () {
    console.log("Tiêu đề:", this.title);
    console.log("Tác giả:", this.author);
    console.log("Năm xuất bản:", this.publishedYear);
    console.log("--------------------------");
  };
}

function Library() {
  this.books = [];

  this.addBook = function (book) {
    this.books.push(book);
  };

  this.displayAllBooks = function () {
    console.log("Danh sách sách trong thư viện:");
    this.books.forEach(function (book, index) {
      console.log(`Sách ${index + 1}:`);
      book.displayFullInfo();
    });
  };
}

let library = new Library();

let book1 = new Book("Sách 1", "Tác giả 1", 2020);
let book2 = new Book("Sách 2", "Tác giả 2", 2018);

library.addBook(book1);
library.addBook(book2);

library.displayAllBooks();
