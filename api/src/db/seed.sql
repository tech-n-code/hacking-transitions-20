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
    ('Jon', NULL, 'Doe2', 'JonDoe@fakeemail.com', 'Cincinnati, OH'),
    ('Phil', NULL, 'Watkins', 'PWatkins@galvanize.com', 'Dallas, Texas'),
    ('Danny', NULL, 'Andrews', 'DAndrews@galvanize.com', 'Tulsa, Oklahoma');

INSERT INTO students (firstname, middlename, lastname, age, location, base, active, phonenumber, email, dutystatus, ets_date) VALUES
    ('Sarah', 'Lynn', 'Marks', 35, 'Clarksville, KY', 'Ft. Campbell', TRUE, 2707981234, 'stoneage@aol.com', 'Outprocessed', null),
    ('Chris', 'P', 'Bacon', 80, 'Villages, FL', NULL, FALSE, 7276437382, 'Bacon&Eggs@fakemail.com', 'Outprocessed', null),
    ('Mike Ro', 'P', 'Ennis', 25, 'San Francisco, CA', 'Travis Air Force Base', TRUE, 4158299673, 'OverCompensate@fakemail.com', 'Pending', null),
    ('Jed', 'I', 'Knight', 38, 'Elkhart, IN', 'Grisson Air Reserve Base', TRUE, 9304734927, 'ForceBeWithYou@fakemail.com', 'Pending', null),
    ('Deja', NULL, 'Viau', 22, 'Austin, TX', NULL, FALSE, 5125609246, 'ItsHappeningAgain@fakemail.com', 'Pending', null),
    ('Tara', NULL, 'Dactyl', 42, 'Hinesville, GA', 'Ft. Stewart', TRUE, 9127671432, 'Triceratops@fakemail.com', 'Pending', null),
    ('Iva', 'Anita', 'Takashita', 27, 'Fort Riley, KS', 'Ft. Riley', TRUE, 7858913456, 'GottaGo@fakemail.com', 'Outprocessed', null),
    ('Steve', NULL, 'Sharts', 23, 'Clarksville, KY', 'Ft. Campbell', TRUE, 2708476524, 'fakeemail@fakeemail.com', 'Pending', null),
    ('Sam', NULL, 'Sung', 24, 'Villages, FL', NULL, FALSE, 7276437382, 'Bacon&Eggs@fakemail.com', 'Outprocessed', null),
    ('Saad', NULL, 'Man', 25, 'San Francisco, CA', 'Travis Air Force Base', TRUE, 4158299673, 'OverCompensate@fakemail.com', 'Pending', null),
    ('Batman', 'Bin', 'Suparman', 26, 'Elkhart, IN', 'Grisson Air Reserve Base', TRUE, 9304734927, 'ForceBeWithYou@fakemail.com', 'Pending', null),
    ('Kash', NULL, 'Register', 27, 'Austin, TX', NULL, FALSE, 5125609246, 'ItsHappeningAgain@fakemail.com', 'Pending', null),
    ('Jack', NULL, 'Daniels', 28,'Hinesville, GA', 'Ft. Stewart', TRUE, 9127671432, 'Triceratops@fakemail.com', 'Pending', null),
    ('Krystal', NULL, 'Ball', 29,'Fort Riley, KS', 'Ft. Riley', TRUE, 7858913456, 'GottaGo@fakemail.com', 'Outprocessed', null),
    ('Shaquille', NULL, 'Oatmeal', 35, 'Clarksville, KY', 'Ft. Campbell', TRUE, 2707981234, 'stoneage@aol.com', 'Outprocessed', null),
    ('Cranjus', NULL, 'McBasketball', 80, 'Villages, FL', NULL, FALSE, 7276437382, 'Bacon&Eggs@fakemail.com', 'Outprocessed', null),
    ('Dill', NULL, 'Funk', 25, 'San Francisco, CA', 'Travis Air Force Base', TRUE, 4158299673, 'OverCompensate@fakemail.com', 'Pending', null),
    ('Mary', 'Beth', 'BethBeth', 38, 'Elkhart, IN', 'Grisson Air Reserve Base', TRUE, 9304734927, 'ForceBeWithYou@fakemail.com', 'Pending', null),
    ('Beefy', NULL, 'McWhatnow', 22, 'Austin, TX', NULL, FALSE, 5125609246, 'ItsHappeningAgain@fakemail.com', 'Pending', null),
    ('Captain', 'Melvin', 'Seashore', 42, 'Hinesville, GA', 'Ft. Stewart', TRUE, 9127671432, 'Triceratops@fakemail.com', 'Pending', null),
    ('Dr. Shrimp', NULL, 'PuertoRico', 27, 'Fort Riley, KS', 'Ft. Riley', TRUE, 7858913456, 'GottaGo@fakemail.com', 'Outprocessed', null),
    ('Simmy', NULL, 'Kanstandyourbitz', 23, 'Clarksville, KY', 'Ft. Campbell', TRUE, 2708476524, 'fakeemail@fakeemail.com', 'Pending', null),
    ('Wandamian', NULL, 'Crucifixplate', 24, 'Villages, FL', NULL, FALSE, 7276437382, 'Bacon&Eggs@fakemail.com', 'Outprocessed', null),
    ('Denise', NULL, 'Fat', 25, 'San Francisco, CA', 'Travis Air Force Base', TRUE, 4158299673, 'OverCompensate@fakemail.com', 'Pending', null),
    ('Jury', NULL, 'Prosciutto', 26, 'Elkhart, IN', 'Grisson Air Reserve Base', TRUE, 9304734927, 'ForceBeWithYou@fakemail.com', 'Pending', null),
    ('RickyTicky', NULL, 'BobbyWobbin', 27, 'Austin, TX', NULL, FALSE, 5125609246, 'ItsHappeningAgain@fakemail.com', 'Pending', null),
    ('Dadood', NULL, 'Frumcheers', 28,'Hinesville, GA', 'Ft. Stewart', TRUE, 9127671432, 'Triceratops@fakemail.com', 'Pending', null),
    ('Avocarter', NULL, 'Phucks', 29,'Fort Riley, KS', 'Ft. Riley', TRUE, 7858913456, 'GottaGo@fakemail.com', 'Outprocessed', null),
    ('Hungary', NULL, 'Denk', 35, 'Clarksville, KY', 'Ft. Campbell', TRUE, 2707981234, 'stoneage@aol.com', 'Outprocessed', null),
    ('Count', NULL, 'Ravioli', 80, 'Villages, FL', NULL, FALSE, 7276437382, 'Bacon&Eggs@fakemail.com', 'Outprocessed', null),
    ('Dungareese', NULL, 'Weatherspoons', 25, 'San Francisco, CA', 'Travis Air Force Base', TRUE, 4158299673, 'OverCompensate@fakemail.com', 'Pending', null),
    ('Dusty', NULL, 'Shidiz', 38, 'Elkhart, IN', 'Grisson Air Reserve Base', TRUE, 9304734927, 'ForceBeWithYou@fakemail.com', 'Pending', null),
    ('Rachel', NULL, 'Dahubbahubba', 22, 'Austin, TX', NULL, FALSE, 5125609246, 'ItsHappeningAgain@fakemail.com', 'Pending', null),
    ('Moist', NULL, 'Kite', 42, 'Hinesville, GA', 'Ft. Stewart', TRUE, 9127671432, 'Triceratops@fakemail.com', 'Pending', null),
    ('Chug-Chug', 'Pickles', 'Takashita', 27, 'Fort Riley, KS', 'Ft. Riley', TRUE, 7858913456, 'GottaGo@fakemail.com', 'Outprocessed', null),
    ('Stevia', NULL, 'Flunt', 23, 'Clarksville, KY', 'Ft. Campbell', TRUE, 2708476524, 'fakeemail@fakeemail.com', 'Pending', null),
    ('Cumby', NULL, 'OBoombox', 24, 'Villages, FL', NULL, FALSE, 7276437382, 'Bacon&Eggs@fakemail.com', 'Outprocessed', null),
    ('Melba', 'Moses', 'Wolfenstein', 25, 'San Francisco, CA', 'Travis Air Force Base', TRUE, 4158299673, 'OverCompensate@fakemail.com', 'Pending', null),
    ('Church', 'Pewpewpew', 'Suparman', 26, 'Elkhart, IN', 'Grisson Air Reserve Base', TRUE, 9304734927, 'ForceBeWithYou@fakemail.com', 'Pending', null),
    ('Lumpy', NULL, 'Dumper', 27, 'Austin, TX', NULL, FALSE, 5125609246, 'ItsHappeningAgain@fakemail.com', 'Pending', null),
    ('Disfatt', NULL, 'Bidge', 28,'Hinesville, GA', 'Ft. Stewart', TRUE, 9127671432, 'Triceratops@fakemail.com', 'Pending', null),
    ('Diddy', NULL, 'Doodat', 29,'Fort Riley, KS', 'Ft. Riley', TRUE, 7858913456, 'GottaGo@fakemail.com', 'Outprocessed', null),
    ('Jabreakit', NULL, 'Jubawdit', 35, 'Clarksville, KY', 'Ft. Campbell', TRUE, 2707981234, 'stoneage@aol.com', 'Outprocessed', null),
    ('Cowabunga', NULL, 'Peppermill', 80, 'Villages, FL', NULL, FALSE, 7276437382, 'Bacon&Eggs@fakemail.com', 'Outprocessed', null),
    ('Henny', NULL, 'Cabbagehead', 25, 'San Francisco, CA', 'Travis Air Force Base', TRUE, 4158299673, 'OverCompensate@fakemail.com', 'Pending', null),
    ('Sharty', NULL, 'Waffles', 38, 'Elkhart, IN', 'Grisson Air Reserve Base', TRUE, 9304734927, 'ForceBeWithYou@fakemail.com', 'Pending', null),
    ('Nabi', NULL, 'Cankles', 22, 'Austin, TX', NULL, FALSE, 5125609246, 'ItsHappeningAgain@fakemail.com', 'Pending', null),
    ('Mark-Pat-Bill-Joe', NULL, 'Dinosaur', 42, 'Hinesville, GA', 'Ft. Stewart', TRUE, 9127671432, 'Triceratops@fakemail.com', 'Pending', null),
    ('Bull', NULL, 'Shiatsu', 27, 'Fort Riley, KS', 'Ft. Riley', TRUE, 7858913456, 'GottaGo@fakemail.com', 'Outprocessed', null),
    ('Heimlich', NULL, 'Manure', 23, 'Clarksville, KY', 'Ft. Campbell', TRUE, 2708476524, 'fakeemail@fakeemail.com', 'Pending', null),
    ('Eetwont', NULL, 'Flush', 24, 'Villages, FL', NULL, FALSE, 7276437382, 'Bacon&Eggs@fakemail.com', 'Outprocessed', null),
    ('Aunt', NULL, 'Tim', 25, 'San Francisco, CA', 'Travis Air Force Base', TRUE, 4158299673, 'OverCompensate@fakemail.com', 'Pending', null),
    ('Dawn', NULL, 'Shawty', 26, 'Elkhart, IN', 'Grisson Air Reserve Base', TRUE, 9304734927, 'ForceBeWithYou@fakemail.com', 'Pending', null),
    ('Earl', NULL, 'Turlet', 27, 'Austin, TX', NULL, FALSE, 5125609246, 'ItsHappeningAgain@fakemail.com', 'Pending', null),
    ('Corky', NULL, 'Marinara', 28,'Hinesville, GA', 'Ft. Stewart', TRUE, 9127671432, 'Triceratops@fakemail.com', 'Pending', null),
    ('Densel', NULL, 'Washingmachine', 29,'Fort Riley, KS', 'Ft. Riley', TRUE, 7858913456, 'GottaGo@fakemail.com', 'Outprocessed', null),
    ('GaryGar', NULL, 'GarGary', 26, 'Elkhart, IN', 'Grisson Air Reserve Base', TRUE, 9304734927, 'ForceBeWithYou@fakemail.com', 'Pending', null),
    ('Shart', NULL, 'Simpson', 27, 'Austin, TX', NULL, FALSE, 5125609246, 'ItsHappeningAgain@fakemail.com', 'Pending', null),
    ('Tatiana', NULL, 'Ohnoyoudidnt', 28,'Hinesville, GA', 'Ft. Stewart', TRUE, 9127671432, 'Triceratops@fakemail.com', 'Pending', null),
    ('Rustic', NULL, 'HillBilly', 29,'Fort Riley, KS', 'Ft. Riley', TRUE, 7858913456, 'GottaGo@fakemail.com', 'Outprocessed', null);

