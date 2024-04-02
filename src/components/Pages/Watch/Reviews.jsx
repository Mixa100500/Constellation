import {
	fetchReviews,
	selectOpenedMovieReview,
} from '../../../reducers/currentWatchReducer'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { H2 } from '../../../elements/H2'
import PropTypes from 'prop-types'
import { ScrollLoader } from '../../Pagination/ScrollLoader'
import { ReviewItem } from './ReviewItem'

const Reviews = (props) => {
	const isMovie = props.isMovie
	const id = useParams().id
	const { list, loaded } = useSelector(selectOpenedMovieReview)
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
