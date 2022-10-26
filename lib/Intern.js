const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(data) {
        this.school = data.school
    }
    getRole(data){
        this.getName(data);
        this.getId(data);
        this.getEmail(data);
        this.getSchool(data);
        return this;
    }
    
}
module.exports = Intern;
