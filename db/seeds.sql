INSERT INTO departmentTable (id, name)
VALUES (1, "Administration");

INSERT INTO roleTable (id, title, salary, department_id)
VALUES (12, "Ceo", 200000, 1);

INSERT INTO employeeTable (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Trevor", "Dorn", 12, 1);
       

-- CREATE TABLE departmentTable (
--   id INT NOT NULL,
--   name VARCHAR(30) NOT NULL,
--   PRIMARY KEY(id)
-- );

-- CREATE TABLE roleTable (
--   id INT NOT NULL AUTO_INCREMENT,
--   title VARCHAR(30) NOT NULL,
--   salary DECIMAL NOT NULL,
--   department_id INT,
--   PRIMARY KEY(id)
-- );

-- CREATE TABLE employeeTable (
--   id INT NOT NULL AUTO_INCREMENT,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   role_id INT NOT NULL,
--   manager_id INT NOT NULL,
--    PRIMARY KEY(id)
-- );