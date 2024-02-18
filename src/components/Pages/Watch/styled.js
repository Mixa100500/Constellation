import styled from "styled-components"

export const Review = styled.div`
  display: flex;

  .review__icon-contrainer {
    margin-right: 12px;
  }

  .review__icon-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--main-bg-color);
    font-size: 1.7rem;
  }

  .review__icon-content {
    position: relative;
  }

  .review__author {
    margin: 0.8rem 0;
    font-size: 1.5rem;
    padding: 0px;
  }

  .review__icon {
    margin: 0px;
    padding: 1.7rem;
    background-color: var(--button-bg-color);
    border-radius: 3.4rem;
  }
`

export const PosterContainer = styled.div`
	margin-bottom: 30px;

	@media screen and (min-width: 978px) {
		margin-right: 30px;
	}
`

export const Flex = styled.div`
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
`

export const InfoColumnStyled = styled.div`
	& {
		display: flex;
		justify-content: center;
		flex-direction: column;
		max-width: 840px;
		flex: 1 640px;
	}
`

export const GridTwoColumn = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	column-gap: 20px;
	row-gap: 12px;
`

export const OverviewHeader = styled.h3`
	color: var(--second-color);
`

export const DescriptionHeader = styled.div`
	& {
		font-size: 1.17em;
		font-weight: bold;
		text-align: left;
		color: var(--second-color);
	}
`