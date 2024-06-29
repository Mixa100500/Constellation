import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URLs } from './URL'
import { collectionExtractor, getYear } from '../../helpers/simple.jsx'
import { option } from './options.jsx'
import { genreExtractor, getType } from '../../helpers/url.jsx'
const mainParams = 'include_adult=false&include_video=false&language=en-US'
const sortParams = 'sort_by=popularity.desc'
// const start = `/discover/movie?${paramsMain}&`


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
        const list = collectionExtractor(response.results)
        const result = {
          list
        }

        if(response.page === 1) {
          const {
            // page,
            total_pages,
            total_results,
          } = response

          result.pages = {
            total_pages,
            total_results
          }
        }
        return result
      },
      keepUnusedDataFor: 60 * 60 * 60,
    }),
    getRecommendations: builder.query({
      query: ({ type, id }) => `/${getType(type)}/${id}/recommendations?language=en-US&page=1`,
      transformResponse: (response) => {
        return collectionExtractor(response.results)
      }
    })
  })
})

// https://api.themoviedb.org/3/movie/movie_id/recommendations?language=en-US&page=1
// https://api.themoviedb.org/3/tv/series_id/recommendations?language=en-US&page=1
export const { 
  useGetSectionQuery,
  useGetRecommendationsQuery,
  // useLazyGetSectionQuery,
  // useLazyGetRecommendationsQuery,
} = themoviedbApi