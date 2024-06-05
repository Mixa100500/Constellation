import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { collectionsNames } from '../compositions/Router/options'
import { fetchMoviesReview, fetchSerialReview, initializeMovies, initializeSerials } from '../reducers/CurrentWatch/thunks'

export function useCarouselButton() {
	const sliderRef = useRef()

	const next = () => {
		sliderRef.current.slickNext()
	}

	const prev = () => {
		sliderRef.current.slickPrev()
	}

	return {prev, next, sliderRef}
}

export const useWatchParams = () => {
	const { id, type } = useParams()
	const isMovie = type === collectionsNames.movies.name

	return { isMovie, id }
}

export const useFetchReviewsByType = () => {
	const { isMovie } = useWatchParams()
	if(isMovie) {
		return fetchMoviesReview
	}
	return fetchSerialReview
}

export const useInitializeByType = () => {
	const { isMovie } = useWatchParams()
	if(isMovie) {
		return initializeMovies
	}
	return initializeSerials
}

