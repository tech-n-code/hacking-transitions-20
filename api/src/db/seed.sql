-- INSERT INTO tasks(description) VALUES('Do the dishes');
-- INSERT INTO tasks(description) VALUES('Walk the dog');
-- INSERT INTO tasks(description) VALUES('Sweep the floor');
-- INSERT INTO tasks(description) VALUES('Do your homework');
-- INSERT INTO tasks(description) VALUES('Beat Elden Ring');

-- DROP TABLE IF EXISTS instructors;
-- DROP TABLE IF EXISTS students;
-- DROP TABLE IF EXISTS cohorts;
-- DROP TABLE IF EXISTS student_tasks;
-- DROP TABLE IF EXISTS branch_tasks;
-- DROP TABLE IF EXISTS tasks;
-- DROP TABLE IF EXISTS branch;

INSERT INTO instructors('firstname', 'middlename', 'lastname', 'email', 'location', 'cohort_id') VALUES
    ('Jane', 'Dunno', 'Doe', 'JaneDoe@fakemail.com', 1),
    ('Jon', 'Doe')