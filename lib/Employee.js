const inquirer = require("inquirer");

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id =id;
        this.email = email;
    }
    getName(name) {
        this.name = name;
    }
    getId(id) {
        this.id = id;
    }
    getEmail(email) {
        this.email = email;
    }
    getRole(Employee) {
        return Employee;
    }
}

module.exports = Employee;