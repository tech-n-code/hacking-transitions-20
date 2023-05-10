import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: {rejectUnauthorized: false} });

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/cohorts", async (req, res, next) => {
  const result = await db.query("SELECT * FROM cohorts").catch(next);
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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
// Serve the static assets AFTER the routes
app.use(express.static("../client/src/dist"))

export default app;
