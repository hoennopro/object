let person = {
  name: "John Doe",
  age: 30,
  address: "123 Main St",
};

console.log("Thông tin ban đầu:");
console.log("Tên:", person.name);
console.log("Tuổi:", person.age);
console.log("Địa chỉ:", person.address);

person.dateOfBirth = "1990-01-01";

delete person.age;

console.log("\nThông tin sau khi thêm và xóa thuộc tính:");
console.log("Tên:", person.name);
console.log("Ngày sinh:", person.dateOfBirth);
console.log("Địa chỉ:", person.address);
