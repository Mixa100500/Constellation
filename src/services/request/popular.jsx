import { option } from "./options.jsx"
import { URLs } from "./URL"
const param = 'language=en-US'
const lastUrl = 'trending/all/day'


// export const getPopular = async () => {
//   const url = `${URLs.themoviedbBaseURL}/${lastUrl}?${param}`
  
//   const response = await axios.get(url, option)
//   return response.data.results
// }

export const getPopular = async () => {
  const url = `${URLs.themoviedbBaseURL}/${lastUrl}?${param}`
  
  try {
    const response = await fetch(url, option)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
