import { ReviewItem } from '../../Component/ReviewItem/ReviewItem.jsx'
import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLazyLoadContent } from '../../../../hooks/useLazyLoadContent.jsx'
import { H2 } from '../../../../elements/H2.jsx'
import { useLazyGetReviewsQuery } from '../../../../slices/Api/reviewsApiSlice.js'

const Reviews = () => {
	const { id, type } = useParams()

	const [fetch, { data, isSuccess }] = useLazyGetReviewsQuery()
	const fetchData = useCallback(() => {
		fetch({ id, type })
	}, [id, type])

	const renderContent = () => (
		data.map((review) => (
			<ReviewItem
				key={review.id}
				review={review}
			/>
		))
	)

	const loadingContent = () => <div>loading</div>
	const fallbackContent = () => <div>No reviews yet.</div>

	const result = useLazyLoadContent({
		isLoaded: isSuccess,
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
