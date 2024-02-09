import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHeightResize } from '../context/height'
import { fetchNewPageCollection } from '../../reducers/displayCollectionReducer'
import { checkHeight } from '../helpers/chackHeight'
import { useParams } from 'react-router-dom'

export function useFirstPageRef() {
	const firstPageRef = useRef(null)
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

export function useHandleScroll(firstPageRef) {
	const type = useParams().type
	let delayResize = false
	let delayFetch = false
	const dispatch = useDispatch()
	const setHeight = useHeightResize()

	function handleScroll() {
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
			dispatch(fetchNewPageCollection(type))

			setTimeout(() => {
				delayFetch = false
				if (checkHeight()) {
					handleScroll()
				}
			}, 1000)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
}
