const Employee = require('../lib/Employee');

describe('Employee', () => {
    const employee = new Employee ('1','test@email.com', 'Clay');
    it('return entered name', () => {
        const name = 'Clay';
        const result = employee.getName();

        expect(result).toEqual(name);
    })
    it('return entered id number', () => {
        const employeeID = '1';
        const result = employee.getID();

        expect(result).toEqual(employeeID);
    });
    it('return entered email', () => {
        const employeeEmail = 'test@email.com';
        const result = employee.getEmail();

        expect(result).toEqual(employeeEmail);
    });

    it('return entered role', () => {
        const employee = new Employee ('Employee');
        const employeeRole = 'Employee'
        const result = employee.getRole();

        expect(result).toEqual(employeeRole);
    })
});