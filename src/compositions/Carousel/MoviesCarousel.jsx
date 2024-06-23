import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel.jsx'
// import { useSelector } from 'react-redux'
import { ScrollLoader } from '../../components/Pagination/ScrollLoader.jsx'
import { allRequestParams, collectionsNames } from '../Router/options.jsx'
import { useGetSectionQuery } from '../../services/request/themoviedbService.jsx'
import { useState } from 'react'

const CarouselMovies = () => {
	const [startLoading, setStartLoading] = useState(false)
	const query = { ...allRequestParams, section: 1, type: collectionsNames.movies.name, }
	const { data, isSuccess } = useGetSectionQuery(query, {
    skip: !startLoading
  })
	
	const initializeMovies = () => {
		setStartLoading(true)
  }
	
	return (
		<>
			<ScrollLoader fetchData={initializeMovies} >
				<MediaCarousel
					loaded={isSuccess}
					list={data?.list || []}
					description={collectionsNames.movies}
				/>
			</ScrollLoader>
		</>
	)
}

CarouselMovies.displayName = 'CarouselMovies'

export default CarouselMovies
