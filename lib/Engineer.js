const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, email, name, gitHub) {
    super(id, email, name);
    this.gitHub = gitHub;
    this.role = "Engineer";
  }

  getGithub() {
    return this.gitHub;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
