import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel.jsx'
import { ScrollLoader } from '../Pagination/ScrollLoader.jsx'
import { allRequestParams, collectionsNames } from '../Router/options.jsx'
import { useLazyGetSectionQuery } from '../../services/request/themoviedbService.jsx'
// import { useSelector } from 'react-redux'
// import { selectIsCurrentChunkLoading } from '../../slices/homePageLoadingReducer/homePageLoadingReducer'
import { memo } from 'react'

export const CarouselSerials = memo(() => {
	const query = { ...allRequestParams, section: 1, type: collectionsNames.serials.name }
	const [fetch, { data, isSuccess }] = useLazyGetSectionQuery()
	const initializeSerials = () => {
		fetch(query)
  }

	return (
		<ScrollLoader fetchData={initializeSerials} >
			<MediaCarousel
				lazyImage={true}
				loaded={isSuccess}
				list={data?.list || []}
				description={collectionsNames.serials}
			/>
		</ScrollLoader>
	)
})

CarouselSerials.displayName = 'CarouselSerials'

