import axios from "axios"
import { option } from "./options"
const baseUrl = 'https://api.themoviedb.org/3'
const paramExternalIds = '?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16'

export const getCartoons = async () => {
  const url = `${baseUrl}/discover/movie${paramExternalIds}`
  
  const resposne = await axios.get(url, option)
  return resposne.data.results
}