INSERT INTO cohorts (courseid, startdate, enddate, numberofstudents) VALUES
    ('MCSP-19', '01/17/2023', '05/26/2013', 15),
    ('MCSP-01', '06/01/1912', '11/18/1912', 15),
    ('MCSP-22', '05/29/2023', '10/29/2023', 15),
    ('MCSP-23', '06/10/2023', '11/23/2023', 15);

INSERT INTO student_tasks (completed) VALUES   
    (TRUE),
    (FALSE);

INSERT INTO appointments (note, student_id, appointment_date) VALUES  
    ('Resume needs some work', 1, '06/01/2023' ),
    ('Needs to find 3 companies interested in applying for', 2, '06/01/2023'),
    ('Finished going over resume', 3, '06/13/2023'),
    ('Go over practice interview in Pramp', 4, '06/07/2023'),
    ('Discusee Developer Journal', 5, '06/11/2023'),
    ('Go over Parin attributes', 6, '06/13/2023'),
    ('Answer interview questions to one low score specific Parin attribute', 7, '06/15/2023'),
    ('Fixed resume bullet points to fit STAR method', 1, '06/15/2023'),
    ('Job scan resume to fit 3 job descriptions', 2, '06/18/2023'),
    ('Review interview student had with company', 3, '06/19/2023');

insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '10-Feb-2023', '10-Feb-2023', true, 1);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '25-Apr-2023', '25-Apr-2023', true, 2);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '20-Jun-2023', '20-Jun-2023', true, 3);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '14-Jul-2023', '14-Jul-2023', true, 4);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '23-May-2023', '23-May-2023', true, 5);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '02-Jun-2023', '02-Jun-2023', true, 6);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '03-May-2023', '03-May-2023', true, 7);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '11-Oct-2023', '11-Oct-2023', true, 8);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '25-Apr-2023', '25-Apr-2023', true, 9);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '20-Jun-2023', '20-Jun-2023', true, 10);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '14-Jul-2023', '14-Jul-2023', true, 11);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '23-May-2023', '23-May-2023', true, 12);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '02-Jun-2023', '02-Jun-2023', true, 13);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '03-May-2023', '03-May-2023', true, 14);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '10-Feb-2023', '10-Feb-2023', true, 15);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '25-Apr-2023', '25-Apr-2023', true, 16);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '20-Jun-2023', '20-Jun-2023', true, 17);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '14-Jul-2023', '14-Jul-2023', true, 18);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '23-May-2023', '23-May-2023', true, 19);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '02-Jun-2023', '02-Jun-2023', true, 20);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '03-May-2023', '03-May-2023', true, 21);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '11-Oct-2023', '11-Oct-2023', true, 22);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '25-Apr-2023', '25-Apr-2023', true, 23);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '20-Jun-2023', '20-Jun-2023', true, 24);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '14-Jul-2023', '14-Jul-2023', true, 25);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '23-May-2023', '23-May-2023', true, 26);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '02-Jun-2023', '02-Jun-2023', true, 27);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '03-May-2023', '03-May-2023', true, 28);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '10-Feb-2023', '10-Feb-2023', true, 29);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '25-Apr-2023', '25-Apr-2023', true, 30);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '10-Feb-2023', '10-Feb-2023', true, 31);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '25-Apr-2023', '25-Apr-2023', true, 32);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '20-Jun-2023', '20-Jun-2023', true, 33);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '14-Jul-2023', '14-Jul-2023', true, 34);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '23-May-2023', '23-May-2023', true, 35);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '02-Jun-2023', '02-Jun-2023', true, 36);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '03-May-2023', '03-May-2023', true, 37);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '11-Oct-2023', '11-Oct-2023', true, 38);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '25-Apr-2023', '25-Apr-2023', true, 39);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '20-Jun-2023', '20-Jun-2023', true, 40);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '14-Jul-2023', '14-Jul-2023', true, 41);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '23-May-2023', '23-May-2023', true, 42);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '02-Jun-2023', '02-Jun-2023', true, 43);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '03-May-2023', '03-May-2023', true, 44);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '10-Feb-2023', '10-Feb-2023', true, 45);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '25-Apr-2023', '25-Apr-2023', true, 46);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '20-Jun-2023', '20-Jun-2023', true, 47);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '14-Jul-2023', '14-Jul-2023', true, 48);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '23-May-2023', '23-May-2023', true, 49);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '02-Jun-2023', '02-Jun-2023', true, 50);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '03-May-2023', '03-May-2023', true, 51);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '11-Oct-2023', '11-Oct-2023', true, 52);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '25-Apr-2023', '25-Apr-2023', true, 53);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '20-Jun-2023', '20-Jun-2023', true, 54);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '14-Jul-2023', '14-Jul-2023', true, 55);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '23-May-2023', '23-May-2023', true, 56);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '02-Jun-2023', '02-Jun-2023', true, 57);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '03-May-2023', '03-May-2023', true, 58);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '10-Feb-2023', '10-Feb-2023', true, 59);
insert into events (title, startdate, enddate, allday, student_id) values ('ETS_Date', '25-Apr-2023', '25-Apr-2023', true, 60);

