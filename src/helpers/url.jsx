import { collectionsNames } from "../compositions/Router/options.jsx";

export const getType = (type) => {
  
  switch (type) {
    case collectionsNames.movies.name:
      return 'movie';
    case collectionsNames.serials.name:
      return 'tv';
    default:
      new Error('unknown media type')
  }
}

export const genreExtractor = (genres) => {
  if(genres) {
    return '&with_genres=' + genres
  }
  return ''
}