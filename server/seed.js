import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

db.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        firstName TEXT,
        lastName TEXT,
        title TEXT,
        country TEXT
    );
      
    INSERT INTO users (firstName, lastName, title, country) VALUES
    ('Kleine', 'Gothard', 'Dr', 'Germany'),
    ('Peter', 'Sierant', 'Mr', 'USA'),
    ('Donald', 'Chen', 'Mr', 'Singapore'),
    ('Bhaskar', 'Sayyaparaju', 'Mr', 'UK'),
    ('Carla', 'Ruiz', 'Mrs', Philippines`);
