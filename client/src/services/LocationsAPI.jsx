const API_URL = 'http://localhost:3001/api'

export const getAllLocations = async () => {
  const response = await fetch(`${API_URL}/locations`)
  const data = await response.json()
  return data
}

export const getLocationById = async (id) => {
  const response = await fetch(`${API_URL}/locations/${id}`)
  const data = await response.json()
  return data
}
