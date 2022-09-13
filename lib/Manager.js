const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, email, name, officeNumber) {
    super(id, email, name);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;
