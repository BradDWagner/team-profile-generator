const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');

const { generateHtml } = require('./src/generateHTML')

//empty array to hold the objects for each employee
const team = []

//begin promps by creating a new manager object
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
        //use the getRole() method to input collected data into the manager object and add it to the team array
        team.push(manager.getRole(data));
        //function to determine which employee to create next based on the 'continue' prompt
        addTeamMember(data);
    })

}

//if intern is selected from the 'continue' prompt, retrive data for a new intern object
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
        //use the getRole() method to input collected data into the intern object and add it to the team array
        team.push(intern.getRole(data));
        //function to determine which employee to create next based on the 'continue' prompt
        addTeamMember(data);
    })
}

//if intern is selected from the 'continue' prompt, retrive data for a new engineer object
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
        //use the getRole() method to input collected data into the intern object and add it to the team array
        team.push(engineer.getRole(data));
          //function to determine which employee to create next based on the 'continue' prompt
        addTeamMember(data);
    })
}

//using the response to the 'continue' prompt to call the creation of the corresponding employee, or create the html if the user is finished
function addTeamMember(data){
    if (data.continue == 'Engineer'){
        createEngineer();
    } else if (data.continue == 'Intern'){
        createIntern();
    } else {
        generateHtml(team)
    }
}

//function to initialize application
function init(){
    console.log("Welcome to the team generator! \n Please build your team-")
    createManager();
}
init();

