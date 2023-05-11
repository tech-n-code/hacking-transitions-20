import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const userPool = new pg.Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'db',
  password: 'your-password',
  port: 5432,
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/cohorts", async (req, res, next) => {
  const result = await db.query("SELECT cohorts.*, instructors.lastname AS instructor_id FROM cohorts INNER JOIN instructors ON cohorts.instructor_id = instructors.id").catch(next);
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
  const result = await db
    .query("SELECT * FROM branch")
    .catch(next);

  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

app.get("/api/cohorts/:cohortId/students", async (req, res, next) => {
  const cohortId = req.params.cohortId;
  const result = await db
    .query(`SELECT students.* FROM students WHERE students.cohort_id = $1`, [cohortId])
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

app.get("/api/cohorts/:cohortId/students/:studentId", async (req, res, next) => {
  const cohortId = req.params.cohortId;
  const studentId = req.params.studentId;
  const result = await db
    .query(`SELECT students.* FROM students WHERE students.cohort_id = $1 AND students.id = $2`, [cohortId, studentId])
    .catch(next);
  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows);
  }
});

// Route to get all tasks
app.get("/api/appointments", async (req, res, next) =>{
  // const tasks = req.params.tasks
  const result = await db
    .query(`SELECT * FROM appointments`)
    .catch(next)
  if(result.rows.length === 0){
    res.sendStatus(404);
  } else{
    res.send(result.rows)
  }
})

// Route to handle user registration
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // hashes the password with bcrypt and add 10 extra bits "salt"

    await userPool.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hashedPassword]);
    // JSON Web tokens, yay
    const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '2h' });
    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Registration failed" });
  }
});



// Route to handle user login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await userPool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (!user) {
    return res.status(400).json({ error: "Invalide email or password" });
    }
    // Compare password to the hashed store
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ error: "Invalide email or password" });
    }
    // Create JWT
    const token = jwt.sign({ email: user.email }, 'your-secret-key', { expiresIn: '2h' });

    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Login failed" });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
// Serve the static assets AFTER the routes
app.use(express.static("../client/src/dist"))

export default app;
