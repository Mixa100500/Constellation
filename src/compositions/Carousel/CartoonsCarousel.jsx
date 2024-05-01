import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel'
import { ScrollLoader } from '../../components/Pagination/ScrollLoader'
import { useLazyGetSectionQuery } from '../../services/request/themoviedbService'
import { collectionsNames } from '../Router/options'

const description = collectionsNames.cartoons

const CarouselCartoons = () => {
	const [fetchPage, { data, isSuccess }] = useLazyGetSectionQuery()
	
	const initializeCartoon = () => {
    fetchPage({ section: 1, type: collectionsNames.movies.name, genres: '16' })
  }


	return (
		<>
			<ScrollLoader fetchData={initializeCartoon}>
				<MediaCarousel
					loaded={isSuccess}
					list={data || []}
					description={description}
				/>
			</ScrollLoader>
		</>
	)
}

export default CarouselCartoons
