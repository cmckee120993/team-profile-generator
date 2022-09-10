const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern =require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const fs = require('fs');
const createSite = require('./createSite');

const managers = [];
const engineers =[];
const interns =[];
const wholeTeam =[];

function createManager() {
inquirer
    .prompt([
        {type: 'input',
        name: 'name',
        message: 'What is the manager\'s name?'
        },

        {type: 'input',
        name: 'id',
        message: 'What is the manager\'s id?'
        },

        {type: 'input',
        name: 'email',
        message: 'What is the manager\'s email?'
        },

        {type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?'
        },
    ]).then(function(answers) {
        console.log(answers);
        const {id, email, name, officeNumber} = answers;
        managers.push(new Manager(id, email, name, officeNumber));
        console.log(managers);

        createTeam()
    })
};

function createIntern() {
    inquirer
         .prompt([
            {type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?'
            },

            {type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?'
            },

            {type: 'input',
            name: 'email',
            message: 'What is the interns\'s email?'
            },

            {type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?'
            },
            ]).then(function(answers) {
            console.log(answers);
            const {id, email, name, school} = answers;
            interns.push(new Intern (id, email, name, school));
            console.log(interns);

            createTeam();
            })
    };

function createEngineer() {
    inquirer
         .prompt([
            {type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?'
            },

            {type: 'input',
            name: 'id',
            message: 'What is the engineer\'s id?'
            },

            {type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email?'
            },

            {type: 'input',
            name: 'gitHub',
            message: 'What is the engineer\'s GitHub?'
            },
        ]).then(function(answers) {
            console.log(answers);
            const {id, email, name, gitHub} = answers;
            engineers.push(new Engineer(id, email, name, gitHub));
            console.log(engineers);
            
            createTeam();
        })
    };

function createTeam() {
    inquirer
        .prompt([
            {type: 'list',
            name: 'newMember',
            message: 'Which team member would you like to add?',
            choices: ['Intern', 'Engineer', 'None']
            },

        ]).then (function(answers) {
            switch(answers.newMember) {
                case 'Intern':
                    createIntern();
                break;
                case 'Engineer':
                    createEngineer();
                break;
                case 'None':
                    wholeTeam.push(managers, engineers, interns);
                    const site = createSite(wholeTeam);
                    writeToFile('index.html', site);
                 break;
            };
        });
};

function writeToFile() {
fs.writeFile(path.join(process.cwd(), '/dist', fileName), data, function(err) {
    if (err) {
      return err;
    } else {
      console.log('Your index.html has been succesfully generated.')
    };
  })
};


createManager();