import axios from "axios"
import { option } from "./options"
const baseUrl = 'https://api.themoviedb.org/3'
const paramExternalIds = 'external_ids'
const paramLenguage = 'language=en-US'


export const getMovieInfo = async (id) => {
  const url = `${baseUrl}/movie/${id}?${paramLenguage}`
  
  const resposne = await axios.get(url, option)
  return resposne.data
}

export const getSerialInfo = async (id) => {
  const url = `${baseUrl}/tv/${id}?${paramLenguage}`

  const resposne = await axios.get(url, option)
  return resposne.data
}

export const getSerialIMDBID = async (id) => {
  const url = `${baseUrl}/tv/${id}/${paramExternalIds}`

  const resposne = await axios.get(url, option)
  return resposne.data
}