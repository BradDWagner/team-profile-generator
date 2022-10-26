const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGitHub(data) {
        this.gitHub = data.gitHub
    }
    getRole(data){
        this.getName(data);
        this.getId(data);
        this.getEmail(data);
        this.getGitHub(data);
        return this;
    }

}
module.exports = Engineer;
