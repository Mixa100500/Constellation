import { memo, useCallback, useState } from 'react'
import MediaCarousel from '../MediaCarousel/MediaCarousel.jsx'
import { ScrollLoader } from '../../Pagination/ScrollLoader.jsx'
// import { useLazyGetSectionQuery } from '../../services/request/themoviedbService'
import { allRequestParams, collectionsNames } from '../../Router/options.jsx'
import { useLazyGetSectionQuery } from '../../../slices/Api/movieApiSlice.js'
import { useParams } from 'react-router-dom'

const description = collectionsNames.cartoons
const QUERY_CARTOONS = { ...allRequestParams, section: 1, type: collectionsNames.movies.name, genres: '16' }

const CarouselCartoons = memo(() => {
	const [fetch, { data, isSuccess }] = useLazyGetSectionQuery()
	const initializeCartoon = useCallback(() => {
		fetch(QUERY_CARTOONS)
	}, [fetch])
	
	
	return (
		<ScrollLoader fetchData={initializeCartoon}>
			<MediaCarousel
				lazyImage={true}
				loaded={isSuccess}
				list={data?.list || []}
				description={description}
			/>
		</ScrollLoader>
	)
})

CarouselCartoons.displayName  = 'CarouselCartoons'

export default CarouselCartoons
