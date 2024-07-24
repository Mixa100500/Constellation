import MediaCarousel from '../MediaCarousel/MediaCarousel.jsx'
import { ScrollLoader } from '../../Pagination/ScrollLoader.jsx'
import { allRequestParams, collectionsNames } from '../../Router/options.jsx'
import { useLazyGetSectionQuery } from '../../../slices/Api/movieApiSlice.js'
// import { useSelector } from 'react-redux'
// import { selectIsCurrentChunkLoading } from '../../slices/homePageLoadingReducer/homePageLoadingReducer'
import { memo, useCallback } from 'react'

const QUERY_SERIALS = { ...allRequestParams, section: 1, type: collectionsNames.serials.name }
export const CarouselSerials = memo(() => {
	const [fetch, { data, isSuccess }] = useLazyGetSectionQuery()
	const initializeSerials = useCallback(() => {
		fetch(QUERY_SERIALS)
  }, [])

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

