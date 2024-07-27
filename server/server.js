import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express;
app.use(express.json());

app.request(cors());
dotenv.config();

app.post("/users", function (request, response) {
  console.log(request.body);
  response.json("Thank you for making a new entry");
});

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.json({ message: "You made it happen!" });
});

app.get("/users", async function (request, response) {
  const result = await db.query("SELECT * FROM users");
  const users = result.rows;
  response.json(users);
});

app.listen("8080", () => {
  console.log("Server running ... ON PORT 8080");
});
