import { createSlice } from '@reduxjs/toolkit'
import {
	getReviewsByFilm as getReviewsOfMovies,
	getReviewsBySerial,
} from '../../services/request/reviews'
import { getGenres, getYear } from '../../helpers/simple'
import {
	getMovieInfo,
	getSerialIMDBID,
	getSerialInfo,
} from '../../services/request/mediaInfo'


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

const currentMovieSlice = createSlice({
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
})

export const { fetchReviewsStart, fetchReviewsFailure, fetchReviewsSuccess } =
	currentMovieSlice.actions

export const { clearMovie, addMainInfo, clearReview } = currentMovieSlice.actions


export default currentMovieSlice.reducer
