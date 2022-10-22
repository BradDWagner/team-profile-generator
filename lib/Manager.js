const Employee = require('./Employee')
const inquirer = require('inquirer');
//create manager subclass
// officeNumber

// getRole()—overridden to return 'Manager'
class Manager extends Employee {
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
    }
    getOfficeNum(data){
    this.officeNum = data.officeNum
    }
    getRole(){
        return 'Manager'
    }
}
module.exports = Manager;