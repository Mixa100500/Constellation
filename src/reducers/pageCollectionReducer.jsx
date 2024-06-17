import { createSlice } from '@reduxjs/toolkit'
import { themoviedbApi } from '../services/request/themoviedbService'
import { genreExtractor, getType } from '../helpers/url'
import { URLs } from '../services/request/URL'
const mainParams = 'include_adult=false&include_video=false&language=en-US'
const sortParams = 'sort_by=popularity.desc'

export const nameSlicePageCollection = 'pageCollection'

// const initialState = {
//   page: 1,
//   total_pages: 0,
//   total_results: 0,
// }

const initialState = {
  general: {

  },
  countPage: 1,
  countLoadingSection: 1,
}

const collectionSlice = createSlice({
  name: nameSlicePageCollection,
  initialState,reducers: {
    addOnePage: (state) => {
      state.countPage++
    },
    resetCountPage: (state) => {
      state.countPage = 1
      state.countLoadingSection = 1
    },
  },

  extraReducers(builder) {
    builder.addMatcher(themoviedbApi.endpoints.getSection.matchFulfilled,
      (state, action) => {
        const key = createUrl(action.meta.arg.originalArgs)
        const all = state.general[key]?.total_pages
        const section = action.meta.arg.originalArgs.section

        if(section !== 1) {

          if(all < section + 1) {
            return 
          }
          
          state.countLoadingSection = section + 1
          return 
        }
        const {
          total_pages,
          total_results,
        } = action.payload.pages;
        
        if(total_results > 20) {
          state.countLoadingSection = 2
        }
        state.general[key] = {
          total_pages,
          total_results,
        }
      }
    )
  }
})
export const { addOnePage, resetCountPage } = collectionSlice.actions

const createUrl = ({ type, genres }) => URLs.themoviedbBaseURL + `/discover/${getType(type)}?${mainParams}&page=${1}&${sortParams}${genreExtractor(genres)}`

// function objectToString(obj) {
//   return Object.entries(obj)
//     .map(([key, value]) => `${key}: ${value}`)
//     .join(', ');
// }

const createUrlBySearch = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const genres = searchParams.get('genres')
  const type = searchParams.get('type')

  return createUrl({genres, type})
}
export const selectMaxSectionCollection = (state) => {
  const key = createUrlBySearch()
  const domain = state[nameSlicePageCollection]
  return domain.general[key]?.total_pages
}

export const selectMaxResultsCollection = (state) => {
  const key = createUrlBySearch()
  const domain = state[nameSlicePageCollection]
  return domain.general[key]?.total_results
}

export const selectHasMoreCollection = (state) => {
  const key = createUrlBySearch()
  const domain = state[nameSlicePageCollection]

  const max = domain.general[key]?.total_pages
  const countPage = domain.countPage
  return max && countPage * 3 <= max
}

export const selectCurrentLoadingSection = (state) => {
  const domain = state[nameSlicePageCollection]
  return domain.countLoadingSection
}

export const selectPaginationPage = (state) => 
  state[nameSlicePageCollection].countPage


export default collectionSlice.reducer