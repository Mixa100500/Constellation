import MediaCarousel from '../MediaCarousel/MediaCarousel.jsx'
import { ScrollLoader } from '../../Pagination/ScrollLoader.jsx'
import { useLazyGetRecommendationsQuery } from '../../../slices/Api/movieApiSlice.js'
import { useParams } from 'react-router-dom'
import { collectionsNames } from '../../Router/options.jsx'
import { useCallback } from 'react'

const description = collectionsNames.recommendation

const CarouselRecommend = () => {
	const params = useParams()
	const [fetch, { data, isSuccess }] = useLazyGetRecommendationsQuery()

	const initializeRecommend = useCallback(() => {
    fetch(params)
  }, [params, fetch])
	
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
