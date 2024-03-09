import React from 'react'
import Slider from 'react-slick'
import GalleryHeader from './GalleryHeader.js'
import PosterCard from '../../UI/Cards/PosterCard/PosterCard'
import { useCarouselButton } from '../../../hooks'
import { PosterCardPlaceholder } from '../../UI/Cards/PosterCard/PosterCardPlaceholder'
import { createArray } from '../../../helpers/simple'
import Gallery from '../../../blocks/Gallery/index.js'
import VirtualVisibility from '../../../context/VirtualVisibility.js'

const responsive = [
	{
		breakpoint: 238,
		settings: {
			slidesToShow: 0,
		},
	},
	{
		breakpoint: 498,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
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
	adaptiveHeight: true,
	// autoplay: true,
	lazyLoad: true,
	cssEase: 'linear',
	slidesToShow: 6,
	slidesToScroll: 5,
	pauseOnHover: true,
	swipeToSlide: true,
	responsive,
}

const placeholders = createArray(6)

const MediaCarousel = ({ list, label, loaded }) => {
	const {sliderRef, prev, next} = useCarouselButton()

	return (
		<Gallery $paddingBottom='lg'>
			<GalleryHeader
				next={next}
				prev={prev}
				label={label}
			/>
			<VirtualVisibility>
				<Slider
					ref={sliderRef}
					{...settings}
				>
					{loaded ?
						list.map((film) => (
							<PosterCard
								film={film}
								key={film.id}
							/>
						))
						:
						placeholders.map((index) => (
							<PosterCardPlaceholder key={index}/>
						))}
				</Slider>
			</VirtualVisibility>
		</Gallery>
	)
}

export default MediaCarousel
