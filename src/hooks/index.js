import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHeightResize } from '../context/height'
import { fetchNewPageCollection } from '../reducers/displayCollectionReducer'
import { checkHeight } from '../helpers/simple'
import { useParams } from 'react-router-dom'
import { useCustomRef } from '../context/ref'

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

export function useFirstPageRef() {
	const firstPageRef = useCustomRef()

	const setHeight = useHeightResize()
	useEffect(() => {
		const handleResize = () => {
			if (firstPageRef.current) {
				const height = firstPageRef.current.offsetHeight
				setHeight(height)
			}
		}
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return firstPageRef
}

export function useHandleScroll() {
	const firstPageRef = useCustomRef()
	const type = useParams().type
	let delayResize = false
	let delayFetch = false
	const dispatch = useDispatch()
	const setHeight = useHeightResize()

	async function handleScroll() {
		if (!delayResize && firstPageRef.current) {
			const height = firstPageRef.current.offsetHeight
			setHeight(height)
			delayResize = true
			setTimeout(() => {
				delayResize = false
			}, 1000)
		}

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
