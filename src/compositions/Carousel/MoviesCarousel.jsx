import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel'
// import { useSelector } from 'react-redux'
import { ScrollLoader } from '../../components/Pagination/ScrollLoader'
import { collectionsNames } from '../Router/options'
import { useGetSectionQuery } from '../../services/request/themoviedbService'
import { useState } from 'react'
import { memo } from 'react'

const CarouselMovies = () => {
	const [startLoading, setStartLoading] = useState(false)
	const query = { section: 1, type: collectionsNames.movies.name }
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
