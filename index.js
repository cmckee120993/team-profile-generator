const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern =require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const fs = require('fs');
const createSite = require('./createSite');

const teamArray =[];
const engineers =[];
const interns =[];

class Prompt {
    constructor() {
        this.teamArray = [];
    };
    getTeamArray() {
        return this.teamArray;
    };
    createManager() {
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
                const newManager = new Manager(answers.id, answers.email, answers.name, answers.officeNumber);
                teamArray.push(newManager);
                createTeam();
            });
            
        };
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
            const newIntern = new Intern(answers.id, answers.email, answers.name, answers.school);
            const {id, email, name, school} = answers;
            interns.push(newIntern);
            

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
            const newEngineer = new Engineer(answers.id, answers.email, answers.name, answers.gitHub);
            engineers.push(newEngineer);
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
                    teamArray.push(engineers, interns);
                    console.log(teamArray);
                    const site = createSite(teamArray);
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

const prompt = new Prompt();

prompt.createManager();