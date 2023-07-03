DROP TABLE IF EXISTS branch CASCADE;
DROP TABLE IF EXISTS instructors CASCADE;
DROP TABLE IF EXISTS cohorts CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS notes CASCADE;
DROP TABLE IF EXISTS users;

CREATE TABLE branch (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE instructors (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR (30) NOT NULL,
  middlename VARCHAR (30),
  lastname VARCHAR (30) NOT NULL,
  email VARCHAR (255) NOT NULL,
  location TEXT NOT NULL,
  cohort_id INT
);

CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY,
  title VARCHAR (10) NOT NULL,
  startdate DATE NOT NULL,
  enddate DATE NOT NULL,
  instructor_id INT,
  CONSTRAINT fk_instructor_id FOREIGN KEY (instructor_id) REFERENCES instructors(id) ON DELETE CASCADE
);

-- //The 2 lines below were added to the seed.sql file after seeding cohorts table to circumvent fk_cohort_id constraint error.

-- ALTER TABLE instructors
-- ADD CONSTRAINT fk_cohort_id FOREIGN KEY (cohort_id) REFERENCES cohorts(id) ON DELETE CASCADE;

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR (30) NOT NULL,
  middlename VARCHAR (30),
  lastname VARCHAR (30) NOT NULL, 
  age INT NOT NULL,
  location TEXT NOT NULL,
  base TEXT,
  active BOOLEAN NOT NULL,
  phonenumber BIGINT NOT NULL,
  email TEXT NOT NULL,
  dutystatus TEXT NOT NULL,
  branch_id INT,
  instructor_id INT,
  cohort_id INT,
  CONSTRAINT fk_branch_id FOREIGN KEY (branch_id) REFERENCES branch(id) ON DELETE CASCADE,
  CONSTRAINT fk_instructor_id FOREIGN KEY (instructor_id) REFERENCES instructors(id) ON DELETE CASCADE,
  CONSTRAINT fk_cohort_id FOREIGN KEY (cohort_id) REFERENCES cohorts(id) ON DELETE CASCADE
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  startdate TIMESTAMPTZ NOT NULL,
  enddate TIMESTAMPTZ NOT NULL,
  allday BOOLEAN,
  student_id INT NOT NULL,
  note_id INT,
  CONSTRAINT fk_student_id FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  note TEXT NOT NULL,
  student_id INT NOT NULL,
  event_id INT,
  CONSTRAINT fk_student_id FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  CONSTRAINT fk_event_id FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

-- //The 2 lines below were added to the seed.sql file after seeding notes table to circumvent fk_note_id constraint error.

-- ALTER TABLE events
-- ADD CONSTRAINT fk_note_id FOREIGN KEY (note_id) REFERENCES notes(id) ON DELETE CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  firstname VARCHAR(100),
  lastname VARCHAR(100)
);