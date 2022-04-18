const inquirer = require('inquirer');
const mysql = require('mysql');

// Connection to the database

var Connection = mysql.createConnection({

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee_DB'

});

// Initial question that wil prompt the user what they woudld like to do.

const intiQuestion = {
    type: 'List',
    message: ' What would you like to do?',
    name: 'todo',
    choices: ['View All Employees', 'Update Employee Role', 'Add Employee', 'Remove Employee', 'View All Roles', 'Add Role', 'Remove Role', 'View All Departments', 'Add Department', 'Remove Department', 'Exit']
};

// Init finction that has swtich cases for each choice the user would like to choose from

const startDirect = () => {
    inquirer.prompt(intiQuestion).then((answers) => {
        switch (answers.todo) {
            case 'View All Employees':
                viewAllEmployees();
            break; 
            
            case 'Update Employee Role':
                updateRole();
            break; 

            case 'Add Employee':
                addEmployee();
            break; 

            case 'Remove Employee':
                removeEmployee();
            break; 

            case 'View All Roles':
                viewRoles();
            break; 

            case 'Add Role':
                addRole();
            break; 

            case 'Remove Role':
                removeRole();
            break;

            case 'View All Departments ':
                viewDepartments();
            break;  

            case 'Add Department':
                addDepartment();
            break;  

            case 'Remove Department':
                removeDep();
            break; 
            
            case 'Exit':
                console.log('Have a great day!');
                Connection.end();

        }
    })
};

// Updates employees role

const updateRole = () => {
    // Query to provide the user with the names of all employees to choose from, take the id as the value
    
}