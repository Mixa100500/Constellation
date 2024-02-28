import { createSlice } from '@reduxjs/toolkit'
import {
	getReviewsByFilm,
	getReviewsBySerial,
} from '../services/request/reviews'
import { getGenres, getYear } from '../helpers/simple'
import {
	getMovieInfo,
	getSerialIMDBID,
	getSerialInfo,
} from '../services/request/mediaInfo'


const initialReviws = {
	reviews: {
		list: [],
		loaded: false,
		error: null,
	}
}

const initialState = {
	openedMovie: null,
	reviews: initialReviws,
}

const currentMovieSlice = createSlice({
	name: 'currentWatch',
	initialState,
	reducers: {
		openMovie: (state, { payload }) => {
			state.openedMovie = {
				...payload,
				date: getYear(payload),
			}
		},
		clearReview: (state) => {
			state.reviews = initialReviws
		},
		addMainInfo: (state, { payload }) => {
			state.openedMovie = {
				...payload,
				date: getYear(payload),
				genres: getGenres(payload.genres),
			}
		},
		closeMovie: () => initialState,
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

export const fetchReviews = (obj) => {
	const { isMovie, id } = obj;

	return (dispatch) => {
		let info

		if (isMovie) {
			info = getReviewsByFilm(id)
		} else {
			info = getReviewsBySerial(id)
		}
		info
			.then((reviews) => dispatch(fetchReviewsSuccess(reviews)))
			.catch((error) => dispatch(fetchReviewsFailure(error)))
	}
}

export const initializeMedia = (IsMovie, id) => {
	return async (dispatch) => {
		let info

		if (IsMovie) {
			info = await getMovieInfo(id)
		} else {
			info = await getSerialInfo(id)
			const data = await getSerialIMDBID(id)
			info.imdb_id = data.imdb_id
		}
		dispatch(addMainInfo(info))
	}
}

export const { openMovie, closeMovie, addMainInfo, clearReview } = currentMovieSlice.actions
export const selectOpenedMovieId = (state) => state.currentWatch.openedMovie.id
export const selectOpenedMovieInfo = (state) => state.currentWatch.openedMovie
export const selectOpenedMovieReview = (state) => state.currentWatch.reviews

export default currentMovieSlice.reducer
