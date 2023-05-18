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
    ('Jane', 'Dunno', 'Doe1', 'JaneDoe@fakemail.com', 'Austin, Texas'),
    ('Jon', NULL, 'Doe2', 'JonDoe@fakeemail.com', 'Cincinnati, OH');

INSERT INTO students (firstname, middlename, lastname, age, location, base, active, phonenumber, email, dutystatus, ets_date) VALUES
    ('Sarah', 'Lynn', 'Marks', 35, 'Clarksville, KY', 'Ft. Campbell', TRUE, 2707981234, 'stoneage@aol.com', 'Outprocessed', '10-Feb-2023'),
    ('Chris', 'P', 'Bacon', 80, 'Villages, FL', NULL, FALSE, 7276437382, 'Bacon&Eggs@fakemail.com', 'Outprocessed', '25-Apr-2023'),
    ('Mike Ro', 'P', 'Ennis', 25, 'San Francisco, CA', 'Travis Air Force Base', TRUE, 4158299673, 'OverCompensate@fakemail.com', 'Pending', '20-Jun-2023'),
    ('Jed', 'I', 'Knight', 38, 'Elkhart, IN', 'Grisson Air Reserve Base', TRUE, 9304734927, 'ForceBeWithYou@fakemail.com', 'Pending', '14-Jul-2023'),
    ('Deja', NULL, 'Viau', 22, 'Austin, TX', NULL, FALSE, 5125609246, 'ItsHappeningAgain@fakemail.com', 'Pending', '23-May-2023'),
    ('Tara', NULL, 'Dactyl', 42, 'Hinesville, GA', 'Ft. Stewart', TRUE, 9127671432, 'Triceratops@fakemail.com', 'Pending', '02-Jun-2023'),
    ('Iva', 'Anita', 'Takashita', 27, 'Fort Riley, KS', 'Ft. Riley', TRUE, 7858913456, 'GottaGo@fakemail.com', 'Outprocessed', '03-May-2023'),
    ('Steve', NULL, 'Sharts', 23, 'Clarksville, KY', 'Ft. Campbell', TRUE, 2708476524, 'fakeemail@fakeemail.com', 'Pending', '11-Oct-2023'),
    ('Sam', NULL, 'Sung', 24, 'Villages, FL', NULL, FALSE, 7276437382, 'Bacon&Eggs@fakemail.com', 'Outprocessed', '25-Apr-2023'),
    ('Saad', NULL, 'Man', 25, 'San Francisco, CA', 'Travis Air Force Base', TRUE, 4158299673, 'OverCompensate@fakemail.com', 'Pending', '20-Jun-2023'),
    ('Batman', 'Bin', 'Suparman', 26, 'Elkhart, IN', 'Grisson Air Reserve Base', TRUE, 9304734927, 'ForceBeWithYou@fakemail.com', 'Pending', '14-Jul-2023'),
    ('Kash', NULL, 'Register', 27, 'Austin, TX', NULL, FALSE, 5125609246, 'ItsHappeningAgain@fakemail.com', 'Pending', '23-May-2023'),
    ('Jack', NULL, 'Daniels', 28,'Hinesville, GA', 'Ft. Stewart', TRUE, 9127671432, 'Triceratops@fakemail.com', 'Pending', '02-Jun-2023'),
    ('Krystal', NULL, 'Ball', 29,'Fort Riley, KS', 'Ft. Riley', TRUE, 7858913456, 'GottaGo@fakemail.com', 'Outprocessed', '03-May-2023');

INSERT INTO cohorts (courseid, startdate, enddate, numberofstudents) VALUES
    ('MCSP-19', '01/17/2023', '05/26/2013', 24),
    ('MCSP-01', '06/01/1912', '11/18/1912', 15);

INSERT INTO student_tasks (completed) VALUES   
    (TRUE),
    (FALSE);

INSERT INTO appointments (note, student_id) VALUES  
    ('Resume needs some work', 1),
    ('Needs to find 3 companies interested in applying for', 2),
    ('Finished going over resume', 3),
    ('Go over practice interview in Pramp', 4),
    ('Discusee Developer Journal', 5),
    ('Go over Parin attributes', 6),
    ('Answer interview questions to one low score specific Parin attribute', 7),
    ('Fixed resume bullet points to fit STAR method', 1),
    ('Job scan resume to fit 3 job descriptions', 2),
    ('Review interview student had with company', 3);

