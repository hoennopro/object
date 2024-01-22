// // // // function calculate(a, b) {
// // // //   console.log("truoc return");
// // // //   // console.log(a + b);
// // // //   return a + b;
// // // //   console.log("sau return");
// // // // }
// // // // let a = calculate(10, 20);
// // // // console.log(a + 10);

// // // // let b = calculate(20, 30);
// // // // if (b === 50) {
// // // //   console.log("hello");
// // // // }
// // // // calculate(10, 30);
// // // // calculate(-10, 20);

// // // function increaseBy(arr, n) {
// // //   for (let i = 0; i < arr.length; i++) {
// // //     arr[i] = arr[i] + n;
// // //   }
// // //   return arr;
// // // }

// // // function multiplyBy(arr, n) {
// // //   for (let i = 0; i < arr.length; i++) {
// // //     arr[i] = arr[i] * n;
// // //   }
// // //   return arr;
// // // }

// // // function map(arr, fn) {
// // //   for (let i = 0; i < arr.length; i++) {
// // //     arr[i] = fn(arr[i]); // tra ve 1 gia tri tuong ung voi tung phan tu co trong mang da duoc apply 1 cong thuc nao do
// // //   }
// // //   return arr;
// // // }

// // // map([1, 2, 3, 4], function () {});

// // // // console.log(increaseBy([1, 2, 3, 4], 20));

// // // // console.log(multiplyBy([1, 2, 3, 4], 2));

// // // // console.log(multiplyBy([1, 2, 3, 4], 3));

// // let person = {
// //   // key: value\
// //   // properties (thuoc tinh)
// //   name: "Gia thieu",
// //   age: 19,
// //   school: "PTIT",
// //   curly: "nhu phoc",

// //   // methods (phuong thuc)
// //   eat: function () {
// //     console.log("an nhom nhoam");
// //   },
// //   flirt: function () {
// //     console.log("hello");
// //   },
// //   nhinThayHuyen: function () {
// //     console.log("mat sang");
// //   },
// // };

// // // siuuuuu
// // let friend = {
// //   name: "khanh duong",
// //   age: 19,
// //   school: "ptit",
// //   hair: "curly",
// // };
// // let friend2 = {
// //   name: "tan",
// //   age: 19,
// //   school: "ptit",
// // };

// // let student1 = {
// //   name: "duong",
// //   age: 18,
// //   grade: "good",
// // };

// // constructor function
// // function Student(name, age, grade) {
// //   this.name = name;
// //   this.age = age;
// //   this.grade = grade;
// //   this.introduce = function () {
// //     console.log(`Hello, my name is ${this.name}`);
// //   };
// // }

// // let student1 = new Student("duong", 18, "good");
// // let student2 = new Student("hung", 19, "bad");
// // let student3 = new Student("hoen", 20, "average");

// // console.log("student 1", student1);
// // console.log("student 2", student2);
// // console.log("student 3", student3);

// // student1.introduce();
// // student2.introduce();
// // student3.introduce();

// // class Student {
// //   constructor(name, age, grade) {
// //     this.name = name;
// //     this.age = age;
// //     this.grade = grade;
// //   }
// //   introduce() {
// //     console.log(`hello my name is ${this.name}. im ${this.age} years old`);
// //   }
// // }

// // let student1 = new Student("duong", 18, "good");
// // console.log(student1);
// // let student2 = new Student("hung", 19, "bad");
// // console.log(student2);
// // let student3 = new Student("hoen", 20, "average");
// // console.log(student3);

// // student1.introduce();
// // student2.introduce();
// // student3.introduce();

// let person = {
//   // key: value\
//   // properties (thuoc tinh)
//   name: "Gia thieu",
//   age: 19,
//   school: "PTIT",
//   curly: "nhu phoc",

//   // methods (phuong thuc)
//   eat: function () {
//     console.log("an nhom nhoam");
//   },
//   flirt: function () {
//     console.log("hello");
//   },
//   nhinThayHuyen: function () {
//     console.log("mat sang");
//   },
// };
// console.log("doi tuong person", person);

// person.height = 1.93;
// person.weight = "90kg";

// console.log("doi tuong person sau khi duoc them height va weight", person);

// // READ

// console.log(`xin chao ${person.name}`);
// console.log(`toc cua ${person.name} xoan ${person.curly}`);

// // READ ALL

// for (let key in person) {
//   console.log(key, person[key]);
// }

// // UPDATE
// person.name = "Gia thieu dz";
// console.log(person);

// // DELETE
// delete person.curly;
// console.log(person);

// const student = [
//     {
//         id:1,
//         name: "huyen",
//     },
//     {
//         id:2,
//         name:"trang"
//     }
// ]

// class Student {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
// }

// const students = [
//   new Student(1, "huyen"),
//   new Student(2, "trang"),
//   new Student(3, "ngoc"),
// ];

// console.log("danh sach sv", students);

// // C-R-U-D objecct array
// // READ ONE
// console.log("id:", students[0].id);
// console.log("name:", students[0].name);
// // READ ALL
// for (let i = 0; i < students.length; i++) {
//   console.log(`Student tai vi tri ${i}`);
//   console.log(`id:`, students[i].id);
//   console.log(`name:`, students[i].name);
// }

// // CREATE

// let newStudent = new Student("", "");
// newStudent.id = +prompt("moi ban nhap vao id cho student moi");
// newStudent.name = prompt("moi ban nhap vao ten cho student moi");

// students.splice(1, 0, newStudent);
// // students.unshift(newStudent);
// // students.push(newStudent);

// console.log(newStudent);

// U - Update
// console.log(students);

// // Update student tai vi tri index = 0
// // students[0].name = "neyuh";
// students[0].name = prompt("moi ban nhap vao ten moi cho student 0");

// console.log(students);

// // D - Delete

// students.shift();

// console.log(students);

// doi tuong long doi tuong

// nested object

let person = {
  // key: value
  // properties (thuoc tinh)
  name: "Gia thieu",
  age: 19,
  school: "PTIT",
  curly: "nhu phoc",

  // methods (phuong thuc)
  eat: function () {
    console.log("an nhom nhoam");
  },
  flirt: function () {
    console.log("hello");
  },
  nhinThayHuyen: function () {
    console.log("mat sang");
  },
  address: {
    number: 20,
    street: "tran phu",
    ward: "van quan",
    district: "ha dong",
    city: "ha noi",
    zipcode: 100000,
  },
};

console.log(person.address.zipcode);