UPDATE instructors SET cohort_id = 1 WHERE id = 1;
UPDATE instructors SET cohort_id = 2 WHERE id = 2;
UPDATE instructors SET cohort_id = 3 WHERE id = 3;
UPDATE instructors SET cohort_id = 4 WHERE id = 4;

UPDATE students SET branch_id = 1 WHERE id = 1;
UPDATE students SET branch_id = 2 WHERE id = 2;
UPDATE students SET branch_id = 3 WHERE id = 3;
UPDATE students SET branch_id = 4 WHERE id = 4;
UPDATE students SET branch_id = 1 WHERE id = 5;
UPDATE students SET branch_id = 2 WHERE id = 6;
UPDATE students SET branch_id = 3 WHERE id = 7;
UPDATE students SET branch_id = 4 WHERE id = 8;
UPDATE students SET branch_id = 1 WHERE id = 9;
UPDATE students SET branch_id = 2 WHERE id = 10;
UPDATE students SET branch_id = 3 WHERE id = 11;
UPDATE students SET branch_id = 4 WHERE id = 12;
UPDATE students SET branch_id = 1 WHERE id = 13;
UPDATE students SET branch_id = 2 WHERE id = 14;
UPDATE students SET branch_id = 3 WHERE id = 15;
UPDATE students SET branch_id = 1 WHERE id = 16;
UPDATE students SET branch_id = 2 WHERE id = 17;
UPDATE students SET branch_id = 3 WHERE id = 18;
UPDATE students SET branch_id = 4 WHERE id = 19;
UPDATE students SET branch_id = 1 WHERE id = 20;
UPDATE students SET branch_id = 2 WHERE id = 21;
UPDATE students SET branch_id = 3 WHERE id = 22;
UPDATE students SET branch_id = 4 WHERE id = 23;
UPDATE students SET branch_id = 1 WHERE id = 24;
UPDATE students SET branch_id = 2 WHERE id = 25;
UPDATE students SET branch_id = 3 WHERE id = 26;
UPDATE students SET branch_id = 4 WHERE id = 27;
UPDATE students SET branch_id = 1 WHERE id = 28;
UPDATE students SET branch_id = 2 WHERE id = 29;
UPDATE students SET branch_id = 3 WHERE id = 30;
UPDATE students SET branch_id = 1 WHERE id = 31;
UPDATE students SET branch_id = 2 WHERE id = 32;
UPDATE students SET branch_id = 3 WHERE id = 33;
UPDATE students SET branch_id = 4 WHERE id = 34;
UPDATE students SET branch_id = 1 WHERE id = 35;
UPDATE students SET branch_id = 2 WHERE id = 36;
UPDATE students SET branch_id = 3 WHERE id = 37;
UPDATE students SET branch_id = 4 WHERE id = 38;
UPDATE students SET branch_id = 1 WHERE id = 39;
UPDATE students SET branch_id = 2 WHERE id = 40;
UPDATE students SET branch_id = 3 WHERE id = 41;
UPDATE students SET branch_id = 4 WHERE id = 42;
UPDATE students SET branch_id = 1 WHERE id = 43;
UPDATE students SET branch_id = 2 WHERE id = 44;
UPDATE students SET branch_id = 3 WHERE id = 45;
UPDATE students SET branch_id = 1 WHERE id = 46;
UPDATE students SET branch_id = 2 WHERE id = 47;
UPDATE students SET branch_id = 3 WHERE id = 48;
UPDATE students SET branch_id = 4 WHERE id = 49;
UPDATE students SET branch_id = 1 WHERE id = 50;
UPDATE students SET branch_id = 2 WHERE id = 51;
UPDATE students SET branch_id = 3 WHERE id = 52;
UPDATE students SET branch_id = 4 WHERE id = 53;
UPDATE students SET branch_id = 1 WHERE id = 54;
UPDATE students SET branch_id = 2 WHERE id = 55;
UPDATE students SET branch_id = 3 WHERE id = 56;
UPDATE students SET branch_id = 4 WHERE id = 57;
UPDATE students SET branch_id = 1 WHERE id = 58;
UPDATE students SET branch_id = 2 WHERE id = 59;
UPDATE students SET branch_id = 3 WHERE id = 60;

