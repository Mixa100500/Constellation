import { createSlice } from '@reduxjs/toolkit'
import {
	getReviewsByFilm,
	getReviewsBySerial,
} from '../services/request/reviews'

const getYear = (release_date, first_air_date) => {
	const date = release_date ? release_date : first_air_date
	return date.slice(0, 4)
}

const getGenres = (genres) => {
	return genres.map((genre) => genre.name.split(' & ')[0])
}

const currentMovieSlice = createSlice({
	name: 'currentWatch',
	initialState: {
		openedMovie: null,
		reviews: {
			list: [],
			loading: false,
			error: null,
		},
	},
	reducers: {
		openMovie: (state, { payload }) => {
			state.openedMovie = {
				...payload,
				date: getYear(payload.release_date, payload.first_air_date),
			}
		},
		addMainInfo: (state, { payload }) => {
			state.openedMovie = {
				...payload,
				date: getYear(payload.release_date, payload.first_air_date),
				genres: getGenres(payload.genres),
			}
		},

		closeMovie: (state) => {
			state.openedMovie = null
		},
		fetchReviewsStart: (state) => {
			state.reviews.loading = true
			state.reviews.error = null
		},
		fetchReviewsSuccess: (state, { payload }) => {
			state.reviews.list = payload.results
			state.reviews.loading = false
		},
		fetchReviewsFailure: (state, { payload }) => {
			state.reviews.error = payload
			state.reviews.loading = false
		},
	},
})

export const { fetchReviewsStart, fetchReviewsFailure, fetchReviewsSuccess } =
	currentMovieSlice.actions

export const fetchReviews = (movie, id) => {
	return (dispatch) => {
		dispatch(fetchReviewsStart())
		let info

		if (movie) {
			info = getReviewsByFilm(id)
		} else {
			info = getReviewsBySerial(id)
		}
		info
			.then((reviews) => dispatch(fetchReviewsSuccess(reviews)))
			.catch((error) => dispatch(fetchReviewsFailure(error)))
	}
}

export const { openMovie, closeMovie, addMainInfo } = currentMovieSlice.actions
export const selectOpenedMovieId = (state) => state.currentWatch.openedMovie.id
export const selectOpenedMovieInfo = (state) => state.currentWatch.openedMovie
export const selectOpenedMovieReview = (state) => state.currentWatch.reviews

export default currentMovieSlice.reducer
