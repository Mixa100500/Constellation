import React from 'react'
import PropTypes from 'prop-types'

const InfiniteScrolling = (props) => {
	const addPage = props.addPage
	const elementRef = React.useRef()
	const visibleRef = React.useRef(false)
	const delayRef = React.useRef(false)
	const unmountRef = React.useRef(false)
	

	function delayLoadWhenVisible() {
		if(unmountRef.current) {
			return
		}
		if (delayRef.current) {
			return
		}
		if (visibleRef.current) {
			delayRef.current = true
			addPage()

			setTimeout(() => {
				delayRef.current = false
				delayLoadWhenVisible()
			}, 1500)
		}
	}
	
	React.useEffect(() => {
		return () => {
			unmountRef.current = true
		}
	}, [])

	React.useEffect(
		() => {
			const observer = new IntersectionObserver(
				async (entries) => {
					if (entries[0].isIntersecting) {
						visibleRef.current = true
						delayLoadWhenVisible()
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
				if (elementRef.current) {
					observer.observe(elementRef.current)
				}
			}
		}, [addPage]
	)

	return <div ref={elementRef}>{props.children}</div>
}

InfiniteScrolling.propTypes = {
	children: PropTypes.node.isRequired,
  addPage: PropTypes.func.isRequired,
}

export {
	InfiniteScrolling
}