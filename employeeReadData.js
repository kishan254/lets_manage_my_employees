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
    connection.query('SELECT CONCAT (first_name, "", last_name) AS name, id AS value FROM employee', (err, employees) => {
        if (err) throw err;
    // Query to provide the user with the names of all roles to choose from, taking the id as the value
    connection.query('SELECT title AS name, id AS value FROM role', (err, roles) => {
        if (err) throw err;
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which employee would you like to change the role of?',
            name: 'id',
            choices: employees
        },
        {
            type: 'list',
            message: 'What role would you like to assign to this employee?',
            name: 'title',
            choices: roles
        }
    ]).then((answers) => {
        //Template with two Template Literals where each answer will be input, updating the role on the specific employee
        connection.query(`UPDATE emplyee SET role_id = ${answer.title} WHERE id = ${answers.id}`, (err, res) => {
            if (err) throw err;
            console.log('Role updated!');
            startDirect();
        })
    })
    })
    })
};

// Lets remove employees

const removeEmployee = () => {

    //Query to provide the user with a first name and last name of all employees to choose from, taking the id as the value
    connection.query('SELECT CONCAT (first_name, "", last_name) AS name, id AS value FROM employee', (err, employees) => {
        if (err) throw err;
    inquirer.prompt ({
        type: 'list',
        message: 'Which employee would you like to remove?',
        name: 'id',
        choices: employees
    }).then ((answer) => {
        // Delete query where the id's match.

        connection.query('DELETE FROM employee WHERE id = ?', (answer.id), (err, res) => {
            if (err) throw err;
            console.log('Employee removed successfully!');
            startDirect();
        })
    })
    })
};

// Delete a role function

const removeRole = () => {
    // Query to select name of the roles for the user's choices
    connection.query('SELECT title AS name FROM role', (err, roles) => {
        if (err) throw err;
    inquirer.prompt (
        {
            type: 'list',
            message: 'What role would you like to remove?',
            name: 'title',
            choices: roles
        }).then((answer) => {
            //Deletes from the roles where the title is equal
            connection.query('DELETE FFROM role WHERE ?', (answer), (err, res) => {
                if (err) throw err;
                console.log('Role removed successfully!');
                startDirect();
            })
        })
    })
};