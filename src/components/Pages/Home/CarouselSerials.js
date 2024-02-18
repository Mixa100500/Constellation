import React, { useEffect } from 'react'
import MediaCarousel from '../../Carousels/MediaCarousel/CarouselMedia'
import { useSelector } from 'react-redux'
import {
	selectSerialsLoadingState,
	selectSerialsState,
} from '../../../reducers/serialsCollectionReducer'

const CarouselSerials = () => {
	const loaded = useSelector(selectSerialsLoadingState)
	const serials = useSelector(selectSerialsState)

	if (!loaded) {
		return <div>loading...</div>
	}
	return (
		<>
			<MediaCarousel
				list={serials}
				label={'serials'}
			/>
		</>
	)
}

export default CarouselSerials
