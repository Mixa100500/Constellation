
import React from 'react'
import { useHeight } from '../context/height'

const VirtualVisibility = (prop) => {
	const children = prop.children
	const elementRef = React.useRef(null)
	const [isVisible, setIsVisible] = React.useState(true)

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				setIsVisible(entries[0].isIntersecting)
			},
			{
				root: null,
				threshold: 0,
				rootMargin: '400px 0px 400px 0px',
			}
		)
		if (elementRef.current) {
			observer.observe(elementRef.current)
		}

		if (elementRef.current) {
			observer.unobserve(elementRef.current)
		}
	}, [elementRef])

	const height = useHeight()
	const styleHidden = React.useMemo(
		() => ({
			height,
		}),
		[height]
	)

	return (
		<div
			style={styleHidden}
			className='virtual-visibility'
			ref={elementRef}>
			{isVisible && children}
		</div>
	)
}

export default VirtualVisibility
