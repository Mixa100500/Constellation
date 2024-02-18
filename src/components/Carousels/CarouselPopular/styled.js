import styled from "styled-components"
import { generateContainerStyles, scrollbarWidth } from "../../../helpers/generateBreakpoints"


export const ImgContiner = styled.div`
	position: relative;
	overflow: hidden;
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

export const PopularButtonContainer = styled.div`
	height: 0px;
	margin: 0 auto;
	width: 1090px;
	display: flex;
	justify-content: space-between;

	.carousel-popular__button {
		display: none;
		width: 48px;
		height: 48px;
		opacity: 0.75;
	}

	@media screen and (min-width: 1101px) {
		.carousel-popular__button {
			display: block;
			position: relative;
			z-index: 0;
			top: -216.5px;
		}

		.carousel-popular__button:hover {
			opacity: 1;
			cursor: pointer;
		}
	}
`

const containerPopularStyles = generateContainerStyles()

export const ContainerPopular = styled.div`
	padding: 0 0 40px 0;
	.slick-dots {
		bottom: -50px;
	}

	.slick-prev,
	.slick-next {
		z-index: 1
	}

	.slick-next {
		right: 10px
	}

	.slick-prev {
		left: 10px
	}

	.slick-next:before {
		left: -10px;
		position: relative;
	}
	
	.slick-prev:before,
	.slick-next:before {
		color: white;
		text-shadow: 3px 3px 20px black;
		font-size: 30px;
	}

	.slick-dots li button:before {
		color: white;
	}
	
	.slick-dots li.slick-active button:before {
		color: white;
	}

	@media screen and (min-width: 610px) {
		.slick-dots {
			bottom: -30px;
		}
	}

	@media screen and (min-width: 1101px) {
		width: calc(1200px);
		position: relative;
		left: calc((1200px / 2 - (100vw - ${scrollbarWidth}px) / 2) * -1);

		.slick-arrow.slick-prev,
		.slick-arrow.slick-next {
			display: none !important;
		}
	}

	@media screen and (min-width: 1201px) {
		width: calc(1600px);
		position: relative;
		left: calc((1600px / 2 - (100vw - ${scrollbarWidth}px) / 2) * -1);
	}

	${containerPopularStyles}
`

export const BackdropImg = styled.img`
	max-width: 100%;
	border-radius: 5px;
`