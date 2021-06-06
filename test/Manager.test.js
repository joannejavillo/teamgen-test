const { TestScheduler } = require("jest");
const Manager = require('../lib/Manager');

test("creates a Manager object", () => {
    const manager = new Manager("Tony", "1", "ironman@email.com", "12345");

    expect(manager.name).toEqual("Tony");
    expect(manager.id).toEqual("1");
    expect(manager.email).toEqual("ironman@email.com");
    expect(manager.officeNumber).toEqual("12345");
});

test("gets manager office number", () => {
  const manager = new Manager("Tony", "1", "ironman@email.com", "12345");

    expect(manager.getOfficeNumber()).toEqual("12345");
  
});

test("gets manager role", () => {
   const manager = new Manager("Tony", "1", "ironman@email.com", "12345");

    expect(manager.getRole()).toEqual("Manager");
});

