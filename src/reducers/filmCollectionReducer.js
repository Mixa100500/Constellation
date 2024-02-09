import { createSlice } from '@reduxjs/toolkit'
import { getMovies } from '../services/request/movie'
export const nameSliceMovieCollection = 'movieCollection'

const filmSlice = createSlice({
  name: nameSliceMovieCollection,
  initialState: {
    films: null,
    loaded: false,
  },
  reducers: {
    setFilms: (state, action) => {
      state.films = action.payload
      state.loaded = true
    },
  },
})

export const { setFilms: setMovies } = filmSlice.actions

export const initializeMovies = () => {
  return async (dispatch) => {
    const cartoons = await getMovies()
    dispatch(setMovies(cartoons))
  }
}

export const selectFilmsState = (state) => state[nameSliceMovieCollection].films
export const selectFilmsLoadingState = (state) => state[nameSliceMovieCollection].loaded
export default filmSlice.reducer