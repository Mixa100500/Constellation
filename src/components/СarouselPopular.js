import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openMovie } from '../reducers/currentWatchReducer'
import styled from 'styled-components'
import left48 from '../images/icons8-chevron-left-48.png'
import right48 from '../images/icons8-chevron-right-48.png'
import play from '../images/play.svg'
import {
	initializePopular,
	selectPopularLoadingState,
	selectPopularState,
} from '../reducers/popularCollectionReducer'

const ContainerPopilar = styled.div`
	.slick-list:active {
		z-index: 10;
	}
`

const ImgContiner = styled.div`
	position: relative;
	overflow: hidden;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	transition: all 0.3s ease;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		opacity: 0;
		transition: all 0.3s ease;
	}

	.play {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: none;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		color: black;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.play img {
		height: 50px;
	}

	&:hover::before {
		opacity: 1;
	}

	&:hover .play {
		display: flex;
	}
`

function generateBreakpoints(start, end, step) {
	const breakpoints = []
	let padding = 76
	let isStart = true
	for (let i = start; i <= end; i += step) {
		if (!isStart) {
			padding += 200
		}

		breakpoints.push({
			breakpoint: i,
			settings: {
				slidesToShow: 2,
				centerPadding: padding + 'px',
			},
		})
		isStart = false
	}
	return breakpoints
}

let responsive = [
	{
		breakpoint: 400,
		settings: {
			slidesToShow: 1,
			centerPadding: '20px',
		},
	},
	{
		breakpoint: 552 + 17,
		settings: {
			slidesToShow: 1,
			centerPadding: '20px',
		},
	},
	{
		breakpoint: 1100,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			centerPadding: '20px',
		},
	},
]

responsive = responsive.concat(generateBreakpoints(1200, 8500, 400))

const settings = {
	dots: true,
	infinite: true,
	speed: 900,
	autoplaySpeed: 5000,
	centerMode: true,
	// autoplay: true,
	lazyLoad: true,
	cssEase: 'linear',
	swipeToSlide: true,
	initialSlide: 10,
	slidesToShow: 2,
	slidesToScroll: 2,
	pauseOnHover: true,
	adaptiveHeight: true,
	responsive,
}

const buttonSvg = {
	width: '48px',
	height: '48px',
}

const basePictureUrl = 'https://image.tmdb.org/t/p'

const Card = ({ info }) => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(openMovie(info))
	}

	return (
		<div className='element_padding card'>
			<Link
				to={`/watch/${info.title ? 'movie' : 'serial'}/${info.id}`}
				onClick={handleClick}>
				<ImgContiner>
					<picture>
						<source
							media='(min-width: 520px)'
							srcSet={`${basePictureUrl}/w500${info.backdrop_path}`}
						/>
						<source
							media='(min-width: 640px)'
							srcSet={`${basePictureUrl}/w300${info.backdrop_path}`}
						/>
						<source
							media='(min-width: 840px)'
							srcSet={`${basePictureUrl}/w400${info.backdrop_path}`}
						/>
						<img
							src={`${basePictureUrl}/w500${info.backdrop_path}`}
							style={{ maxWidth: '100%', borderRadius: '5px' }}
							alt={info.name || info.original_title}
						/>
					</picture>
					<div className='play'>
						<img src={play} />
					</div>
				</ImgContiner>
			</Link>
		</div>
	)
}

const PopularButtonContainer = styled.div`
  height: 0px;
  margin: 0 auto;
  width: 1090px;
  display: flex;
  justify-content: space-between;
`

function CarouselPopular() {
	const dispatch = useDispatch()
	const popular = useSelector(selectPopularState)
	const loaded = useSelector(selectPopularLoadingState)

	useEffect(() => {
		dispatch(initializePopular())
	}, [])

	const sliderRef = useRef()

	const next = () => {
		sliderRef.current.slickNext()
	}

	const prev = () => {
		sliderRef.current.slickPrev()
	}

	if (!loaded) {
		return <div>loading...</div>
	}
	return (
		<>
			<ContainerPopilar className='containerPopilar'>
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
			</ContainerPopilar>
			<PopularButtonContainer>
				<img
					onClick={prev}
					src={left48}
					className='prev'
					style={buttonSvg}
				/>
				<img
					onClick={next}
					src={right48}
					className='next'
					style={buttonSvg}
				/>
			</PopularButtonContainer>
		</>
	)
}

export default CarouselPopular
