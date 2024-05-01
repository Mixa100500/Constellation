import axios from "axios"
import { option } from "./options"
import { URLs } from "./URL"
const param = 'language=en-US'
const lastUrl = 'trending/all/day'


export const getPopular = async () => {
  const url = `${URLs.themoviedbBaseURL}/${lastUrl}?${param}`
  
  const response = await axios.get(url, option)
  return response.data.results
}