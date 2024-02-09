import { useEffect, useMemo, useRef, useState } from 'react'
import { useHeight } from '../../context/height'
import { CollectionList } from '../../styled'
import Card from '../../UI/Carousel/MediaCarousel/Card'

// const Hidden = () => {
//   const height = useHeight()
//   const styleHidden = useMemo(() => ({
//     height
//   }), [height])

//   return <div style={styleHidden}></div>
// }

const OptimizedWrapper = ({ children }) => {
	const elementRef = useRef(null)
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
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
	const styleHidden = useMemo(
		() => ({
			height,
		}),
		[height]
	)

	console.log('isVisible', isVisible)
	return (
		<div
			style={styleHidden}
			className='optimized-wrapper'
			ref={elementRef}>
			{isVisible && children}
		</div>
	)
}

export const Page = ({ pageList }) => {
	return (
		<CollectionList>
			{pageList.map((info) => (
				<Card
					film={info}
					key={info.id}
				/>
			))}
		</CollectionList>
	)
}

export default OptimizedWrapper
