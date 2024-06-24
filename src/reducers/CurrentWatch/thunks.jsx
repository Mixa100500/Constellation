import { getMovieInfo, getSerialIMDBID, getSerialInfo } from "../../services/request/mediaInfo"
import { getReviewsByFilm, getReviewsBySerial } from "../../services/request/reviews"
import { addMainInfo, fetchReviewsFailure, fetchReviewsSuccess } from "./currentWatchReducer"

export const fetchSerialReview = (id) => {
	return (dispatch) => {
		let info = getReviewsBySerial(id)
		info
			.then((reviews) => dispatch(fetchReviewsSuccess(reviews)))
			.catch((error) => dispatch(fetchReviewsFailure(error)))
	}
}

export const fetchMoviesReview = (id) => {
	return (dispatch) => {
		let info = getReviewsByFilm(id)

		info
			.then((reviews) => {
				dispatch(fetchReviewsSuccess(reviews))
			})
			.catch((error) => dispatch(fetchReviewsFailure(error)))
	}
}

export const initializeMovies = (id) => {
	return async (dispatch) => {
		let info = await getMovieInfo(id)
		dispatch(addMainInfo(info))
	}
}

export const initializeSerials = (id) => {
	return async (dispatch) => {
		const fetchSerial = getSerialInfo(id)
		const fetchIds = getSerialIMDBID(id)

		const [serialInfo, ids] = await Promise
			.all([fetchSerial, fetchIds])

		let info = serialInfo
		info.imdb_id = ids.imdb_id
		dispatch(addMainInfo(info))
	}
}