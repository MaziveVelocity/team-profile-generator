const Employee = require('../lib/Employee');

const employee = new Employee('name', 'email', 6);

test('create instance of employee', () => {

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));

    /* 
    all employees have 
    -email
    -name
    */
});

test('gets name from object', () => {
    expect(employee.getName()).toEqual(employee.name);
});

test('gets email from object', () => {
    expect(employee.getEmail()).toEqual(employee.email);
});

test('gets id from object', () => {
    expect(employee.getId()).toEqual(employee.id);
});

test('gets role from object', () => {
    expect(employee.getRole()).toEqual('Employee');
});