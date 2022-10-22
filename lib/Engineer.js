const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGitHub(data) {
        this.gitHub = data.gitHub
    }

}
module.exports = Engineer;
//create engineer subclass
// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'