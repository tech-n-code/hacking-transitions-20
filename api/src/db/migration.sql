DROP TABLE IF EXISTS instructors;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS cohorts;
DROP TABLE IF EXISTS student_tasks;
DROP TABLE IF EXISTS branch_tasks;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS branch;


CREATE TABLE instructors (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR (30) NOT NULL,
  middlename VARCHAR (30),
  lastname VARCHAR (30) NOT NULL,
  email VARCHAR (255) NOT NULL,
  location VARCHAR (50) NOT NULL, 
  cohort_id INT NOT NULL,
  FOREIGN KEY (cohort_id) REFERENCES cohorts(id) ON DELETE CASCADE
);


CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR (30) NOT NULL,
  middlename VARCHAR (30),
  lastname VARCHAR (30) NOT NULL, 
  age INT NOT NULL,
  location VARCHAR (50) NOT NULL,
  base VARCHAR (50) NOT NULL,
  active BOOLEAN NOT NULL,
  branch_id INT NOT NULL,
  instructor_id INT NOT NULL,
  cohort_id INT NOT NULL,
  FOREIGN KEY (branch_id) REFERENCES branch(id) ON DELETE CASCADE,  
  FOREIGN KEY (instructor_id) REFERENCES instructors(id) ON DELETE CASCADE,
  FOREIGN KEY (cohort_id) REFERENCES cohorts(id) ON DELETE CASCADE
);


CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY,
  courseid VARCHAR (255) NOT NULL,
  instructor_id INT NOT NULL,
  student_id INT NOT NULL,
  FOREIGN KEY (instructor_id) REFERENCES instructors(id) ON DELETE CASCADE,
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

CREATE TABLE student_tasks (
  id SERIAL PRIMARY KEY,
  completed BOOLEAN NOT NULL,
  student_id INT NOT NULL,
  branch_tasks_id INT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  FOREIGN KEY (branch_tasks_id) REFERENCES branch_tasks(id) ON DELETE CASCADE
);

CREATE TABLE branch_tasks (
  id SERIAL PRIMARY KEY,
  task_id INT NOT NULL,
  branch_id INT NOT NULL,
  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE;
  FOREIGN KEY (branch_id) REFERENCES branch(id) ON DELETE CASCADE
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE branch (
  id SERIAL PRIMARY KEY,
  name VARCHAR (50)
);
