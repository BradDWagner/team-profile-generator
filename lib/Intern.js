const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(data) {
        this.school = data.school
    }

}
module.exports = Intern;
//create intern subclass
// school

// getSchool()

// getRole()—overridden to return 'Intern'