const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generator = require('./src/html-generator');

function mainPrompt() {
    console.log(`
    ===================
      Employee Roster
         Generator
    ===================
    `)

    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter team magager name: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter team magager email: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter team magager id: '
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter team magager office number: '
        },
        {
            type: 'list',
            name: 'employeeType',
            choices: ['Intern','Engineer','Finish']            
        }
    ]).then(data => {
        const {managerName, email, id, officeNum} = data;
        const manager = new Manager(managerName, email, id, officeNum);
        switch(data.employeeType){
            case 'Intern': internPrompt(manager)
                break;
            case 'Engineer': engineerPrompt(manager)
                break;
            default: return manager;
        }
    });
}

function engineerPrompt(obj){

    if(!obj.employees){
        obj.employees = [];
    }

    console.log(obj)
    inquirer.prompt([
        // user questions
        {
            type: 'input',
            name: 'engineerName',
            message: 'Enter engineer name: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer email: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter engineer id: '
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineer GitHub username: '
        },
        {
            type: 'list',
            name: 'employeeType',
            choices: ['Intern','Engineer','Finish']            
        }
    ]).then().then(data => {
        const {engineerName, email, id, github} = data
        const engineer = new Engineer(engineerName, email, id, github);
        obj.employees.push(engineer);

        switch(data.employeeType){
            case 'Intern': internPrompt(obj)
                break;
            case 'Engineer': engineerPrompt(obj)
                break;
            default: return data;
        }
    });
}

function internPrompt(obj){

    if(!obj.employees){
        obj.employees = [];
    }
    console.log(obj)
    inquirer.prompt([
        // user questions
        {
            type: 'input',
            name: 'internName',
            message: 'Enter intern name: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter intern email: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter intern id: '
        },
        {
            type: 'input',
            name: 'schoolName',
            message: 'Enter intern school name: '
        },
        {
            type: 'list',
            name: 'employeeType',
            choices: ['Intern','Engineer','Finish']            
        }
    ]).then().then(data => {
        const {internName, email, id, schoolName} = data;
        const intern = new Intern(internName, email, id, schoolName);
        obj.employees.push(intern);

        switch(data.employeeType){
            case 'Intern': internPrompt(obj)
                break;
            case 'Engineer': engineerPrompt(obj)
                break;
            default: return data;
        }
    });
}

mainPrompt()
.then(data => {
    generate(data);
}).then();