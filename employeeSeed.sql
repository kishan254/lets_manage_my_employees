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
    last_name VARCHAR(30),
    role_id INT NOT NULL
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
VALUES ("Sales Rep", 90000.00, 1),
("Sales Supervisor", 120000.00, 1),
("Software Engineer", 110000.00, 3),
("Lead Accountant", 130000.00, 2),
("Operations Manager" 120000.00, 4),
("Intern", 45000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("Marco", "German", 2, 1), ("Luca", "Luca", 1, 1), ("Sam", "Sam", 3, 2), ("Kobe", "Kobe", 5, 3), ("Jack", "Jack", 5, 3), ("Leonardo", "Leonardo", 4, 4);