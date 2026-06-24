import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllLocations } from '../services/LocationsAPI'

function Home() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const loadLocations = async () => {
      const data = await getAllLocations()
      setLocations(data)
    }

    loadLocations()
  }, [])

  return (
    <div className="home-page">
      <h1>Campus Community Events</h1>
      <p>Choose a location to explore upcoming events.</p>

      <div className="location-grid">
        {locations.map((location) => (
          <Link
            to={`/locations/${location.id}`}
            className="location-card"
            key={location.id}
          >
            <img src={location.image} alt={location.name} />
            <div className="location-info">
              <h2>{location.name}</h2>
              <p>{location.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
