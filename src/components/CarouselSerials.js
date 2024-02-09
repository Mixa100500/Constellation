import React, { useEffect } from 'react'
import MediaCarousel from './MediaCarousel'
import { useDispatch, useSelector } from 'react-redux'
import {
	initializeSerials,
	selectSerialsLoadingState,
	selectSerialsState,
} from '../reducers/serialsCollectionReducer'

const CarouselSerials = () => {
	const loaded = useSelector(selectSerialsLoadingState)
	const serials = useSelector(selectSerialsState)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializeSerials())
	}, [])

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