UPDATE students SET instructor_id = 1 WHERE id = 1;
UPDATE students SET instructor_id = 1 WHERE id = 2;
UPDATE students SET instructor_id = 1 WHERE id = 3;
UPDATE students SET instructor_id = 1 WHERE id = 4;
UPDATE students SET instructor_id = 1 WHERE id = 5;
UPDATE students SET instructor_id = 1 WHERE id = 6;
UPDATE students SET instructor_id = 1 WHERE id = 7;
UPDATE students SET instructor_id = 1 WHERE id = 8;
UPDATE students SET instructor_id = 1 WHERE id = 9;
UPDATE students SET instructor_id = 1 WHERE id = 10;
UPDATE students SET instructor_id = 1 WHERE id = 11;
UPDATE students SET instructor_id = 1 WHERE id = 12;
UPDATE students SET instructor_id = 1 WHERE id = 13;
UPDATE students SET instructor_id = 1 WHERE id = 14;
UPDATE students SET instructor_id = 1 WHERE id = 15;
UPDATE students SET instructor_id = 2 WHERE id = 16;
UPDATE students SET instructor_id = 2 WHERE id = 17;
UPDATE students SET instructor_id = 2 WHERE id = 18;
UPDATE students SET instructor_id = 2 WHERE id = 19;
UPDATE students SET instructor_id = 2 WHERE id = 20;
UPDATE students SET instructor_id = 2 WHERE id = 21;
UPDATE students SET instructor_id = 2 WHERE id = 22;
UPDATE students SET instructor_id = 2 WHERE id = 23;
UPDATE students SET instructor_id = 2 WHERE id = 24;
UPDATE students SET instructor_id = 2 WHERE id = 25;
UPDATE students SET instructor_id = 2 WHERE id = 26;
UPDATE students SET instructor_id = 2 WHERE id = 27;
UPDATE students SET instructor_id = 2 WHERE id = 28;
UPDATE students SET instructor_id = 2 WHERE id = 29;
UPDATE students SET instructor_id = 2 WHERE id = 30;
UPDATE students SET instructor_id = 3 WHERE id = 31;
UPDATE students SET instructor_id = 3 WHERE id = 32;
UPDATE students SET instructor_id = 3 WHERE id = 33;
UPDATE students SET instructor_id = 3 WHERE id = 34;
UPDATE students SET instructor_id = 3 WHERE id = 35;
UPDATE students SET instructor_id = 3 WHERE id = 36;
UPDATE students SET instructor_id = 3 WHERE id = 37;
UPDATE students SET instructor_id = 3 WHERE id = 38;
UPDATE students SET instructor_id = 3 WHERE id = 39;
UPDATE students SET instructor_id = 3 WHERE id = 40;
UPDATE students SET instructor_id = 3 WHERE id = 41;
UPDATE students SET instructor_id = 3 WHERE id = 42;
UPDATE students SET instructor_id = 3 WHERE id = 43;
UPDATE students SET instructor_id = 3 WHERE id = 44;
UPDATE students SET instructor_id = 3 WHERE id = 45;
UPDATE students SET instructor_id = 4 WHERE id = 46;
UPDATE students SET instructor_id = 4 WHERE id = 47;
UPDATE students SET instructor_id = 4 WHERE id = 48;
UPDATE students SET instructor_id = 4 WHERE id = 49;
UPDATE students SET instructor_id = 4 WHERE id = 50;
UPDATE students SET instructor_id = 4 WHERE id = 51;
UPDATE students SET instructor_id = 4 WHERE id = 52;
UPDATE students SET instructor_id = 4 WHERE id = 53;
UPDATE students SET instructor_id = 4 WHERE id = 54;
UPDATE students SET instructor_id = 4 WHERE id = 55;
UPDATE students SET instructor_id = 4 WHERE id = 56;
UPDATE students SET instructor_id = 4 WHERE id = 57;
UPDATE students SET instructor_id = 4 WHERE id = 58;
UPDATE students SET instructor_id = 4 WHERE id = 59;
UPDATE students SET instructor_id = 4 WHERE id = 60;