UPDATE instructors SET cohort_id = 1 WHERE id = 1;
UPDATE instructors SET cohort_id = 2 WHERE id = 2;

UPDATE students SET branch_id = 1 WHERE id = 1;
UPDATE students SET branch_id = 3 WHERE id = 2;
UPDATE students SET branch_id = 2 WHERE id = 3;
UPDATE students SET branch_id = 3 WHERE id = 4;
UPDATE students SET branch_id = 4 WHERE id = 5;
UPDATE students SET branch_id = 1 WHERE id = 6;
UPDATE students SET branch_id = 2 WHERE id = 7;
UPDATE students SET branch_id = 4 WHERE id = 8;
UPDATE students SET branch_id = 3 WHERE id = 9;
UPDATE students SET branch_id = 1 WHERE id = 10;
UPDATE students SET branch_id = 1 WHERE id = 11;
UPDATE students SET branch_id = 3 WHERE id = 12;
UPDATE students SET branch_id = 4 WHERE id = 13;
UPDATE students SET branch_id = 4 WHERE id = 14;

UPDATE students SET instructor_id = 1 WHERE id = 1;
UPDATE students SET instructor_id = 2 WHERE id = 2;
UPDATE students SET instructor_id = 1 WHERE id = 3;
UPDATE students SET instructor_id = 2 WHERE id = 4;
UPDATE students SET instructor_id = 1 WHERE id = 5;
UPDATE students SET instructor_id = 2 WHERE id = 6;
UPDATE students SET instructor_id = 1 WHERE id = 7;
UPDATE students SET instructor_id = 2 WHERE id = 8;
UPDATE students SET instructor_id = 1 WHERE id = 9;
UPDATE students SET instructor_id = 2 WHERE id = 10;
UPDATE students SET instructor_id = 1 WHERE id = 11;
UPDATE students SET instructor_id = 2 WHERE id = 12;
UPDATE students SET instructor_id = 1 WHERE id = 13;
UPDATE students SET instructor_id = 2 WHERE id = 14;

UPDATE students SET cohort_id = 1 WHERE id = 1;
UPDATE students SET cohort_id = 2 WHERE id = 2;
UPDATE students SET cohort_id = 1 WHERE id = 3;
UPDATE students SET cohort_id = 2 WHERE id = 4;
UPDATE students SET cohort_id = 1 WHERE id = 5;
UPDATE students SET cohort_id = 2 WHERE id = 6;
UPDATE students SET cohort_id = 1 WHERE id = 7;
UPDATE students SET cohort_id = 2 WHERE id = 8;
UPDATE students SET cohort_id = 1 WHERE id = 9;
UPDATE students SET cohort_id = 2 WHERE id = 10;
UPDATE students SET cohort_id = 1 WHERE id = 11;
UPDATE students SET cohort_id = 2 WHERE id = 12;
UPDATE students SET cohort_id = 1 WHERE id = 13;
UPDATE students SET cohort_id = 2 WHERE id = 14;

UPDATE students SET appointments = 'Medical' WHERE id = 1;
UPDATE students SET appointments = 'Clothing' WHERE id = 2;
UPDATE students SET appointments = 'Clearing' WHERE id = 3;
UPDATE students SET appointments = 'Command survey' WHERE id = 4;
UPDATE students SET appointments = 'Outprocessing' WHERE id = 5;
UPDATE students SET appointments = 'Turn-in' WHERE id = 6;
UPDATE students SET appointments = 'Range Day, bitch, @ me' WHERE id = 7;
UPDATE students SET appointments = 'Medical' WHERE id = 8;
UPDATE students SET appointments = 'Clothing' WHERE id = 9;
UPDATE students SET appointments = 'Clearing' WHERE id = 10;
UPDATE students SET appointments = 'Command survey' WHERE id = 11;
UPDATE students SET appointments = 'Outprocessing' WHERE id = 12;
UPDATE students SET appointments = 'Turn-in' WHERE id = 13;
UPDATE students SET appointments = 'Range Day, bitch, @ me' WHERE id = 14;

UPDATE cohorts SET instructor_id = 1 WHERE id = 1;
UPDATE cohorts SET instructor_id = 2 WHERE id = 2;

UPDATE student_tasks SET student_id = 1 WHERE id = 1;
UPDATE student_tasks SET student_id = 2 WHERE id = 2;
UPDATE student_tasks SET branch_tasks_id = 1 WHERE id = 1;
UPDATE student_tasks SET branch_tasks_id = 2 WHERE id = 2;