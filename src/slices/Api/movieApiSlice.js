import { collectionExtractor, getYear } from '../../helpers/simple.jsx'
import { option } from '../../services/request/options.jsx'
import { genreExtractor, getType } from '../../helpers/url.jsx'
import { theMovieApiBase } from './baseApi.js'
const mainParams = 'include_adult=false&include_video=false&language=en-US'
const sortParams = 'sort_by=popularity.desc'
// const start = `/discover/movie?${paramsMain}&`


export const selectionApi = theMovieApiBase.injectEndpoints({
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
      keepUnusedDataFor: 60 * 60 * 60000,
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
  useLazyGetRecommendationsQuery,
  useLazyGetSectionQuery,
  // useLazyGetRecommendationsQuery,
} = selectionApi