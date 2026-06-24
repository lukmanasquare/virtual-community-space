const API_URL = 'http://localhost:3001/api'

export const getAllEvents = async () => {
  const response = await fetch(`${API_URL}/events`)
  return await response.json()
}

export const getEventsByLocation = async (locationId) => {
  const response = await fetch(`${API_URL}/locations/${locationId}/events`)
  return await response.json()
}
