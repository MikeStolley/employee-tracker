INSERT INTO department (name)
VALUES ("Management"), ("E&I"), ("Quality"), ("Production"), ("R&D");

INSERT INTO role (title, salary, department_id)
VALUE ("Management Lead", 120000, 1), ("Electrical Tech", 80000, 2), ("Quality Tech", 60000, 3), ("Line Worker", 45000, 4), ("Scientist", 100000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("John", "Rambo", 1, 1), ("Mark", "Zuck", 2, 3), ("This", "Guy", 5, 2), ("Harry", "Styles", 5, 2), ("Not", "ThatGuy", 1, 3);