UPDATE students SET cohort_id = 1 WHERE id = 1;
UPDATE students SET cohort_id = 1 WHERE id = 2;
UPDATE students SET cohort_id = 1 WHERE id = 3;
UPDATE students SET cohort_id = 1 WHERE id = 4;
UPDATE students SET cohort_id = 1 WHERE id = 5;
UPDATE students SET cohort_id = 1 WHERE id = 6;
UPDATE students SET cohort_id = 1 WHERE id = 7;
UPDATE students SET cohort_id = 1 WHERE id = 8;
UPDATE students SET cohort_id = 1 WHERE id = 9;
UPDATE students SET cohort_id = 1 WHERE id = 10;
UPDATE students SET cohort_id = 1 WHERE id = 11;
UPDATE students SET cohort_id = 1 WHERE id = 12;
UPDATE students SET cohort_id = 1 WHERE id = 13;
UPDATE students SET cohort_id = 1 WHERE id = 14;
UPDATE students SET cohort_id = 1 WHERE id = 15;
UPDATE students SET cohort_id = 2 WHERE id = 16;
UPDATE students SET cohort_id = 2 WHERE id = 17;
UPDATE students SET cohort_id = 2 WHERE id = 18;
UPDATE students SET cohort_id = 2 WHERE id = 19;
UPDATE students SET cohort_id = 2 WHERE id = 20;
UPDATE students SET cohort_id = 2 WHERE id = 21;
UPDATE students SET cohort_id = 2 WHERE id = 22;
UPDATE students SET cohort_id = 2 WHERE id = 23;
UPDATE students SET cohort_id = 2 WHERE id = 24;
UPDATE students SET cohort_id = 2 WHERE id = 25;
UPDATE students SET cohort_id = 2 WHERE id = 26;
UPDATE students SET cohort_id = 2 WHERE id = 27;
UPDATE students SET cohort_id = 2 WHERE id = 28;
UPDATE students SET cohort_id = 2 WHERE id = 29;
UPDATE students SET cohort_id = 2 WHERE id = 30;
UPDATE students SET cohort_id = 3 WHERE id = 31;
UPDATE students SET cohort_id = 3 WHERE id = 32;
UPDATE students SET cohort_id = 3 WHERE id = 33;
UPDATE students SET cohort_id = 3 WHERE id = 34;
UPDATE students SET cohort_id = 3 WHERE id = 35;
UPDATE students SET cohort_id = 3 WHERE id = 36;
UPDATE students SET cohort_id = 3 WHERE id = 37;
UPDATE students SET cohort_id = 3 WHERE id = 38;
UPDATE students SET cohort_id = 3 WHERE id = 39;
UPDATE students SET cohort_id = 3 WHERE id = 40;
UPDATE students SET cohort_id = 3 WHERE id = 41;
UPDATE students SET cohort_id = 3 WHERE id = 42;
UPDATE students SET cohort_id = 3 WHERE id = 43;
UPDATE students SET cohort_id = 3 WHERE id = 44;
UPDATE students SET cohort_id = 3 WHERE id = 45;
UPDATE students SET cohort_id = 4 WHERE id = 46;
UPDATE students SET cohort_id = 4 WHERE id = 47;
UPDATE students SET cohort_id = 4 WHERE id = 48;
UPDATE students SET cohort_id = 4 WHERE id = 49;
UPDATE students SET cohort_id = 4 WHERE id = 50;
UPDATE students SET cohort_id = 4 WHERE id = 51;
UPDATE students SET cohort_id = 4 WHERE id = 52;
UPDATE students SET cohort_id = 4 WHERE id = 53;
UPDATE students SET cohort_id = 4 WHERE id = 54;
UPDATE students SET cohort_id = 4 WHERE id = 55;
UPDATE students SET cohort_id = 4 WHERE id = 56;
UPDATE students SET cohort_id = 4 WHERE id = 57;
UPDATE students SET cohort_id = 4 WHERE id = 58;
UPDATE students SET cohort_id = 4 WHERE id = 59;
UPDATE students SET cohort_id = 4 WHERE id = 60;

