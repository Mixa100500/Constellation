import { useParams } from 'react-router-dom'
import { collectionsNames } from '../compositions/Router/options.jsx'
import { fetchMoviesReview, fetchSerialReview, initializeMovies, initializeSerials } from '../slices/CurrentWatch/thunks.jsx'

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

export const useLazyByType = ({movieContent, serialContent, loadingContent, isLoaded }) => {
  const { isMovie } = useWatchParams()

	if(!isLoaded) {
    return loadingContent()
	}
	
	if(isMovie) {
		return movieContent()
	}
	
  return serialContent()
}

