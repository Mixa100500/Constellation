import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel'
import { ScrollLoader } from '../../components/Pagination/ScrollLoader'
import { collectionsNames } from '../Router/options'
import { useLazyGetSectionQuery } from '../../services/request/themoviedbService'

const CarouselSerials = () => {

	const [fetchPage, { data, isSuccess }] = useLazyGetSectionQuery()
	
	const initializeSerials = () => {
    fetchPage({ section: 1, type: collectionsNames.serials.name })
  }
	return (
		<>
			<ScrollLoader fetchData={initializeSerials} >
				<MediaCarousel
					loaded={isSuccess}
					list={data?.list || []}
					description={collectionsNames.serials}
				/>
				</ScrollLoader>
		</>
	)
}

export default CarouselSerials
