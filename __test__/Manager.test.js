const Manager = require('../lib/Manager');

const manager = new Manager('name', 'email', 6, 7);

test('creates manager object', () => {
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.officeNum).toEqual(expect.any(Number));
});

test('gets managers office number', () => {
    expect(manager.getOfficeNum()).toEqual(manager.officeNum);
});

test('gets role of manager', () => {
    expect(manager.getRole()).toEqual('Manager');
});