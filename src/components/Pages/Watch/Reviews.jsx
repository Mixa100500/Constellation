import {
	selectOpenedMovieReviewList,
	selectOpenedMovieReviewLoaded,
} from '../../../reducers/currentWatch/selectors'
import { clearReview } from "../../../reducers/currentWatch/currentWatchReducer";
import { useDispatch, useSelector } from 'react-redux'
import { H2 } from '../../../elements/H2'
import { ReviewItem } from './ReviewItem'
import { useEffect } from 'react'
import { useFetchReviewsByType } from '../../../hooks'
import { useLazyLoadContent } from '../../../hooks/useLazyLoadContent'
import { useParams } from 'react-router-dom'

const Reviews = () => {
	const list = useSelector(selectOpenedMovieReviewList)
	const loaded = useSelector(selectOpenedMovieReviewLoaded)
	const dispatch = useDispatch()
	const { id } = useParams()

	const fetchReviews = useFetchReviewsByType();
	const fetchData = () => {
		dispatch(fetchReviews(id))
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

	const result = useLazyLoadContent({
		isLoaded: loaded,
		fetchData,
		loadingContent,
		fallbackContent,
		renderContent,
	})

	return (
		<div>
			<H2
				$paddingTop='xl'
				$paddingBottom='xl'
      >
				Reviews
			</H2>
			{result}
		</div>
	)
}

export default Reviews
