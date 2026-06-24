import dotenv from 'dotenv'
dotenv.config()

import { pool } from './database.js'

const resetDatabase = async () => {
  try {
    await pool.query(`DROP TABLE IF EXISTS events`)
    await pool.query(`DROP TABLE IF EXISTS locations`)

    await pool.query(`
      CREATE TABLE locations (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        image TEXT,
        description TEXT
      )
    `)

    await pool.query(`
      CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        date TIMESTAMP NOT NULL,
        description TEXT,
        location_id INTEGER REFERENCES locations(id)
      )
    `)

    await pool.query(`
      INSERT INTO locations (name, image, description)
      VALUES
      ('Library', 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da', 'Quiet study and learning events'),
      ('Student Center', 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b', 'Social and student life events'),
      ('Gym', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48', 'Fitness and wellness activities'),
      ('Auditorium', 'https://images.unsplash.com/photo-1505236858219-8359eb29e329', 'Performances and large gatherings')
    `)

    await pool.query(`
      INSERT INTO events (title, date, description, location_id)
      VALUES
      ('Resume Workshop', '2026-07-05 14:00:00', 'Learn how to improve your resume.', 1),
      ('Game Night', '2026-07-08 18:00:00', 'Meet students and play board games.', 2),
      ('Morning Yoga', '2026-07-10 09:00:00', 'Beginner-friendly wellness session.', 3),
      ('Open Mic Night', '2026-07-15 19:00:00', 'Students perform music, poetry, and comedy.', 4),
      ('Study Skills Session', '2026-07-20 13:00:00', 'Tips for studying effectively.', 1)
    `)

    console.log('Database reset successfully')
  } catch (error) {
    console.error(error)
  } finally {
    pool.end()
  }
}

resetDatabase()
