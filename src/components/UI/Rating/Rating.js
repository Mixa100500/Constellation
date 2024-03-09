import PropTypes from 'prop-types'

const styleRating = {
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: '30px',
}

const styleOwnerRating = {
	color: 'var(--primary-color)',
}



const Rating = ({ label, rating }) => {
	return (
		<div style={styleRating}>
			<div style={styleOwnerRating}>{label}</div>
			<div>{rating}</div>
		</div>
	)
}

Rating.propTypes = {
  label: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

export {
	Rating
}