import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewPageCollection } from '../reducers/displayCollectionReducer'
import { checkHeight } from '../helpers/simple'
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

export function useScrollPagination() {
	const type = useParams().type
	let delayFetch = false
	const dispatch = useDispatch()

	async function handleScroll() {
		if (delayFetch) {
			return
		}
		if (checkHeight()) {
			delayFetch = true
			await dispatch(fetchNewPageCollection(type))

			setTimeout(() => {
				delayFetch = false
				if (checkHeight()) {
					handleScroll()
				}
			}, 500)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
}
