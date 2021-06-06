const Engineer = require('../lib/Engineer');

test("creates a Engineer object", () => {
    const engineer = new Engineer("Tony", "1", "ironman@email.com", "iron_man");

    expect(engineer.name).toEqual("Tony");
    expect(engineer.id).toEqual("1");
    expect(engineer.email).toEqual("ironman@email.com");
    expect(engineer.gitHub).toEqual("iron_man");
});

test("gets engineer github", () => {
  const engineer = new Engineer("Tony", "1", "ironman@email.com", "iron_man");

    expect(engineer.getGithub()).toEqual("iron_man");
  
});

test("gets engineer role", () => {
  const engineer = new Engineer("Tony", "1", "ironman@email.com", "iron_man");

    expect(engineer.getRole()).toEqual("Engineer");
});

