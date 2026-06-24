import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getLocationById } from '../services/LocationsAPI'
import { getEventsByLocation } from '../services/EventsAPI'

function LocationDetails() {
  const { id } = useParams()
  const [location, setLocation] = useState(null)
  const [events, setEvents] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const locationData = await getLocationById(id)
      const eventData = await getEventsByLocation(id)

      setLocation(locationData)
      setEvents(eventData)
    }

    loadData()
  }, [id])

  if (!location) return <p>Loading...</p>

  return (
    <div className="details-page">
      <Link to="/" className="back-link">
        ← Back to Locations
      </Link>

      <div className="details-header">
        <h1>{location.name}</h1>
        <p>{location.description}</p>
      </div>

      <h2>Events at this location</h2>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p className="event-date">
              {new Date(event.date).toLocaleString()}
            </p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LocationDetails
