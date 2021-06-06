const Employee = require('../lib/Employee');

//Test when initializing a new employee
describe("Initialization", () => {
    it("should create an object with an employee with name, id, email ", () => {
        const employee = new Employee("Tony", "1", "ironman@email.com");

        //Verify that the new object has the correct properties
        expect(employee.name).toEqual("Tony");
        expect(employee.id).toEqual("1");
        expect(employee.email).toEqual("ironman@email.com");

    });
});

test("gets employee name", () => {
    const employee = new Employee ("Tony", "1", "ironman@email.com");

    expect(employee.getName()).toEqual("Tony");
});

test("gets employee id", () => {
    const employee = new Employee ("Tony", "1", "ironman@email.com");

    expect(employee.getId()).toEqual("1");

});

test("gets employee email", () => {
    const employee = new Employee ("Tony", "1", "ironman@email.com");

    expect(employee.getEmail()).toEqual("ironman@email.com");
});

test("gets employee role", () => {
    const employee = new Employee ("Tony", "1", "ironman@email.com");

    expect(employee.getRole()).toEqual("Employee");
});
