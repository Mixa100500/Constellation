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
			const fetchSerial = getSerialInfo(id)
			const fetchIds = getSerialIMDBID(id)

			const [serialInfo, ids] = await Promise
				.all([fetchSerial, fetchIds])

			info = serialInfo
			info.imdb_id = ids.imdb_id
		}
		dispatch(addMainInfo(info))
	}
}

export const { clearMovie, addMainInfo, clearReview } = currentMovieSlice.actions
export const selectOpenedMovieId = (state) => state.currentWatch.openedMovie.info.id
export const selectOpenedMovieInfo = (state) => state.currentWatch.openedMovie.info
export const selectOpenedMovieLoaded = (state) => state.currentWatch.openedMovie.loaded
export const selectOpenedMovieReviewList = (state) => state.currentWatch.reviews.list
export const selectOpenedMovieReviewLoaded = (state) => state.currentWatch.reviews.loaded


export default currentMovieSlice.reducer
