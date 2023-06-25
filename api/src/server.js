import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/cohorts", async (req, res, next) => {
  const result = await db
    .query(
      "SELECT cohorts.*, instructors.lastname AS instructor_id FROM cohorts INNER JOIN instructors ON cohorts.instructor_id = instructors.id"
    )
    .catch(next);
  res.send(result.rows);
});

app.get("/api/cohorts/:id", async (req, res, next) => {
  const result = await db
    .query("SELECT * FROM cohorts WHERE id = $1", [req.params.id])
    .catch(next);

  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

app.get("/api/branches", async (req, res, next) => {
  const result = await db.query("SELECT * FROM branch").catch(next);

  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

app.get("/api/cohorts/:cohortId/students", async (req, res, next) => {
  const cohortId = req.params.cohortId;
  const result = await db
    .query(`SELECT students.* FROM students WHERE students.cohort_id = $1`, [
      cohortId,
    ])
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

app.get("/api/students/:studentId", async (req, res, next) => {
  const studentId = req.params.studentId;
  const result = await db
    .query(`SELECT students.* FROM students WHERE students.id = $1`, [
      studentId,
    ])
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

// Route to get all events
app.get("/api/events", async (req, res, next) => {
  // const events = req.params.events
  const result = await db.query(`SELECT * FROM events`).catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

// Route to get note by id
app.get("/api/notes/:noteId", async (req, res, next) => {
  const noteId = req.params.noteId;
  const result = await db
    .query(`SELECT notes.* FROM notes WHERE notes.id = $1`, [
      noteId,
    ])
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

// Route to get all notes
app.get("/api/notes", async (req, res, next) => {
  // const events = req.params.events
  const result = await db.query(`SELECT * FROM notes`).catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

// Route to handle user registration
app.post("/api/register", async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // hashes the password with bcrypt and add 10 extra bits "salt"
    console.log(req.body);

    console.log("Attempting to insert:", email, hashedPassword);
    const result = await db.query(
      "INSERT INTO users (email, password, firstname, lastname) VALUES ($1, $2, $3, $4)",
      [email, hashedPassword, firstName, lastName]
    );
    console.log("Query result:", result);
    // JSON Web tokens, yay
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    if (err.code === "23505") {
      res.status(409).json({ error: "Email is already registeredd" });
    } else {
      res.status(500).json({ error: "Registration failed" });
    }
  }
});

// Route to handle user login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const user = result.rows[0];
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    // console.log(user);
    // Compare password to the hashed store
    const validPassword = await bcrypt.compare(password, user.password);
    // console.log(password, user.password)

    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    // Create JWT
    const token = jwt.sign(
      { email: user.email, firstname: user.firstname, lastname: user.lastname },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    // Exclude the password and other sensitive info
    const { password: _, ...safeUserData } = user;

    res.status(200).json({ token, user: safeUserData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Login failed" });
  }
});

// Simple route to check users
app.get("/api/users", async (req, res, next) => {
  const result = await db.query("SELECT * FROM users").catch(next);
  res.send(result.rows);
});


//New Route for calendar events
app.get("/api/events", async (req, res) => { //needs to be reworked to get individual fields instead of concat
  db.query(
    "SELECT CONCAT(students.firstname, ' ', students.lastname ,': ', events.title ) AS title, events.startdate, events.enddate, events.allday FROM events LEFT JOIN students ON events.student_id = students.id",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result.rows);
    }
  );
});

//Route to POST notes:
app.post("/api/notes", async (req, res, next) => { //need to find-replace 'appointments' with 'notes' in front-end
  const note = req.body.note;
  const student_id = req.body.student_id;

  const result = await db
    .query(
      "INSERT INTO notes (note, student_id) VALUES ($1, $2) RETURNING *",
      [note, student_id]
    )
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to DELETE notes:
app.delete("/api/notes/:id", async (req, res, next) => { //need to find-replace 'appointments' with 'notes' in front-end
  const id = req.params.id;
  const result = await db
    .query("DELETE FROM notes WHERE id = $1 RETURNING *", [
      id,
    ])
    .catch(next);
  if (result.rows.length === 0) {
    res.status(404).send("No Data To Delete");
  } else {
    res.sendStatus(200);
  }
});

//PATCH/EDIT route for notes:
app.patch("/api/notes/:id", async (req, res, next) => { //need to find-replace 'appointments' with 'notes' in front-end
  const id = Number.parseInt(req.params.id);
  const { note } = req.body;
  const result = await db
    .query("UPDATE notes SET note=$1 WHERE id=$2 RETURNING *", [
      note,
      id,
    ])
    .catch(next);
  if (result.rows.length === 0) {
    res.status(404).send("No Data To Delete");
  } else {
    res.sendStatus(200);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Serve the static assets AFTER the routes
app.use(express.static("../client/src/dist"));

export default app;
