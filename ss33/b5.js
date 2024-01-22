function Book(title, author, publishedYear) {
  this.title = title;
  this.author = author;
  this.publishedYear = publishedYear;
  this.isAvailable = true;

  this.displayFullInfo = function () {
    console.log("Tiêu đề:", this.title);
    console.log("Tác giả:", this.author);
    console.log("Năm xuất bản:", this.publishedYear);
    console.log("Trạng thái:", this.isAvailable ? "Có sẵn" : "Đã mượn");
    console.log("--------------------------");
  };

  this.borrow = function () {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`Cuốn sách "${this.title}" đã được mượn.`);
    } else {
      console.log(`Cuốn sách "${this.title}" đã được mượn trước đó.`);
    }
  };

  this.returnBook = function () {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`Cuốn sách "${this.title}" đã được trả.`);
    } else {
      console.log(`Cuốn sách "${this.title}" đã có sẵn, không cần trả.`);
    }
  };
}

function Library() {
  this.books = [];

  this.addBook = function (book) {
    this.books.push(book);
  };

  this.isBookAvailable = function (bookTitle) {
    let book = this.books.find((book) => book.title === bookTitle);
    return book ? book.isAvailable : false;
  };
}

let library = new Library();

let book1 = new Book("Sách 1", "Tác giả 1", 2020);
let book2 = new Book("Sách 2", "Tác giả 2", 2018);

library.addBook(book1);
library.addBook(book2);

console.log("Trạng thái sách trong thư viện:");
console.log(
  `"${book1.title}" có sẵn để mượn: ${library.isBookAvailable(book1.title)}`
);
console.log(
  `"${book2.title}" có sẵn để mượn: ${library.isBookAvailable(book2.title)}`
);

book1.borrow();
book2.borrow();
book2.returnBook();

console.log("\nDanh sách đầy đủ thông tin của tất cả sách trong thư viện:");
library.books.forEach((book) => book.displayFullInfo());
