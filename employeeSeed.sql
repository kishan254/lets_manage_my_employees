DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    dep_name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);


CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name  VARCHAR(30),
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL,
    PRIMARY KEY (id)
);


INSERT INTO department (dep_name) 
VALUES ("Sales"), 
("Finance"), 
("Engineering"),
("Maintenance");

INSERT INTO role (title, salary, department_id) 
VALUES ("Sales Rep", 90500.00, 1), 
("Sales Supervisor", 120000.00, 1), 
("Software Engineer", 115000.00, 3), 
("Lead Accountant", 140000.00, 2),
("Custodian", 70000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Snow", 2, 1), ("Holly", "Smith", 1, 1), ("William", "Broboski", 3, 2), ("Alex", "Hall", 5, 3), ("Margie", "Holland", 4, 4);