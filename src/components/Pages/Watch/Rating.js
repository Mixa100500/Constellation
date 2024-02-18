const styleRating = {
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: '30px',
}

const styleOwnerRating = {
	color: 'var(--second-color)',
}


export const Rating = ({ label, rating }) => {
	return (
		<div style={styleRating}>
			<div style={styleOwnerRating}>{label}</div>
			<div>{rating}</div>
		</div>
	)
}