import express from 'express'
import { getEvents, getEventsByLocation } from '../controllers/events.js'

const router = express.Router()

router.get('/events', getEvents)
router.get('/locations/:locationId/events', getEventsByLocation)

export default router
