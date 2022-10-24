const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');

const { generateHtml } = require('./src/generateHTML')

const team = []

function createManager(){
    const manager = new Manager();
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the team manager's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the team manager's id?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the team manager's email?`
        },
        {
            type: 'input',
            name: 'officeNum',
            message: `What is the team manager's office number?`
        },
        {
            type: 'list',
            name: 'continue',
            message: 'Which type of team member would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                "I don't want to add any more team members"
            ]
        }
    ])
    .then(data => {
        team.push(manager.getRole(data));
        addTeamMember(data);
    })

}
function createIntern(){
    const intern = new Intern();
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your intern's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your intern's id?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your intern's email?`
        },
        {
            type: 'input',
            name: 'school',
            message: `What is your intern's school?`
        },
        {
            type: 'list',
            name: 'continue',
            message: 'Which type of team member would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                "I don't want to add any more team members"
            ]
        }
    ])
    .then(data => {
        team.push(intern.getRole(data));
        addTeamMember(data);
    })
}
function createEngineer(){
    const engineer = new Engineer();
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your engineer's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your engineer's id?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your engineer's email?`
        },
        {
            type: 'input',
            name: 'gitHub',
            message: `What is your engineer's GitHub username?`
        },
        {
            type: 'list',
            name: 'continue',
            message: 'Which type of team member would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                "I don't want to add any more team members"
            ]
        }
    ])
    .then(data => {

        team.push(engineer.getRole(data));
        addTeamMember(data);
    })
}

function addTeamMember(data){
    if (data.continue == 'Engineer'){
        createEngineer();
    } else if (data.continue == 'Intern'){
        createIntern();
    } else {
        generateHtml(team)
    }
}

function init(){
    console.log("Welcome to the team generator! \n Please build your team-")
    createManager();
}
init();

