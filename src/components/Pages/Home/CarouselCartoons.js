import React, { useEffect } from 'react'
import MediaCarousel from '../../Carousels/MediaCarousel/CarouselMedia'
import { useSelector } from 'react-redux'
import {
	selectCartoonsLoadingState,
	selectCartoonsState,
} from '../../../reducers/сartoonCollectionReducer'

const CarouselCartoons = () => {
	const loaded = useSelector(selectCartoonsLoadingState)
	const cartoons = useSelector(selectCartoonsState)

	if (!loaded) {
		return <div>loading...</div>
	}

	return (
		<>
			<MediaCarousel
				list={cartoons}
				label={'cartoons'}
			/>
		</>
	)
}

export default CarouselCartoons
