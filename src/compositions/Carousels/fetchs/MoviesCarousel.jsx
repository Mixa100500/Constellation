import MediaCarousel from '../MediaCarousel/MediaCarousel.jsx'
// import { useSelector } from 'react-redux'
import { ScrollLoader } from '../../Pagination/ScrollLoader.jsx'
import { allRequestParams, collectionsNames } from '../../Router/options.jsx'
import { useLazyGetSectionQuery } from '../../../slices/Api/movieApiSlice.js'
import { memo, useCallback } from 'react'
const QUERY_MOVIES = { ...allRequestParams, section: 1, type: collectionsNames.movies.name, }

const CarouselMovies = memo(() => {
	const [fetch, { data, isSuccess }] = useLazyGetSectionQuery()
	const initializeMovies = useCallback(() => {
		fetch(QUERY_MOVIES)
	}, [fetch])

	
	return (
			<ScrollLoader fetchData={initializeMovies} >
				<MediaCarousel
					loaded={isSuccess}
					list={data?.list || []}
					description={collectionsNames.movies}
				/>
			</ScrollLoader>
	)
})

CarouselMovies.displayName = 'CarouselMovies'

export default CarouselMovies