UPDATE students SET appointments = 'Medical' WHERE id = 1;
UPDATE students SET appointments = 'Clothing' WHERE id = 2;
UPDATE students SET appointments = 'Clearing' WHERE id = 3;
UPDATE students SET appointments = 'Command survey' WHERE id = 4;
UPDATE students SET appointments = 'Outprocessing' WHERE id = 5;
UPDATE students SET appointments = 'Turn-in' WHERE id = 6;
UPDATE students SET appointments = 'Range Day' WHERE id = 7;
UPDATE students SET appointments = 'Medical' WHERE id = 8;
UPDATE students SET appointments = 'Clothing' WHERE id = 9;
UPDATE students SET appointments = 'Clearing' WHERE id = 10;
UPDATE students SET appointments = 'Command survey' WHERE id = 11;
UPDATE students SET appointments = 'Outprocessing' WHERE id = 12;
UPDATE students SET appointments = 'Turn-in' WHERE id = 13;
UPDATE students SET appointments = 'Range Day' WHERE id = 14;
UPDATE students SET appointments = 'Turn-in' WHERE id = 15;
UPDATE students SET appointments = 'Medical' WHERE id = 16;
UPDATE students SET appointments = 'Clothing' WHERE id = 17;
UPDATE students SET appointments = 'Clearing' WHERE id = 18;
UPDATE students SET appointments = 'Command survey' WHERE id = 19;
UPDATE students SET appointments = 'Outprocessing' WHERE id = 20;
UPDATE students SET appointments = 'Turn-in' WHERE id = 21;
UPDATE students SET appointments = 'Range Day' WHERE id = 22;
UPDATE students SET appointments = 'Medical' WHERE id = 23;
UPDATE students SET appointments = 'Clothing' WHERE id = 24;
UPDATE students SET appointments = 'Clearing' WHERE id = 25;
UPDATE students SET appointments = 'Command survey' WHERE id = 26;
UPDATE students SET appointments = 'Outprocessing' WHERE id = 27;
UPDATE students SET appointments = 'Turn-in' WHERE id = 28;
UPDATE students SET appointments = 'Range Day' WHERE id = 29;
UPDATE students SET appointments = 'Turn-in' WHERE id = 30;
UPDATE students SET appointments = 'Medical' WHERE id = 31;
UPDATE students SET appointments = 'Clothing' WHERE id = 32;
UPDATE students SET appointments = 'Clearing' WHERE id = 33;
UPDATE students SET appointments = 'Command survey' WHERE id = 34;
UPDATE students SET appointments = 'Outprocessing' WHERE id = 35;
UPDATE students SET appointments = 'Turn-in' WHERE id = 36;
UPDATE students SET appointments = 'Range Day' WHERE id = 37;
UPDATE students SET appointments = 'Medical' WHERE id = 38;
UPDATE students SET appointments = 'Clothing' WHERE id = 39;
UPDATE students SET appointments = 'Clearing' WHERE id = 40;
UPDATE students SET appointments = 'Command survey' WHERE id = 41;
UPDATE students SET appointments = 'Outprocessing' WHERE id = 42;
UPDATE students SET appointments = 'Turn-in' WHERE id = 43;
UPDATE students SET appointments = 'Range Day' WHERE id = 44;
UPDATE students SET appointments = 'Turn-in' WHERE id = 45;
UPDATE students SET appointments = 'Medical' WHERE id = 46;
UPDATE students SET appointments = 'Clothing' WHERE id = 47;
UPDATE students SET appointments = 'Clearing' WHERE id = 48;
UPDATE students SET appointments = 'Command survey' WHERE id = 49;
UPDATE students SET appointments = 'Outprocessing' WHERE id = 50;
UPDATE students SET appointments = 'Turn-in' WHERE id = 51;
UPDATE students SET appointments = 'Range Day' WHERE id = 52;
UPDATE students SET appointments = 'Medical' WHERE id = 53;
UPDATE students SET appointments = 'Clothing' WHERE id = 54;
UPDATE students SET appointments = 'Clearing' WHERE id = 55;
UPDATE students SET appointments = 'Command survey' WHERE id = 56;
UPDATE students SET appointments = 'Outprocessing' WHERE id = 57;
UPDATE students SET appointments = 'Turn-in' WHERE id = 58;
UPDATE students SET appointments = 'Range Day' WHERE id = 59;
UPDATE students SET appointments = 'Turn-in' WHERE id = 60;

