import MediaCarousel from '../../Carousels/MediaCarousel/MediaCarousel'
import { ScrollLoader } from '../../Pagination/ScrollLoader'
import { useLazyGetRecommendationsQuery } from '../../../services/request/themoviedbService'
import { useParams } from 'react-router-dom'
import { collectionsNames } from '../../../compositions/Router/options'

const description = collectionsNames.recommendation

const CarouselRecommend = () => {
	const { type, id } = useParams()

	const [fetch, { data, isSuccess }] = useLazyGetRecommendationsQuery()
	const initializeRecommend = () => {
    fetch({ id, type })
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
