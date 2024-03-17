import axios from "axios"
import { option } from "./options"
const baseUrl = 'https://api.themoviedb.org/3'
const params = 'language=en-US&page=1'


export const getReviewsByFilm = async (id) => {
  const url = `${baseUrl}/movie/${id}/reviews?${params}`
  
  const resposne = await axios.get(url, option)
  return resposne.data
}

export const getReviewsBySerial = async (id) => {
  const url = `${baseUrl}/tv/${id}/reviews?${params}`
  
  const resposne = await axios.get(url, option)
  return resposne.data
}