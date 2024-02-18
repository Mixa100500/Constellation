import React from 'react'
import MediaCarousel from '../../Carousels/MediaCarousel/CarouselMedia'
import {
	selectFilmsState,
	selectFilmsLoadingState,
} from '../../../reducers/filmCollectionReducer'
import { useSelector } from 'react-redux'

const CarouselFilms = () => {
	const loaded = useSelector(selectFilmsLoadingState)
	const films = useSelector(selectFilmsState)

	if (!loaded) {
		return <div>loading...</div>
	}

	return (
		<>
			<MediaCarousel
				list={films}
				label={'movies'}
			/>
		</>
	)
}

export default CarouselFilms
