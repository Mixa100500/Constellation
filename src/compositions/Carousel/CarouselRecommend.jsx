import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel.jsx'
import { ScrollLoader } from '../Pagination/ScrollLoader.jsx'
import { useGetRecommendationsQuery } from '../../services/request/themoviedbService.jsx'
import { useParams } from 'react-router-dom'
import { collectionsNames } from '../Router/options.jsx'
import { useState } from 'react'

const description = collectionsNames.recommendation

const CarouselRecommend = () => {
	const { type, id } = useParams()
	const [startLoading, setStartLoading] = useState(false)
	const query = { id, type }
	const { data, isSuccess } = useGetRecommendationsQuery(query, {
    skip: !startLoading
  })

	// const [fetch, { data, isSuccess }] = useGetRecommendationsQuery()
	const initializeRecommend = () => {
    setStartLoading(true)
  }
	
	return (
		<ScrollLoader fetchData={initializeRecommend}>
			<MediaCarousel
				loaded={isSuccess}
				list={data || []}
				description={description}
			/>
		</ScrollLoader>
	)
}

export default CarouselRecommend
