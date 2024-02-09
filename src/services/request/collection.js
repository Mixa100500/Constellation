import axios from "axios"
import { option } from "./options"
const baseUrl = 'https://api.themoviedb.org/3/discover'
const paramsMain = 'include_adult=false&include_video=false&language=en-US'
const externalParams = 'sort_by=popularity.desc'


export const getMovieCollection = async (page) => {
  const url = `${baseUrl}/movie?${paramsMain}&page=${page}&${externalParams}&without_genres=16`
  const resposne = await axios.get(url, option)

  return resposne.data.results
}

export const getSerialCollection = async (page) => {
  const url = `${baseUrl}/tv?${paramsMain}&page=${page}&${externalParams}`
  const resposne = await axios.get(url, option)

  return resposne.data.results
}

export const getCartoonCollection = async (page) => {
  const url = `${baseUrl}/movie?${paramsMain}&page=${page}&${externalParams}&with_genres=16`
  const resposne = await axios.get(url, option)
  
  return resposne.data.results
}