const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generator = require('./src/html-generator');
const writeFile = require('./src/writeFile')

const employees = [];

function mainPrompt(callback) {
    console.log(`
    ===================
      Employee Roster
         Generator
    ===================
    `)

    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter team magager name (Required): ',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter name: ');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter team magager email (Required): ',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter email: ');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter team magager id (Required): ',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter id: ');
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter team magager office number (Required): ',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter office number: ');
                }
            }
        },
        {
            type: 'list',
            name: 'employeeType',
            choices: ['Intern', 'Engineer', 'Finish'],
        }
    ]).then(data => {
        const { managerName, email, id, officeNum } = data;
        const manager = new Manager(managerName, email, id, officeNum);
        employees.push(manager);

        switch (data.employeeType) {
            case 'Intern': internPrompt(manager, callback)
                break;
            case 'Engineer': engineerPrompt(manager, callback)
                break;
            default: callback();
        }
    });
}

function engineerPrompt(obj, callback) {

    return inquirer.prompt([
        // user questions
        {
            type: 'input',
            name: 'engineerName',
            message: 'Enter engineer name (Required): ',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter name: ');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer email (Required): ',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter email: ');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter engineer id (Required): ',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter id: ');
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineer GitHub username (Required): ',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter github username: ');
                }
            }
        },
        {
            type: 'list',
            name: 'employeeType',
            choices: ['Intern', 'Engineer', 'Finish']
        }
    ]).then(data => {
        const { engineerName, email, id, github } = data
        const engineer = new Engineer(engineerName, email, id, github);
        employees.push(engineer);

        switch (data.employeeType) {
            case 'Intern': internPrompt(obj, callback)
                break;
            case 'Engineer': engineerPrompt(obj, callback)
                break;
            default: callback()
        }
    });
}

function internPrompt(obj, callback) {

    return inquirer.prompt([
        // user questions
        {
            type: 'input',
            name: 'internName',
            message: 'Enter intern name (Required): ',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter name : ');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter intern email (Required): ',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter email: ');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter intern id (Required): ',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter id: ');
                }
            }
        },
        {
            type: 'input',
            name: 'schoolName',
            message: 'Enter intern school name (Required): ',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter school name: ');
                }
            }
        },
        {
            type: 'list',
            name: 'employeeType',
            choices: ['Intern', 'Engineer', 'Finish']
        }
    ]).then(data => {
        const { internName, email, id, schoolName } = data;
        const intern = new Intern(internName, email, id, schoolName);
        employees.push(intern);

        switch (data.employeeType) {
            case 'Intern': internPrompt(obj, callback)
                break;
            case 'Engineer': engineerPrompt(obj, callback)
                break;
            default: callback();
        }
    });
}

mainPrompt(() => {
   writeFile(generator(employees));
});