let students = [];

let numberOfStudents = parseInt(prompt("Nhập số lượng sinh viên:"));

if (isNaN(numberOfStudents) || numberOfStudents <= 0) {
  console.log("Số lượng sinh viên không hợp lệ.");
} else {
  for (let i = 0; i < numberOfStudents; i++) {
    let studentId = prompt(`Nhập ID của sinh viên thứ ${i + 1}:`);
    let studentName = prompt(`Nhập tên của sinh viên thứ ${i + 1}:`);

    let student = {
      id: studentId,
      name: studentName,
    };
    students.push(student);
  }

  console.log("\nDanh sách sinh viên:");
  console.log(students);
}
