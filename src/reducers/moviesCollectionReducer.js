import { createSlice } from '@reduxjs/toolkit'
import { getMovies } from '../services/request/movie'
import { getYear } from '../helpers/simple'
export const nameSliceMovieCollection = 'movieCollection'

const moviesSlice = createSlice({
  name: nameSliceMovieCollection,
  initialState: {
    movies: [],
    loaded: false,
  },
  reducers: {
    setMovies: (state, { payload }) => {
      const movies = payload.map(a => {
        a.year = getYear(a)
        return a
      })
      state.movies = movies
      state.loaded = true
    },
  },
})

export const { setMovies } = moviesSlice.actions

export const initializeMovies = () => {
  return async (dispatch) => {
    const cartoons = await getMovies()
    dispatch(setMovies(cartoons))
  }
}

export const selectMoviesState = (state) => state[nameSliceMovieCollection].movies
export const selectMoviesLoadingState = (state) => state[nameSliceMovieCollection].loaded
export default moviesSlice.reducer