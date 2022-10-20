const inquirer = require("inquirer");
const fs = require("fs");

// This function is for adding a new employee
function newEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employees name?",
      },
      {
        type: "checkbox",
        message: "What languages do you know?",
        name: "stack",
        choices: ["HTML", "CSS", "JavaScript", "MySQL"],
      },
      {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "contact",
        choices: ["email", "phone", "telekinesis"],
      },
    ])
    .then((data) => {
      const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

      fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    });
}

function opener() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "openerQuestion",
        choices: [
          "Update Employee Row",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Departments",
          "Quit",
          "View All Employees",
        ],
      },
    ])
    .then((data) => {
      console.table(data);

      // const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

      // fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      //   err ? console.log(err) : console.log("Success!")
      // );
    });
}

opener();
