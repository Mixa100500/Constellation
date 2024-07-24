import PropTypes from 'prop-types'
import styled from 'styled-components'

const RatingWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
`

const Label = styled.div`
	color: var(--primary-color);
`



const Rating = ({ mediaInfo, label }) => {

	let rating = mediaInfo.vote_average || ' '

	return (
		<RatingWrapper>
			<Label>{label}</Label>
			<div>{rating}</div>
		</RatingWrapper>
	)
}

Rating.propTypes = {
  label: PropTypes.string.isRequired,
	mediaInfo: PropTypes.shape({
    vote_average: PropTypes.number,
  }),
}

export {
	Rating
}