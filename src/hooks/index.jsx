import { useRef } from 'react'
import { useParams } from 'react-router-dom'

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
	const { type, id } = useParams()
	const isMovie = type === 'movie'
	return { isMovie, id }
}