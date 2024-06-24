import { createSlice } from '@reduxjs/toolkit'
import { getGenres, getYear } from '../../helpers/simple.jsx'

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
		clearReview: (state) => {
			state.reviews = initialReviews
		},
		clearMovie: () => initialState,
		fetchReviewsSuccess: (state, { payload }) => {
			state.reviews.list = payload.results
			state.reviews.loaded = true
		},
		fetchReviewsFailure: (state, { payload }) => {
			state.reviews.error = payload
			state.reviews.loaded = false
		},
	},
	selectors: {
		selectOpenedMovie: (sliceState) => {
			return sliceState.openedMovie
		},
		selectReviews: (sliceState) => {
			return sliceState.reviews
		}
	}
})

const { selectOpenedMovie, selectReviews } = currentMovieSlice.selectors

export const {
	fetchReviewsStart,
	fetchReviewsFailure,
	fetchReviewsSuccess,
	clearMovie,
	addMainInfo,
	clearReview
} = currentMovieSlice.actions

export const selectOpenedMovieId = (state) => selectOpenedMovie(state).info.id
export const selectOpenedMovieInfo = (state) => selectOpenedMovie(state).info
export const selectOpenedMovieImdbId = (state) => selectOpenedMovie(state).info.imdb_id
export const selectOpenedMovieLoaded = (state) => selectOpenedMovie(state).loaded
export const selectOpenedMovieReviewList = (state) => selectReviews(state).list
export const selectOpenedMovieReviewLoaded = (state) => selectReviews(state).loaded

