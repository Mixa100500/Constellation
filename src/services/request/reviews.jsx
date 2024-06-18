// import axios from "axios"
import { option } from "./options.jsx"
import { URLs } from "./URL"
const params = 'language=en-US&page=1'

const fetchOptions = {
  method: 'GET',
  headers: option.headers,
};

// export const getReviewsByFilm = async (id) => {
//   const url = `${URLs.themoviedbBaseURL}/movie/${id}/reviews?${params}`
  
//   const response = await axios.get(url, option)
//   return response.data
// }

// export const getReviewsBySerial = async (id) => {
//   const url = `${URLs.themoviedbBaseURL}/tv/${id}/reviews?${params}`
  
//   const response = await axios.get(url, option)
//   return response.data
// }

export const getReviewsByFilm = async (id) => {
  const url = `${URLs.themoviedbBaseURL}/movie/${id}/reviews?${params}`
  
  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export const getReviewsBySerial = async (id) => {
  const url = `${URLs.themoviedbBaseURL}/tv/${id}/reviews?${params}`
  
  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}