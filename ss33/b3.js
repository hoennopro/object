function Contact(name, phoneNumber, email) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.email = email;

  this.displayFullInfo = function () {
    console.log("Tên:", this.name);
    console.log("Số điện thoại:", this.phoneNumber);
    console.log("Email:", this.email);
    console.log("--------------------------");
  };
}

let phoneBook = [
  new Contact("hehe", "123", "hehe@gmail.com"),
  new Contact("haha", "987", "haha@gmail.com"),
];

console.log("Danh bạ điện thoại:");
for (let i = 0; i < phoneBook.length; i++) {
  console.log(`Liên lạc ${i + 1}:`);
  phoneBook[i].displayFullInfo();
}
