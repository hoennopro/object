class Information {
  constructor(id, name, phone, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
  }
}

let information = new Information("", "", "", "");
information.id = +prompt("nhap id");
information.name = prompt("nhap ten");
information.phone = +prompt("nhap sdt");
information.address = prompt("nhap dia chi");
console.log(information);
