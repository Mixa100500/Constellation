import Slider from 'react-slick'
import left48 from '../../../images/icons8-chevron-left-48.png'
import right48 from '../../../images/icons8-chevron-right-48.png'
import {
	ContainerPopular,
	PopularButtonContainer,
} from './styled'
import { PopularCard } from '../../UI/Cards/PopularCard/PopularCard'
import { getPopularCarouselBreakpoints } from '../../../helpers/generateBreakpoints'
import { useCarouselButton } from '../../../hooks'
import { PopularCardPlaceholder } from '../../UI/Cards/PopularCard/PopularCardPlaceholder'
import { createArray } from '../../../helpers/simple'
import { ButtonImg } from '../../../elements/ButtonImg'
import VirtualVisibility from '../../../context/VirtualVisibility'
import { ScrollLoader } from '../../Pagination/ScrollLoader'

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
	responsive: getPopularCarouselBreakpoints(),
}

const placeholders = createArray(20)

export function MainCarousel({ initializePopular, popular }) {


	const { sliderRef, prev, next } = useCarouselButton()

	return (
		<>
			<ContainerPopular>
				<ScrollLoader fetchData={initializePopular}>
					<VirtualVisibility>
						<Slider
							ref={sliderRef}
							{...settings}>
							{popular.length > 0 ?
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
				</ScrollLoader>
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

