function Contact(name, phoneNumber, email) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.email = email;
}

let phoneBook = [
  new Contact("huhu", "123", "huhu@gmail.com"),
  new Contact("hehe", "987", "hehe@gmail.com"),
];

console.log("Danh bạ điện thoại:");
for (let i = 0; i < phoneBook.length; i++) {
  console.log(`Liên lạc ${i + 1}:`);
  console.log("Tên:", phoneBook[i].name);
  console.log("Số điện thoại:", phoneBook[i].phoneNumber);
  console.log("Email:", phoneBook[i].email);
  console.log("--------------------------");
}
