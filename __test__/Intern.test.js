const Intern = require('../lib/Intern');

const intern = new Intern('name','email', 6, 'school name');

test('creates intern object', () => {
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.schoolName).toEqual(expect.any(String));
});

test('gets name of school', () => {
    expect(intern.getSchool()).toEqual(intern.schoolName);
});

test('gets role of intern', () => {
    expect(intern.getRole()).toEqual('Intern');
});