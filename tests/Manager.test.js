const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

describe('Manager', () => {
    
    it('return entered role', () => {
        const manager = new Manager('Manager');
        const employeeRole = 'Manager';
        const result = manager.getRole();

        expect(result).toEqual(employeeRole);
    });

    it('office number entered', () => {
        const manager = new Manager('Clay', '1', 'test@email.com', '3');
        const officeNumber = '3';
        const result = manager.getOfficeNumber();

        expect(result).toEqual(officeNumber)
    })
});