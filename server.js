const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const db = require(".");

const connection = mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password:"Milkmaid13579",
    database:"employee_db"
});

connection.connect((err) => {
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

const addDepartment = () => {
    
    inquirer.prompt({
        type: "input",
        message: "What is the name of your department?",
        name: "deptName"
    }).then((answer) => {

        connection.query("INSERT INTO department (name) VALUES (?)"), [answer.deptName], ((err, res) => {

            if (err) throw err;
            console.table(res)
            homePage()
        })
    })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Whats the role?",
            name: "roleName"
        },
        {
            type: "input",
            message: "What is the salary?",
            name: "salarySum"
        },
        {
            type: "input",
            message: "What is the ID #?",
            name: "departmentId"
        }
    ]).then((answer) => {
        
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [answer.roleName, answer.salarySum, answer.departmentId], ((err, res) => {
            if (err) throw err;
            console.table(res);
            homePage();
        }))
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employees first name?",
            name: "firstName"
        },
        {
            type: "input",
            message: "What is the employees last name?",
            name: "lastName"
        },
        {
            type: "input",
            message: "What is the role id?",
            name: "roleId"
        },
        {
            type: "input",
            message: "What is the managers id?",
            name: "managerId"
        }
    ]).then((answer) => {
        
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?)", [answer.firstName, answer.lastName, answer.roleId, answer.managerId], ((err, res) => {
            if (err) throw err;
            console.table(res);
            homePage();
        }))
    })
}

const updateEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What employee is being updated?",
            name: "employeeUpdate"
        },
        {
            type: "input",
            message: "Where is the employee being updated to?",
            name: "roleUpdate"
        }
      
    ]).then((answer) => {
        
        connection.query("UPDATE employee SET role_id=? WHERE first_name=?", [answer.employeeUpdate, answer.roleUpdate], ((err, res) => {
            if (err) throw err;
            console.table(res);
            homePage();
        }))
    })
}


