const Engineer = require('../lib/Engineer');

const engineer = new Engineer('name', 'email', 7, 'github');

test('creates new engineer object', () => {
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
});

test('gets engineers github username', () => {
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets role of engineer', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});