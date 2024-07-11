import { createSlice } from '@reduxjs/toolkit'
import { themoviedbApi } from '../../services/request/themoviedbService.jsx'
import { genreExtractor, getType } from '../../helpers/url.jsx'
import { URLs } from '../../services/request/URL.js'
const mainParams = 'include_adult=false&include_video=false&language=en-US'
const sortParams = 'sort_by=popularity.desc'

// const initialState = {
//   page: 1,
//   total_pages: 0,
//   total_results: 0,
// }

const initialState = {
  general: {

  },
}

export const collectionSlice = createSlice({
  name: 'pageCollection',
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
      if(state.general[key]?.countPage) {
        delete state.general[key].countPage
      }
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
        if(total_results > 20) {
          state.general[key].countLoadingSection = 2;
        }
      }
    )
  },
  selectors: {
    selectGeneral: (sliceState) => sliceState.general,
  },
})
export const { addOnePage, resetCountPage } = collectionSlice.actions
const { selectGeneral } = collectionSlice.selectors

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

export const selectMaxSectionCollection = (state) => {
  const key = createUrlBySearch()
  const general = selectGeneral(state)
  return general[key]?.total_pages || 0
}

export const selectMaxResultsCollection = (state) => {
  const key = createUrlBySearch()
  const general = selectGeneral(state)
  return general[key]?.total_results
}

export const selectHasMoreCollection = (state) => {
  const key = createUrlBySearch()
  const general = selectGeneral(state)

  const max = general[key]?.total_pages
  const countPage = general[key].countPage
  return max && countPage * 3 <= max
}

export const selectCurrentLoadingSection = (state) => {
  const key = createUrlBySearch()
  const general = selectGeneral(state)
  return general[key]?.countLoadingSection || 1
}

export const selectPaginationPage = (state) => {
  const key = createUrlBySearch()
  const general = selectGeneral(state)
  return general[key]?.countPage || 1
}
const checkIsMore = (max, currentPages) => {
	return max && currentPages * 3 <= max
}

export const selectNeedSkeleton = (state) => {
  const currentPages = selectPaginationPage(state)
  const maxSection = selectMaxSectionCollection(state)
  const hasMore = checkIsMore(maxSection, currentPages)
  return hasMore && selectLastPageLoaded(state)
}

export const selectLastPageLoaded = (state) => {
  const currentPages = selectPaginationPage(state)
  const maxSection = selectMaxSectionCollection(state)
  const currentLoadingSection = selectCurrentLoadingSection(state)
  const lastPageLoaded = currentPages * 3 <= currentLoadingSection - 1
  const hasMore = checkIsMore(maxSection, currentPages)
  // console.log('loaded', currentPages * 3, currentLoadingSection - 1)
  return hasMore && lastPageLoaded
}

// export const select

export const selectHasMoreOnePage = (state) => {
  const currentPages = selectPaginationPage(state)
  return currentPages > 1
}

export const selectSections = (page) => {
  return (state) => {
    const maxSection = selectMaxSectionCollection(state) || 1
    const prevSection = (page * 3) - 3
    const diff = maxSection - prevSection
    return Math.min(diff, 3)
  }
}

export const selectIsSkip = (section) => {
  return (state) => {
    const loadingSection = selectCurrentLoadingSection(state)
    return loadingSection < section
  }
}
// const loadingSection = selectCurrentLoadingSection(state)

// thunk

export const addPage = () => (dispatch, getState) => {
  const state = getState()
  const needNextPage = selectLastPageLoaded(state)
  if(!needNextPage) {
    return
  }
  const key = createUrlBySearch()
  dispatch(addOnePage(key))
}