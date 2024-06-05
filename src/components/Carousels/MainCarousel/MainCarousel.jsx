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
import { ButtonCarousel } from '../../../elements/ButtonCarousel'
import VirtualVisibility from '../../../context/VirtualVisibility'
import { ScrollLoader } from '../../Pagination/ScrollLoader'
import { settingMain } from './settingsMainCarousel'


const placeholders = createArray(8)

export function MainCarousel({ initializePopular, list }) {


	const { sliderRef, prev, next } = useCarouselButton()

	return (
		<>
			<ContainerPopular>
				<ScrollLoader fetchData={initializePopular}>
					<VirtualVisibility>
						<Slider
							ref={sliderRef}
							{...settingMain}>
							{list.length > 0 ?
								list.map((info) => (
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
				<ButtonCarousel
					onClick={prev}
					className='carousel-popular__button'
				>
					<img src={left48} alt="left" />
				</ButtonCarousel>
				<ButtonCarousel
					onClick={next}
					className='carousel-popular__button'
				>
					<img src={right48} alt="right" />
				</ButtonCarousel>
			</PopularButtonContainer>
		</>
	)
}

