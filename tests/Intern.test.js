const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

describe('Intern', () => {
    
    it('return entered role', () => {
        const intern = new Intern ('Intern')
        const employeeRole = 'Intern';
        const result = intern.getRole();

        expect(result).toEqual(employeeRole);
    });

    it('school name entered', () => {
        const intern = new Intern ('Clay', '1', 'test@email.com', 'UCLA Bootcamp');
        const school = 'UCLA Bootcamp';
        const result = intern.getSchool();

        expect(result).toEqual(school);
    })
});