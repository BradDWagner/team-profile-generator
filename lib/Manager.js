const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
    }
    getOfficeNum(data){
    this.officeNum = data.officeNum
    }
    getRole(data){
        this.getName(data);
        this.getId(data);
        this.getEmail(data);
        this.getOfficeNum(data);
        return this;
    }
    
}
module.exports = Manager;