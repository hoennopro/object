let information = {
  id: 1,
  name: "hoen",
  phone: "123",
  address: "huhu",
};

console.log("Thông tin ban đầu:");
console.log(information);

delete information.address;

information.email = "hehe@gmail.com";

console.log("Thông tin sau khi chỉnh sửa:");
console.log(information);
