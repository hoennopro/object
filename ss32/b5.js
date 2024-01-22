function Book(author, name) {
  this.author = author;
  this.name = name;
}

let books = [
  new Book("Author1", "Book1"),
  new Book("Author2", "Book2"),
  new Book("Author3", "Book3"),
];

let authorToSearch = prompt("Nhập tên tác giả:");

let foundBooks = [];

for (let i = 0; i < books.length; i++) {
  if (books[i].author.toLowerCase() === authorToSearch.toLowerCase()) {
    foundBooks.push(books[i]);
  }
}

if (foundBooks.length > 0) {
  console.log(`Thông tin sách của tác giả "${authorToSearch}":`);
  for (let i = 0; i < foundBooks.length; i++) {
    console.log("Tác giả:", foundBooks[i].author);
    console.log("Tên sách:", foundBooks[i].name);
  }
} else {
  console.log("Không tìm thấy sách của tác giả này.");
}
