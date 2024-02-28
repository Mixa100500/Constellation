import React from 'react'
import { useHeight } from '../../context/height'
import { PosterCardPlaceholder } from '../UI/Cards/PosterCard/PosterCardPlaceholder'
import { createArray } from '../../helpers/simple'
import { CollectionList } from '../Pages/Collection/styled'

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

		return () => {
			observer.disconnect()
		}
	}, [elementRef])

	const height = useHeight()
	const styleHidden = React.useMemo(
		() => ({
			height,
		}),
		[height]
	)
	const placeholders = createArray(60)

	return (
		<div
			style={styleHidden}
			className='virtual-visibility'
			ref={elementRef}>
			{isVisible ? 
				children
				:
				<CollectionList>
					{placeholders.map((item) => 
						<PosterCardPlaceholder key={item} />
					)}
				</CollectionList>
			}
		</div>
	)
}

export default VirtualVisibility
