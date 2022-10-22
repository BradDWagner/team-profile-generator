//create employee superClass

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(data){
    this.name = data.name
    }
    getId(data){
    this.id = data.id
    }
    getEmail(data){
    this.email = data.email
    }
    getRole(data){
        return 'Employee'
    }
}
module.exports = Employee;
//name
//id
//email
//getName()
//getId()
//getEmail()
//getRole() --returns 'Employee'
