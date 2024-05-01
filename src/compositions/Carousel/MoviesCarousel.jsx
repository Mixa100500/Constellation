import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel'
// import { useSelector } from 'react-redux'
import { ScrollLoader } from '../../components/Pagination/ScrollLoader'
import { collectionsNames } from '../Router/options'
import { useLazyGetSectionQuery } from '../../services/request/themoviedbService'

const CarouselMovies = () => {

	const [fetchPage, { data, isSuccess }] = useLazyGetSectionQuery()
	
	const initializeMovies = () => {
    fetchPage({ section: 1, type: collectionsNames.movies.name })
  }

	return (
		<>
			<ScrollLoader fetchData={initializeMovies} >
				<MediaCarousel
					loaded={isSuccess}
					list={data || []}
					description={collectionsNames.movies}
				/>
			</ScrollLoader>
		</>
	)
}

export default CarouselMovies
