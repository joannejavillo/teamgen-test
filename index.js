const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your ID',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Select your role',
        name: 'name',
        choices: ["Manager", "Engineer", "Intern"]
    },
]

const managerQuestion = [
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'office',
    },
]

const engineerQuestion = [
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
]

const internQuestion = [
    {
        type: 'input',
        message: 'Enter your school name',
        name: 'school',
    },
]

const confirm = [
    {
        type: 'confirm',
        message: 'Do you want to add more employee?',
        name: 'input',
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("html file has been created")
    })
}

async function init() {
    const employees = []
    let add = true;
    console.log("in init");
    while (add) {
        const { name, id, email, role } = await inquirer.prompt(questions);
        console.log("in add");
        if (role === "Manager") {
            const { office } = await inquirer.prompt(managerQuestion);
            console.log("in manager");

            employees.push(new Manager(name, id, email, office));
        }

        else if (role === "Engineer") {
            const { github } = await inquirer.prompt(engineerQuestion);
            employees.push(new Engineer(name, id, email, github));
        }

        else if (role === "Intern") {
            const { school } = await inquirer.prompt(internQuestion);
            employees.push(new Intern(name, id, email, school));
        }

        const { input } = await inquirer.prompt(confirm);

        if (input === false) {
            add = false;

            console.log("add false");

            let html = generateMarkdown(employees);

            return writeToFile("index.html", html);
        }
    }
}

function generateMarkdown(employees) {
    html = `
    <!DOCTYPE html>
    <html lang="en-us">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <title>Hello</title>
      </head>
      <body>
      <div class="container">
      <div class="row">
          <div class="col-md-6" style="background-color:purple;padding-top: My 5%; margin-bottom: 10%;">
              <h1 style="text-align: center;">Our Team</h1>
          </div>
      </div>
      <div class="row">
      `;

    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        let role = employee.getRole();

        if (role === "Manager") {
            html += generateManager(employee);
        } else if (role === "Engineer") {
            html += generateEngineer(employee);
        } else {
            html = + generateIntern(employee);
        }
    }

    html = + `</div>
    </div>
    </body>
    </html>`

    return html;
}

function generateManager(employee) {
    return `<div class ="col-md-4">
    <div class="card" style="width: 18rem; padding-top: 2%;">
    <div class="card-body">
        <h5 class="card-title">${employee.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${employee.name}</li>
        <li class="list-group-item">${employee.id}</li>
        <li class="list-group-item">${employee.email}</li>
        <li class="list-group-item">${employee.officeNumber}</li>
    </ul>
</div>
</div>`
}

function generateEngineer(employee) {
    return `<div class ="col-md-4">
    <div class="card" style="width: 18rem; padding-top: 2%;">
    <div class="card-body">
        <h5 class="card-title">${employee.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${employee.name}</li>
        <li class="list-group-item">${employee.id}</li>
        <li class="list-group-item">${employee.email}</li>
        <li class="list-group-item">${employee.github}</li>
    </ul>
</div>
</div>`
}

function generateIntern(employee) {
    return `<div class ="col-md-4">
    <div class="card" style="width: 18rem; padding-top: 2%;">
    <div class="card-body">
        <h5 class="card-title">${employee.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${employee.name}</li>
        <li class="list-group-item">${employee.id}</li>
        <li class="list-group-item">${employee.email}</li>
        <li class="list-group-item">${employee.school}</li>
    </ul>
</div>
</div>`
}


init();