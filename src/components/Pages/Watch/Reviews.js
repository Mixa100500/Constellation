import React, { useEffect } from 'react'
import {
	fetchReviews,
	selectOpenedMovieReview,
} from '../../../reducers/currentWatchReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Review } from './styled'
import { ScrollLoader } from '../../Pagination/ScrollLoader'
import { useParams } from 'react-router-dom'
import { H2 } from '../../../elements/H2'
import PropTypes from 'prop-types'

const ReviewItem = ({ review }) => {
	return (
		<Review className='review'>
			<div className='review__icon-contrainer'>
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
	review: PropTypes.object.isRequired,
}

const Reviews = (props) => {
	const isMovie = props.isMovie
	const id = useParams().id
	const { list, loaded, error } = useSelector(selectOpenedMovieReview)
	const query = { isMovie, id }

	return (
		<div>
			<H2
				$paddingTop='xl'
				$paddingBottom='xl'
      >
				Reviews
			</H2>
			{!loaded ? (
				<ScrollLoader
					fetchData={fetchReviews}
					query={query}
        >
					<div>loading...</div>
				</ScrollLoader>
			) : (
				list.map((review) => (
					<ReviewItem
						key={review.id}
						review={review}
					/>
				))
			)}
		</div>
	)
}

Reviews.propTypes = {
  isMovie: PropTypes.bool.isRequired
}

export default Reviews
