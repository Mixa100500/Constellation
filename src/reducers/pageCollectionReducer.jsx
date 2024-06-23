import { createSlice } from '@reduxjs/toolkit'
import { themoviedbApi } from '../services/request/themoviedbService.jsx'
import { genreExtractor, getType } from '../helpers/url.jsx'
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
  lastKey: undefined
}
// countPage: 1,
// countLoadingSection: 1,

const collectionSlice = createSlice({
  name: nameSlicePageCollection,
  initialState,
  reducers: {
    addOnePage: (state, { payload }) => {
      const key = payload
      const countPage = state.general[key].countPage
      if(countPage) {
        state.general[key].countPage++
        return
      }
      state.general[key].countPage = 2
    },
    resetCountPage: (state, { payload }) => {
      const key = payload
      delete state.general[key].countPage
    },
  },

  extraReducers(builder) {
    builder.addMatcher(themoviedbApi.endpoints.getSection.matchFulfilled,
      (state, action) => {
        const key = createUrl(action.meta.arg.originalArgs)
        const section = action.meta.arg.originalArgs.section
        if(section !== 1) {
          const all = state.general[key]?.total_pages

          if(all < section + 1) {
            return
          }
          state.general[key].countLoadingSection = section + 1
          return
        }
        const {
          total_pages,
          total_results,
        } = action.payload.pages;

        state.general[key] = {
          total_pages,
          total_results,
        }
        // console.log('key', key)
        // console.log('key', key)
        // console.log('count', state.general[key].countLoadingSection)
        if(total_results > 20) {
          state.general[key].countLoadingSection = 2;
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

export const createUrlBySearch = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const type = window.location.pathname.slice(9)
  const genres = searchParams.get('genres')

  return createUrl({genres, type})
}

export const addPage = () => (dispatch) => {
  const key = createUrlBySearch()
  dispatch(addOnePage(key))
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
  const key = createUrlBySearch()
  const domain = state[nameSlicePageCollection]
  return domain.general[key]?.countLoadingSection
}

export const selectPaginationPage = (state) => {
  const key = createUrlBySearch()
  return state[nameSlicePageCollection].general[key]?.countPage
}
const checkIsMore = (max, currentPages) => {
	return max && currentPages * 3 <= max
}

export const selectHasMorePage = (state) => {
  const currentPages = selectPaginationPage(state) || 1
  const maxSection = selectMaxSectionCollection(state)
  const hasMore = checkIsMore(maxSection, currentPages)
  return hasMore
}

export const selectHasMoreOnePage = (state) => {
  const currentPages = selectPaginationPage(state) || 1
  return currentPages > 1
}




export default collectionSlice.reducer