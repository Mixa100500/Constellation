import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URLs } from './URL'
import { collectionExtractor, getYear } from '../../helpers/simple'
import { option } from './options'
import { collectionsNames } from '../../compositions/Router/options'
const mainParams = 'include_adult=false&include_video=false&language=en-US'
const sortParams = 'sort_by=popularity.desc'
// const start = `/discover/movie?${paramsMain}&`

const getType = (type) => {
  switch (type) {
    case collectionsNames.movies.name:
      return 'movie';
    case collectionsNames.serials.name:
      return 'tv';
    default:
      new Error('unknown media type')
  }
}

const genreExtractor = (genres) => {
  if(genres) {
    return '&with_genres=' + genres
  }
  return ''
}

export const themoviedbApi = createApi({
  reducerPath: 'themoviedbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URLs.themoviedbBaseURL,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Accept', 'application/json')
      headers.set('Authorization', option.headers.Authorization)
      // headers.set('Authorization', `Bearer ${getState().auth.token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSection: builder.query({
      query: ({ section, type, genres }) => `/discover/${getType(type)}?${mainParams}&page=${section}&${sortParams}${genreExtractor(genres)}`,
      transformResponse: (response) => {
        return collectionExtractor(response.results)
      }
    }),
  })
})
//https://api.themoviedb.org/3/discover/movie&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
//https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
export const { 
  useGetSectionQuery,
  useLazyGetSectionQuery, 
} = themoviedbApi