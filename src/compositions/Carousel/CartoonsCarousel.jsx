import { memo, useState } from 'react'
import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel.jsx'
import { ScrollLoader } from '../Pagination/ScrollLoader.jsx'
// import { useLazyGetSectionQuery } from '../../services/request/themoviedbService'
import { allRequestParams, collectionsNames } from '../Router/options.jsx'
import { useLazyGetSectionQuery } from '../../services/request/themoviedbService.jsx'
import { useParams } from 'react-router-dom'

const description = collectionsNames.cartoons

const CarouselCartoons = memo(() => {
	const query = { ...allRequestParams, section: 1, type: collectionsNames.movies.name, genres: '16' }
	const [fetch, { data, isSuccess }] = useLazyGetSectionQuery()
	const initializeCartoon = () => {
		fetch(query)
	}
	
	
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
