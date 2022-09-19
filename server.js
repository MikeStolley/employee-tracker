const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const { resourceLimits } = require("worker_threads");
const db = require(".");

const connection = mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password:"Milkmaid13579",
    database:"employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    homePage();
});

const homePage = () => {
    inquirer.prompt({
        type: "list",
        choices: [
            "Add department",
            "Add role",
            "Add employee",
            "View departments",
            "View roles",
            "View employees",
            "Update employee role",
            "Quit"
        ],
        message: "Select from the above options",
        name: "option"
    })
    .then((result) => {
        console.log("You entered: " + result+option);

        switch (result.option) {
            case "Add department":
                addDepartment();
                break;
            case "Add role":
                addRole();
                break;
            case "Add employee":
                addEmployee();
                break;
            case "View departments":
                viewDepartment();
                break;          
            case "View roles":
                viewRoles();
                break;
            case "View employees":
                viewEmployees();
                break;
            case "Update employee role":
                updateEmployee();
                break;
                default:
                    quit();
        }
    });
}