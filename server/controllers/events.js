import { pool } from '../config/database.js'

export const getEvents = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT events.*, locations.name AS location_name
      FROM events
      JOIN locations ON events.location_id = locations.id
      ORDER BY events.date
    `)
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getEventsByLocation = async (req, res) => {
  try {
    const { locationId } = req.params
    const result = await pool.query(
      'SELECT * FROM events WHERE location_id = $1 ORDER BY date',
      [locationId],
    )
    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
