const apiKey = process.env.REACT_APP_TMDB_API_KEY
export const option = {
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
}
