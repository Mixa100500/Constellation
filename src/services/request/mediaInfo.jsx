import { option } from "./options"
import { URLs } from "./URL"

const paramExternalIds = 'external_ids'
const paramLanguage = 'language=en-US'

// Define options for fetch
const fetchOptions = {
  method: 'GET',
  headers: option.headers
  // Include other options if needed
};

export const getMovieInfo = async (id) => {
  const url = `${URLs.themoviedbBaseURL}/movie/${id}?${paramLanguage}`
  
  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export const getSerialInfo = async (id) => {
  const url = `${URLs.themoviedbBaseURL}/tv/${id}?${paramLanguage}`

  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export const getSerialIMDBID = async (id) => {
  const url = `${URLs.themoviedbBaseURL}/tv/${id}/${paramExternalIds}`

  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

// export const getMovieInfo = async (id) => {
//   const url = ${URLs.themoviedbBaseURL}/movie/${id}?${paramLanguage}
  
//   const response = await axios.get(url, option)
//   return response.data
//   }
  
//   export const getSerialInfo = async (id) => {
//   const url = ${URLs.themoviedbBaseURL}/tv/${id}?${paramLanguage}
  
//   const response = await axios.get(url, option)
//   return response.data
//   }
  
//   export const getSerialIMDBID = async (id) => {
//   const url = ${URLs.themoviedbBaseURL}/tv/${id}/${paramExternalIds}
  
//   const response = await axios.get(url, option)
//   return response.data
//   }