const apiKey = import.meta.env.VITE_TMDB_API_KEY
export const option = {
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
}
