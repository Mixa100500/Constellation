import styled from "styled-components"

export const PopularButtonContainer = styled.div`
	height: 0px;
	margin: 0 auto;
	width: 1090px;
	display: flex;
	justify-content: space-between;

	.carousel-popular__button {
		display: none;
	}
	
	@media screen and (min-width: 1101px) {
		.carousel-popular__button {
			display: block;
			position: relative;
			z-index: 0;
			top: -171px;
		}
	}
`