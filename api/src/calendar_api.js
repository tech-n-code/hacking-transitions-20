import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
// const dotenv = require("dotenv");
// const cors = require("cors");
// const pg = require("pg");
// const express = require("express");
// dotenv.config();
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const port = 3010;

const app = express();

db.connect();

app.use(express.json());
app.use(cors());

app.get("/api/calendar", async (req, res) => {
  db.query(
    "SELECT firstname, lastname, ets_date FROM students",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result.rows);
    }
  );
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
