import {
	clearReview,
	fetchReviews,
	selectOpenedMovieReviewList,
	selectOpenedMovieReviewLoaded,
} from '../../../reducers/currentWatchReducer'
import { useDispatch, useSelector } from 'react-redux'
import { H2 } from '../../../elements/H2'
import { ReviewItem } from './ReviewItem'
import { useEffect } from 'react'
import { useWatchParams } from '../../../hooks'
import { LazyLoadContent } from '../../Pagination/LazyLoadContent'
import { createArray } from '../../../helpers/simple'

const Reviews = () => {
	const { isMovie, id } = useWatchParams()
	const list = useSelector(selectOpenedMovieReviewList)
	const loaded = useSelector(selectOpenedMovieReviewLoaded)
	const dispatch = useDispatch()
	const query = { isMovie, id }
	
	const fetchData = () => {
		dispatch(fetchReviews(query))
	}

	useEffect(() => {
		() => {
			dispatch(clearReview())	
		}
	}, [id]);

	const renderContent = () => (
		list.map((review) => (
			<ReviewItem
				key={review.id}
				review={review}
			/>
		))
	)


	const loadingContent = () => <div>loading</div>
	const fallbackContent = () => <div>No reviews yet.</div>
	return (
		<div>
			<H2
				$paddingTop='xl'
				$paddingBottom='xl'
      >
				Reviews
			</H2>
			<LazyLoadContent
				hello={'hello'}
				isLoaded={loaded}
				fetchData={fetchData}
				loadingContent={loadingContent}
				fallbackContent={fallbackContent}
				renderContent={renderContent}
			>
			</LazyLoadContent>
			{<listDivs/>}
			{<listDivs/>}
		</div>
	)
}

export default Reviews
