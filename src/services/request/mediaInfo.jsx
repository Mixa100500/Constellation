// import axios from "axios"
import { option } from "./options"
import { URLs } from "./URL"
const paramExternalIds = 'external_ids'
const paramLanguage = 'language=en-US'


export const getMovieInfo = async (id) => {
  const url = `${URLs.themoviedbBaseURL}/movie/${id}?${paramLanguage}`
  
  const response = await axios.get(url, option)
  return response.data
}

export const getSerialInfo = async (id) => {
  const url = `${URLs.themoviedbBaseURL}/tv/${id}?${paramLanguage}`

  const response = await axios.get(url, option)
  return response.data
}

export const getSerialIMDBID = async (id) => {
  const url = `${URLs.themoviedbBaseURL}/tv/${id}/${paramExternalIds}`

  const response = await axios.get(url, option)
  return response.data
}