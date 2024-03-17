import axios from "axios"
import { option } from "./options"
const baseUrl = 'https://api.themoviedb.org/3'
const param = 'language=en-US'
const lastUrl = 'trending/all/day'


export const getPopular = async () => {
  const url = `${baseUrl}/${lastUrl}?${param}`
  
  const resposne = await axios.get(url, option)
  return resposne.data.results
}