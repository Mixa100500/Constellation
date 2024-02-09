import React, { useEffect, useState } from 'react'
import MediaCarousel from './MediaCarousel'
import recommendResponse from './recommend'

const CarouselRecommend = () => {
	const [recommend, setRecommend] = useState([])
	useEffect(() => {
		setRecommend(recommendResponse)
	}, [])

	if (recommend.length === 0) {
		return <div>loading...</div>
	}

	return (
		<>
			<MediaCarousel
				list={recommend}
				dark={false}
				label={'Recommend'}
			/>
		</>
	)
}

export default CarouselRecommend
