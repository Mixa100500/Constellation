import { useEffect, useState } from 'react'
import MediaCarousel from '../../Carousels/CarouselMedia/CarouselMedia'
import recommendResponse from '../../recommend'

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
				loaded={true}
				list={recommend}
				label={'Recommend'}
			/>
		</>
	)
}

export default CarouselRecommend
