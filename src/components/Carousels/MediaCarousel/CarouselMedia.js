import React from 'react'
import Slider from 'react-slick'
import MediaCarouselHeader from './Header'
import Card from './Card'
import styled from 'styled-components'
import { useCarouselButton } from '../../../hooks'

const CarouselContiner = styled.div`
  position: relative;

	.title {
		margin: 0;
		font-size: 0.8rem;
	}

	.slick-list {
		padding: 0 0 1.5rem;
	}

	.date {
		font-size: 0.7rem;
		color: var(--second-color);
	}

	.slick-arrow.slick-prev,
	.slick-arrow.slick-next {
		display: none !important;
	}

	.card-img {
		transition: transform 0.3s;
		transform-origin: bottom;

		max-width: 100%;
		aspect-ratio: 2 / 3;
		border-radius: 8px;
	}

	.card-img:hover {
		transform: scaleY(1.04) scaleX(1.03);
	}

	a {
		text-decoration: none;
		color: white;
		transition: color 0.5s ease;
	}

	a:hover {
		color: var(--button-bg-color);
	}
`

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
	responsive,
}

const MediaCarousel = ({ list, label }) => {
	const {sliderRef, prev, next} = useCarouselButton()

	return (
		<CarouselContiner>
			<MediaCarouselHeader
				next={next}
				prev={prev}
				label={label}
			/>
			<Slider
				ref={sliderRef}
				{...settings}>
				{list.map((film) => (
					<Card
						film={film}
						key={film.id}
					/>
				))}
			</Slider>
		</CarouselContiner>
	)
}

export default MediaCarousel
