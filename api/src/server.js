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

//Route to get all branches
app.get("/api/branches", async (req, res, next) => {
  const result = await db.query("SELECT * FROM branch").catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to get all cohorts
app.get("/api/cohorts", async (req, res, next) => {
  const result = await db.query("SELECT * FROM cohorts").catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to get all instructors
app.get("/api/instructors", async (req, res, next) => {
  const result = await db.query("SELECT * FROM instructors").catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to get a cohort by cohortId
app.get("/api/cohorts/:cohortId", async (req, res, next) => {
  const { cohortId } = req.params;
  const result = await db
    .query("SELECT * FROM cohorts WHERE id = $1", [cohortId])
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to get all students in a cohort by cohortId
app.get("/api/cohorts/:cohortId/students", async (req, res, next) => {
  const { cohortId } = req.params;
  const result = await db
    .query("SELECT students.* FROM students WHERE students.cohort_id = $1", [
      cohortId,
    ])
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to get a student by studentId
app.get("/api/students/:studentId", async (req, res, next) => {
  const { studentId } = req.params;
  const result = await db
    .query("SELECT students.* FROM students WHERE students.id = $1", [
      studentId,
    ])
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to get all events
app.get("/api/events", async (req, res, next) => {
  const result = await db.query("SELECT * FROM events").catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to get all events by cohortId
app.get("/api/cohorts/:cohortId/events", async (req, res, next) => {
  const { cohortId } = req.params;
  const result = await db
    .query(
      `SELECT * FROM events WHERE student_id IN (SELECT id FROM students WHERE cohort_id = $1)`,
      [cohortId]
    )
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to get all notes
app.get("/api/notes", async (req, res, next) => {
  const result = await db.query("SELECT * FROM notes").catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to get all notes by cohortId
app.get("/api/cohorts/:cohortId/notes", async (req, res, next) => {
  const { cohortId } = req.params;
  const result = await db
    .query(
      `SELECT * FROM notes WHERE student_id IN (SELECT id FROM students WHERE cohort_id = $1)`,
      [cohortId]
    )
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to get a note by noteId
app.get("/api/notes/:noteId", async (req, res, next) => {
  const { noteId } = req.params;
  const result = await db
    .query(`SELECT notes.* FROM notes WHERE notes.id = $1`, [noteId])
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to handle user registration
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
    console.error(err);
    if (err.code === "23505") {
      res.status(409).json({ error: "Email is already registered" });
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

// Route to get all users
app.get("/api/users", async (req, res, next) => {
  const result = await db.query("SELECT * FROM users").catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//New Route for calendar events
app.get("/api/events", async (req, res) => {
  db.query(
    "SELECT CONCAT(students.firstname, ' ', students.lastname ,': ', events.title ) AS title, events.startdate, events.enddate, events.allday FROM events LEFT JOIN students ON events.student_id = students.id;",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result.rows);
    }
  );
});

//Route to add events to calendar
app.post("/api/events", async (req, res) => {
  console.log(req.body);
  const { title, startdate, enddate, allday, student_id } = req.body;
  db.query(
    "INSERT INTO events (title, startdate, enddate, allday, student_id) VALUES ($1, $2, $3, $4, $5)",
    [title, startdate, enddate, allday, student_id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result.rows);
    }
  );
});

//Route to POST appointment notes to appointments table:
app.post("/api/notes", async (req, res, next) => {
  const note = req.body.note;
  const student_id = req.body.student_id;

  const result = await db
    .query("INSERT INTO notes (note, student_id) VALUES ($1, $2) RETURNING *", [
      note,
      student_id,
    ])
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

//Route to DELETE a note by noteId:
app.delete("/api/notes/:noteId", async (req, res, next) => {
  //need to find-replace 'appointments' with 'notes' in front-end
  const { noteId } = req.params;
  const result = await db
    .query("DELETE FROM notes WHERE id = $1 RETURNING *", [noteId])
    .catch(next);
  if (result.rows.length === 0) {
    res.status(404).send("No Data To Delete");
  } else {
    res.sendStatus(200);
  }
});

//PATCH/EDIT route for a note by noteId:
app.patch("/api/notes/:noteId", async (req, res, next) => {
  const noteId = parseInt(req.params.noteId); // Convert noteId to a number
  const { note } = req.body;
  const result = await db
    .query("UPDATE notes SET note = $1 WHERE id = $2 RETURNING *", [
      note,
      noteId,
    ])
    .catch(next);
  if (result.rows.length === 0) {
    res.status(404).send("No Data To Update");
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
