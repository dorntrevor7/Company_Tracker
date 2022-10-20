const inquirer = require("inquirer");
const fs = require("fs");
const { allowedNodeEnvironmentFlags } = require("process");

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
          "Add Employee",
        ],
      },
    ])
    .then((data) => {
      console.table(data.openerQuestion);
      switch (data.openerQuestion) {
        case "Update Employee Row":
          break;
        case "View All Roles":
          console.log("function viewAllRoles");
          break;
        case "Add Role":
          addRole();
          break;
        case "View All Departments":
          console.log("function viewAllDepartments");
          break;
        case "Add Departments":
          addDepartments();
          break;
        case "View All Employees":
          console.log("function viewAllEmployee");
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Quit":
          console.log("Applications Been Collected");
          break;
      }
    });
}

opener();

function addDepartments() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the department name?",
        name: "departmentName",
      },
      {
        type: "input",
        message: "What's the department Id?",
        name: "departmentId",
      },
    ])
    .then((data) => {
      console.log(data.departmentName, data.departmentId);
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the employee's first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What's the employee's last name?",
        name: "lastName",
      },
      {
        type: "list",
        message: "What's the employee's role?",
        name: "employeeRole",
        choices: [
          "Accountant",
          "Lawyer",
          "Customer Service",
          "Sales Lead",
          "Sales Person",
          "Lead Engineer",
        ],
      },
    ])
    .then((data) => {
      console.table(data);
      switch (data.employeeRole) {
        case "Accountant":
          console.log("function accountant");
          break;
        case "Lawyer":
          console.log("function lawyer");
          break;
        case "Customer Service":
          console.log("function customerService");
          break;
        case "Sales Lead":
          console.log("function salesLead");
          break;
        case "Sales Person":
          console.log("function salesPerson");
          break;
        case "Lead Engineer":
          console.log("function engineer");
          break;
      }
    });
}