UPDATE students SET ets_date = 1 WHERE id = 1;
UPDATE students SET ets_date = 2 WHERE id = 2;
UPDATE students SET ets_date = 3 WHERE id = 3;
UPDATE students SET ets_date = 4 WHERE id = 4;
UPDATE students SET ets_date = 5 WHERE id = 5;
UPDATE students SET ets_date = 6 WHERE id = 6;
UPDATE students SET ets_date = 7 WHERE id = 7;
UPDATE students SET ets_date = 8 WHERE id = 8;
UPDATE students SET ets_date = 9 WHERE id = 9;
UPDATE students SET ets_date = 10 WHERE id = 10;
UPDATE students SET ets_date = 11 WHERE id = 11;
UPDATE students SET ets_date = 12 WHERE id = 12;
UPDATE students SET ets_date = 13 WHERE id = 13;
UPDATE students SET ets_date = 14 WHERE id = 14;
UPDATE students SET ets_date = 15 WHERE id = 15;
UPDATE students SET ets_date = 16 WHERE id = 16;
UPDATE students SET ets_date = 17 WHERE id = 17;
UPDATE students SET ets_date = 18 WHERE id = 18;
UPDATE students SET ets_date = 19 WHERE id = 19;
UPDATE students SET ets_date = 20 WHERE id = 20;
UPDATE students SET ets_date = 21 WHERE id = 21;
UPDATE students SET ets_date = 22 WHERE id = 22;
UPDATE students SET ets_date = 23 WHERE id = 23;
UPDATE students SET ets_date = 24 WHERE id = 24;
UPDATE students SET ets_date = 25 WHERE id = 25;
UPDATE students SET ets_date = 26 WHERE id = 26;
UPDATE students SET ets_date = 27 WHERE id = 27;
UPDATE students SET ets_date = 28 WHERE id = 28;
UPDATE students SET ets_date = 29 WHERE id = 29;
UPDATE students SET ets_date = 30 WHERE id = 30;
UPDATE students SET ets_date = 31 WHERE id = 31;
UPDATE students SET ets_date = 32 WHERE id = 32;
UPDATE students SET ets_date = 33 WHERE id = 33;
UPDATE students SET ets_date = 34 WHERE id = 34;
UPDATE students SET ets_date = 35 WHERE id = 35;
UPDATE students SET ets_date = 36 WHERE id = 36;
UPDATE students SET ets_date = 37 WHERE id = 37;
UPDATE students SET ets_date = 38 WHERE id = 38;
UPDATE students SET ets_date = 39 WHERE id = 39;
UPDATE students SET ets_date = 40 WHERE id = 40;
UPDATE students SET ets_date = 41 WHERE id = 41;
UPDATE students SET ets_date = 42 WHERE id = 42;
UPDATE students SET ets_date = 43 WHERE id = 43;
UPDATE students SET ets_date = 44 WHERE id = 44;
UPDATE students SET ets_date = 45 WHERE id = 45;
UPDATE students SET ets_date = 46 WHERE id = 46;
UPDATE students SET ets_date = 47 WHERE id = 47;
UPDATE students SET ets_date = 48 WHERE id = 48;
UPDATE students SET ets_date = 49 WHERE id = 49;
UPDATE students SET ets_date = 50 WHERE id = 50;
UPDATE students SET ets_date = 51 WHERE id = 51;
UPDATE students SET ets_date = 52 WHERE id = 52;
UPDATE students SET ets_date = 53 WHERE id = 53;
UPDATE students SET ets_date = 54 WHERE id = 54;
UPDATE students SET ets_date = 55 WHERE id = 55;
UPDATE students SET ets_date = 56 WHERE id = 56;
UPDATE students SET ets_date = 57 WHERE id = 57;
UPDATE students SET ets_date = 58 WHERE id = 58;
UPDATE students SET ets_date = 59 WHERE id = 59;
UPDATE students SET ets_date = 60 WHERE id = 60;

UPDATE cohorts SET instructor_id = 1 WHERE id = 1;
UPDATE cohorts SET instructor_id = 2 WHERE id = 2;
UPDATE cohorts SET instructor_id = 3 WHERE id = 3;
UPDATE cohorts SET instructor_id = 4 WHERE id = 4;

UPDATE student_tasks SET student_id = 1 WHERE id = 1;
UPDATE student_tasks SET student_id = 2 WHERE id = 2;
UPDATE student_tasks SET branch_tasks_id = 1 WHERE id = 1;
UPDATE student_tasks SET branch_tasks_id = 2 WHERE id = 2;