import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel.jsx'
import { ScrollLoader } from '../Pagination/ScrollLoader.jsx'
import { useLazyGetRecommendationsQuery } from '../../services/request/themoviedbService.jsx'
import { useParams } from 'react-router-dom'
import { collectionsNames } from '../Router/options.jsx'

const description = collectionsNames.recommendation

const CarouselRecommend = () => {
	const params = useParams()
	const [fetch, { data, isSuccess }] = useLazyGetRecommendationsQuery()
	const initializeRecommend = () => {
    fetch(params)
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
