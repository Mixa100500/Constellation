import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import { useDispatch, useSelector } from 'react-redux'
import left48 from '../../../images/icons8-chevron-left-48.png'
import right48 from '../../../images/icons8-chevron-right-48.png'
import {
	ContainerPopular,
	PopularButtonContainer,
} from './styled'
import { PopularCard } from '../../UI/Cards/PopularCard/PopularCard'
import {
	selectPopularLoadingState,
	selectPopularState,
} from '../../../reducers/popularCollectionReducer'
import { getPopularCorouselBrakepoints } from '../../../helpers/generateBreakpoints'
import { useCarouselButton } from '../../../hooks'
import { PopularCardPlaceholder } from '../../UI/Cards/PopularCard/PopularCardPlaceholder'
import { createArray } from '../../../helpers/simple'
import { ButtonImg } from '../../../elements/BottonImg'
import VirtualVisibility from '../../../context/VirtualVisibility'

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
	responsive: getPopularCorouselBrakepoints(),
}

const placeholders = createArray(20)

function CarouselPopular() {
	const popular = useSelector(selectPopularState)
	const loaded = useSelector(selectPopularLoadingState)
	const { sliderRef, prev, next } = useCarouselButton()

	return (
		<>
			<ContainerPopular>
				<VirtualVisibility>
					<Slider
						ref={sliderRef}
						{...settings}>
						{loaded ?
							popular.map((info) => (
								<PopularCard
									info={info}
									key={info.name || info.original_title}
								/>
							))
							:
							placeholders.map((item) => (
								<PopularCardPlaceholder key={item}/>
							))
						}
					</Slider>
				</VirtualVisibility>
			</ContainerPopular>
			<PopularButtonContainer>
				<ButtonImg
					onClick={prev}
					src={left48}
					className='carousel-popular__button'
				/>
				<ButtonImg
					onClick={next}
					src={right48}
					className='carousel-popular__button'
				/>
			</PopularButtonContainer>
		</>
	)
}

export default CarouselPopular
