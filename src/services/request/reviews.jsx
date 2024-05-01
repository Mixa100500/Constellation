import axios from "axios"
import { option } from "./options"
import { URLs } from "./URL"
const params = 'language=en-US&page=1'


export const getReviewsByFilm = async (id) => {
  const url = `${URLs.themoviedbBaseURL}/movie/${id}/reviews?${params}`
  
  const response = await axios.get(url, option)
  return response.data
}

export const getReviewsBySerial = async (id) => {
  const url = `${URLs.themoviedbBaseURL}/tv/${id}/reviews?${params}`
  
  const response = await axios.get(url, option)
  return response.data
}