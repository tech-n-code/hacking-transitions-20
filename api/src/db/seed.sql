INSERT INTO tasks (name) VALUES
    ('Clear CIF'),
    ('Signatures from S1 battallion'),
    ('Financial meeting'),
    ('Signatures from Ed center'),
    ('Finish TAP process');

INSERT INTO branch (name) VALUES
    ('Air Force'),
    ('Army'),
    ('Marines'),
    ('Navy');

INSERT INTO branch_tasks (task_id, branch_id) VALUES
    (1, 1),
    (2, 2);

INSERT INTO instructors (firstname, middlename, lastname, email, location) VALUES
    ('Jane', 'Dunno', 'Doe', 'JaneDoe@fakemail.com', 'Austin, Texas'),
    ('Jon', 'Idunno', 'Doe', 'JonDoe@fakeemail.com', 'Cincinnati, OH');

INSERT INTO students (firstname, middlename, lastname, age, location, base, active) VALUES
    ('Sarah', 'Lynn', 'Marks', 35, 'Clarksville, KY', 'Ft. Campbell, KY', TRUE),
    ('Chris', 'P', 'Bacon', 80, 'Villages, FL', NULL, FALSE);

INSERT INTO cohorts (courseid) VALUES
    ('MCSP-19'),
    ('MCSP-01');

INSERT INTO student_tasks (completed) VALUES   
    (TRUE),
    (FALSE);

UPDATE instructors SET cohort_id = 1 WHERE id = 1;
UPDATE instructors SET cohort_id = 2 WHERE id = 2;

UPDATE students SET branch_id = 1 WHERE id = 1;
UPDATE students SET branch_id = 3 WHERE id = 2;
UPDATE students SET instructor_id = 1 WHERE id = 1;
UPDATE students SET instructor_id = 2 WHERE id = 2;
UPDATE students SET cohort_id = 1 WHERE id = 1;
UPDATE students SET cohort_id = 2 WHERE id = 2;

UPDATE cohorts SET instructor_id = 1 WHERE id = 1;
UPDATE cohorts SET instructor_id = 2 WHERE id = 2;
UPDATE cohorts SET student_id = 1 WHERE id = 1;
UPDATE cohorts SET student_id = 2 WHERE id = 2;

UPDATE student_tasks SET student_id = 1 WHERE id = 1;
UPDATE student_tasks SET student_id = 2 WHERE id = 2;
UPDATE student_tasks SET branch_tasks_id = 1 WHERE id = 1;
UPDATE student_tasks SET branch_tasks_id = 2 WHERE id = 2;