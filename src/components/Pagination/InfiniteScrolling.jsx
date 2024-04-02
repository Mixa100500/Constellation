import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

const InfiniteScrolling = (props) => {
	const fetchData = props.fetchData
	const query = props.query
	const dispatch = useDispatch()
	const elementRef = React.useRef()
	const visibleRef = React.useRef(false)
	const delayRef = React.useRef(false)
	
	const scrollToSkeletonTop = () => {
		const rect = elementRef.current.getBoundingClientRect()
		if(rect.top < 0) {
			window.scrollBy(0, rect.top - rect.height)
		}
  }

	async function delayloadWhenVisible() {
		scrollToSkeletonTop()
		if (delayRef.current) {
			return
		}
		if (visibleRef.current) {
			delayRef.current = true
			await dispatch(fetchData(query))

			setTimeout(() => {
				delayRef.current = false
				delayloadWhenVisible()
			}, 600)
		}
	}
	
	React.useEffect(
		() => {
			const observer = new IntersectionObserver(
				async (entries) => {
					if (entries[0].isIntersecting) {
						visibleRef.current = true
						delayloadWhenVisible()
						return
					}
					visibleRef.current = false
				},
				{
					root: null,
					threshold: 0,
					rootMargin: '100px 0px 100px 0px',
				}
			)

			if (elementRef.current) {
				observer.observe(elementRef.current)
			}

			return () => {
				observer.disconnect()
			}
		},
		[]
	)

	return <div ref={elementRef}>{props.children}</div>
}

InfiniteScrolling.propTypes = {
	children: PropTypes.node.isRequired,
  query: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
}

export {
	InfiniteScrolling
}