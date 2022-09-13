const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

describe('Engineer', () => {
    it('return entered role', () => {
        const engineer = new Engineer ('Engineer ')
        const employeeRole = 'Engineer';
        const result = engineer.getRole();

        expect(result).toEqual(employeeRole);
    });

    it(' return entered github url', () => {
        const engineer = new Engineer ('Clay', '1', 'test@email.com', 'github.com/engineer');
        const github = 'github.com/engineer';
        const result = engineer.getGithub();

        expect(result).toEqual(github);
    })
});