import styled from "styled-components"


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
		border-radius: var(--backdrop-radius);
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

export const BackdropImg = styled.img`
	max-width: 100%;
	border-radius: var(--backdrop-radius);
`
export const PlaceholderContiner = styled.div`
aspect-ratio: 500 / 281;
max-width: 500px;
`

export const PlaceholderContent = styled.div`
height: 100%;
background-color: var(--primory-bg-color);
border-radius: var(--backdrop-radius);
`

export const PopularImgPlaceholder = styled.div`
	aspect-ratio: 500 / 281;
	max-width: 500px;
	background-color: var(--primory-bg-color);
	border-radius: var(--backdrop-radius);
`