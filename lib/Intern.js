const Employee = require('./Employee');

class Intern extends Employee {
constructor(id, email, name, school) {
    super(id, email, name);
    this.school = school;
    this.role = 'Intern';
};

getSchool() {
    return this.school;
};

getRole() {
    return this.role;
};
};

module.exports = Intern;