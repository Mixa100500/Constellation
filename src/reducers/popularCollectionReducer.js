import { createSlice } from '@reduxjs/toolkit'
import { getPopular } from '../services/request/popular'

export const nameSlicePopularCollection = 'popularCollection'

const popularSlice = createSlice({
  name: nameSlicePopularCollection,
  initialState: {
    popular: [],
    loaded: false,
  },
  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload
      state.loaded = true
    },
  },
})

export const { setPopular } = popularSlice.actions

export const initializePopular = () => {
  return async (dispatch) => {
    const popular = await getPopular()
    dispatch(setPopular(popular))
  }
}

export const selectPopularState = (state) => state[nameSlicePopularCollection].popular
export const selectPopularLoadingState = (state) => state[nameSlicePopularCollection].loaded
export default popularSlice.reducer