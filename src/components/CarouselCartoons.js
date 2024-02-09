import React, { useEffect } from 'react'
import MediaCarousel from './MediaCarousel'
import { useDispatch, useSelector } from 'react-redux'
import {
	initializeCartoon,
	selectCartoonsLoadingState,
	selectCartoonsState,
} from '../reducers/сartoonCollectionReducer'

const CarouselCartoons = () => {
	const loaded = useSelector(selectCartoonsLoadingState)
	const cartoons = useSelector(selectCartoonsState)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializeCartoon())
	}, [])

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
