import { memo, useState } from 'react'
import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel.jsx'
import { ScrollLoader } from '../../components/Pagination/ScrollLoader.jsx'
// import { useLazyGetSectionQuery } from '../../services/request/themoviedbService'
import { allRequestParams, collectionsNames } from '../Router/options.jsx'
import { useGetSectionQuery } from '../../services/request/themoviedbService.jsx'

const description = collectionsNames.cartoons

const CarouselCartoons = memo(() => {
	const [startLoading, setStartLoading] = useState(false)
	const query = { ...allRequestParams, section: 1, type: collectionsNames.movies.name, genres: '16' }
	const { data, isSuccess } = useGetSectionQuery(query, {
    skip: !startLoading
  })
	
	const initializeCartoon = () => {
		setStartLoading(true)
  }
	return (
		<>
			<ScrollLoader fetchData={initializeCartoon}>
				<MediaCarousel
					lazyImage={true}
					loaded={isSuccess}
					list={data?.list || []}
					description={description}
				/>
			</ScrollLoader>
		</>
	)
})

CarouselCartoons.displayName  = 'CarouselCartoons'

export default CarouselCartoons
