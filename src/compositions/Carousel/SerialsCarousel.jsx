import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel'
import { ScrollLoader } from '../../components/Pagination/ScrollLoader'
import { collectionsNames } from '../Router/options'
import { useGetSectionQuery } from '../../services/request/themoviedbService'
import { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { selectIsCurrentChunkLoading } from '../../reducers/homePageLoadingReducer/homePageLoadingReducer'
import { memo } from 'react'

export const CarouselSerials = memo(() => {
	const [startLoading, setStartLoading] = useState(false)
	const query = { section: 1, type: collectionsNames.serials.name }
	const { data, isSuccess } = useGetSectionQuery(query, {
    skip: !startLoading
  })
	
	const initializeSerials = () => {
		setStartLoading(true)
  }
	return (
		<>

			<ScrollLoader fetchData={initializeSerials} >
				<MediaCarousel
					lazyImage={true}
					loaded={isSuccess}
					list={data?.list || []}
					description={collectionsNames.serials}
				/>
				</ScrollLoader>
		</>
	)
})

CarouselSerials.displayName = 'CarouselSerials'

