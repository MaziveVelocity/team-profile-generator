const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, email, id, schoolName){
        super(name, email, id);
        this.schoolName = schoolName;
    }

    getSchool(){
        return this.schoolName;
    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;