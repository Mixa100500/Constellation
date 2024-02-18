import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import { useDispatch, useSelector } from 'react-redux'
import left48 from '../../../images/icons8-chevron-left-48.png'
import right48 from '../../../images/icons8-chevron-right-48.png'
import { BackdropImg, ContainerPopular, ImgContiner, PopularButtonContainer } from './styled'
import { Card } from './Card'
import { selectPopularLoadingState, selectPopularState } from '../../../reducers/popularCollectionReducer'
import { getPopularCorouselBrakepoints } from '../../../helpers/generateBreakpoints'
import { useCarouselButton } from '../../../hooks'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	autoplaySpeed: 5000,
	centerMode: true,
	// autoplay: true,
	lazyLoad: true,
	cssEase: 'linear',
	swipeToSlide: true,
	initialSlide: 10,
	slidesToShow: 2,
	slidesToScroll: 3,
	pauseOnHover: true,
	adaptiveHeight: true,
	responsive: getPopularCorouselBrakepoints(),
}

function CarouselPopular() {
	const popular = useSelector(selectPopularState)
	const loaded = useSelector(selectPopularLoadingState)
	const {sliderRef, prev, next} = useCarouselButton()

	if (!loaded) {
		return <div>loading...</div>
	}

	return (
		<>
			<ContainerPopular>
				<Slider
					ref={sliderRef}
					{...settings}>
					{popular.map((info) => (
						<Card
							info={info}
							key={info.name || info.original_title}
						/>
					))}
				</Slider>
			</ContainerPopular>
			<PopularButtonContainer>
				<img
					onClick={prev}
					src={left48}
					className='carousel-popular__button'
				/>
				<img
					onClick={next}
					src={right48}
					className='carousel-popular__button'
				/>
			</PopularButtonContainer>
		</>
	)
}

export default CarouselPopular
