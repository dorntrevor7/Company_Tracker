DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departmentTable (
  id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE roleTable (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES departmentTable(id)
  ON DELETE SET NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employeeTable (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
  REFERENCES roleTable(id)
  ON DELETE SET NULL,
  PRIMARY KEY (id)
);
