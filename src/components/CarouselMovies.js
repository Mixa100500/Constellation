import React, { useEffect } from 'react'
import MediaCarousel from './MediaCarousel'
import {
	selectFilmsState,
	selectFilmsLoadingState,
	setMovies,
	initializeMovies,
} from '../reducers/filmCollectionReducer'
import { useDispatch, useSelector } from 'react-redux'

const CarouselFilms = () => {
	const loaded = useSelector(selectFilmsLoadingState)
	const films = useSelector(selectFilmsState)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializeMovies())
	}, [])

	if (!loaded) {
		return <div>loading...</div>
	}

	return (
		<>
			<MediaCarousel
				list={films}
				dark={true}
				label={'movies'}
			/>
		</>
	)
}

export default CarouselFilms
