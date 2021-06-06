const Intern = require('../lib/Intern');

test("creates a Intern object", () => {
    const intern = new Intern("Tony", "1", "ironman@email.com", "UNISA");

    expect(intern.name).toEqual("Tony");
    expect(intern.id).toEqual("1");
    expect(intern.email).toEqual("ironman@email.com");
    expect(intern.school).toEqual("UNISA");
});

test("gets intern school", () => {
   const intern = new Intern("Tony", "1", "ironman@email.com", "UNISA");

    expect(intern.getSchool()).toEqual("UNISA");
  
});

test("gets intern role", () => {
    const intern = new Intern("Tony", "1", "ironman@email.com", "UNISA");

    expect(intern.getRole()).toEqual("Intern");
});

