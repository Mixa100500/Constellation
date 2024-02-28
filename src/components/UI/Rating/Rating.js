const styleRating = {
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: '30px',
}

const styleOwnerRating = {
	color: 'var(--primary-color)',
}


export const Rating = ({ label, rating }) => {
	return (
		<div style={styleRating}>
			<div style={styleOwnerRating}>{label}</div>
			<div>{rating}</div>
		</div>
	)
}