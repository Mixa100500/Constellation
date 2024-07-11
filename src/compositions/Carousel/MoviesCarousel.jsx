import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel.jsx'
// import { useSelector } from 'react-redux'
import { ScrollLoader } from '../Pagination/ScrollLoader.jsx'
import { allRequestParams, collectionsNames } from '../Router/options.jsx'
import { useLazyGetSectionQuery } from '../../services/request/themoviedbService.jsx'
import { memo, } from 'react'

const CarouselMovies = memo(() => {
	const query = { ...allRequestParams, section: 1, type: collectionsNames.movies.name, }
	const [fetch, { data, isSuccess }] = useLazyGetSectionQuery()
	const initializeMovies = () => {
		fetch(query)
	}

	
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
