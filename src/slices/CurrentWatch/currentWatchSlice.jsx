import { createSlice } from '@reduxjs/toolkit'
import { getGenres, getYear } from '../../helpers/simple.jsx'
import { rootReducer } from '../rootReducer.jsx'

const initialReviews = {
	list: [],
	loaded: false,
	error: null,
}

const initialState = {
	openedMovie: {
		loaded: false,
		info: {},
	},
	reviews: initialReviews,
}

export const currentMovieSlice = createSlice({
	name: 'currentWatch',
	initialState,
	reducers: {
		addMainInfo: (state, { payload }) => {
			state.openedMovie.loaded = true;

			state.openedMovie.info = {
				...payload,
				date: getYear(payload),
				genres: getGenres(payload.genres),
				title: payload.name || payload.title
			}
		},
		clearMovie: () => initialState,
	},
	selectors: {
		selectOpenedMovie: (sliceState) => {
			return sliceState.openedMovie
		},
	}
})

const injectedSlice = rootReducer.inject(currentMovieSlice)

export const { selectOpenedMovie, selectReviews } = currentMovieSlice.selectors

export const {
	clearMovie,
	addMainInfo,
} = currentMovieSlice.actions


export const selectOpenedMovieInfo = injectedSlice.selector(
	(state) => selectOpenedMovie(state).info
)

export const selectOpenedMovieImdbId = injectedSlice.selector(
	(state) => selectOpenedMovie(state).info.imdb_id
)

export const selectOpenedMovieLoaded = injectedSlice.selector(
	(state) => selectOpenedMovie(state).loaded
)


// export const selectOpenedMovieInfo = (state) => selectOpenedMovie(state).info
// export const selectOpenedMovieImdbId = (state) => selectOpenedMovie(state).info.imdb_id
// export const selectOpenedMovieLoaded = (state) => selectOpenedMovie(state).loaded
// export const selectOpenedMovieReviewList = (state) => selectReviews(state).list
// export const selectOpenedMovieReviewLoaded = (state) => selectReviews(state).loaded