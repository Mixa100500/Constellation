import Slider from 'react-slick'
import GalleryHeader from './GalleryHeader.jsx'
import PosterCard from '../../UI/Cards/PosterCard/PosterCard.jsx'
import { useCarouselButton } from '../../../hooks/index.jsx'
import { PosterCardPlaceholder } from '../../UI/Cards/PosterCard/PosterCardPlaceholder.jsx'
import { createArray } from '../../../helpers/simple.jsx'
import Gallery from '../../../blocks/Gallery/index.jsx'
import VirtualVisibility from '../../../context/VirtualVisibility.jsx'
import PropTypes from 'prop-types'
import { useLazyLoadContent } from '../../../hooks/useLazyLoadContent.jsx'

const responsive = [
	// {
	// 	breakpoint: 238,
	// 	settings: {
	// 		slidesToShow: 0,
	// 	},
	// },
	{
		breakpoint: 498,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		},
	},
	{
		breakpoint: 758,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 2,
		},
	},
	{
		breakpoint: 850,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 3,
		},
	},
	{
		breakpoint: 1018,
		settings: {
			slidesToShow: 5,
			slidesToScroll: 4,
		},
	},
]

const settings = {
	infinite: true,
	speed: 500,
	autoplaySpeed: 5000,
	// adaptiveHeight: true,
	// autoplay: true,
	lazyLoad: true,
	// cssEase: 'linear',
	slidesToShow: 6,
	slidesToScroll: 5,
	// pauseOnHover: true,
	swipeToSlide: true,
	responsive,
}

const placeholders = createArray(6)


const MediaCarousel = ({ list, description, loaded }) => {
	const {sliderRef, prev, next} = useCarouselButton()

	// const loader = () => {
	// 	if(list.length) {
	// 		return (
	// 			list.map((film) => (
	// 				<PosterCard
	// 					film={film}
	// 					key={film.id}
	// 				/>
	// 			))
	// 		)
	// 	}
	// 	return (placeholders.map((index) => (
	// 		<PosterCardPlaceholder key={index}/>
	// 	)))
	// }

	const renderContent = () => (
		list.map((info) => (
			<PosterCard key={info.id} info={info}/>
		))
	)

	const loadingContent = () => (
		placeholders.map((index) => (
		<PosterCardPlaceholder key={index}/>
	)))

	const result = useLazyLoadContent({
		isLoaded: loaded,
		loadingContent,
		renderContent,
		fallbackContent: loadingContent,
	})

	// const result = loadingContent()

	return (
		<Gallery $paddingBottom='lg'>
			<GalleryHeader
				next={next}
				prev={prev}
				description={description}
			/>
			<VirtualVisibility>
				<Slider
					ref={sliderRef}
					{...settings}
				>
					{result}
				</Slider>
			</VirtualVisibility>
		</Gallery>
	)
}

MediaCarousel.propTypes = {
  list: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
	description: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

export default MediaCarousel
