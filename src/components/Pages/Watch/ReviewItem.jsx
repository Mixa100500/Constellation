import { Review } from "./styled"
import PropTypes from 'prop-types'

export const ReviewItem = ({ review }) => {
	return (
		<Review className='review'>
			<div className='review__icon-container'>
				<div className='review__icon-content'>
					<div className='review__icon'></div>
					<div className='review__icon-text'>{review.author[0]}</div>
				</div>
			</div>
			<div className='review__text'>
				<h3 className='review__author'>{review.author}</h3>
				<p className='review__content'>{review.content}</p>
				<p>Rating: {review.author_details.rating}</p>
			</div>
		</Review>
	)
}

ReviewItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author_details: PropTypes.shape({
      rating: PropTypes.number
    })
  }).isRequired
}