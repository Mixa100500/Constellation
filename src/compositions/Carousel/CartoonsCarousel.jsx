import { memo, useState } from 'react'
import MediaCarousel from '../../components/Carousels/MediaCarousel/MediaCarousel'
import { ScrollLoader } from '../../components/Pagination/ScrollLoader'
// import { useLazyGetSectionQuery } from '../../services/request/themoviedbService'
import { collectionsNames } from '../Router/options'
import { useGetSectionQuery } from '../../services/request/themoviedbService'

const description = collectionsNames.cartoons

const CarouselCartoons = memo(() => {
	const [startLoading, setStartLoading] = useState(false)
	const query = { section: 1, type: collectionsNames.movies.name }
	const { data, isSuccess } = useGetSectionQuery(query, {
    skip: !startLoading
  })
	
	const initializeCartoon = () => {
		setStartLoading(true)
  }


	return (
		<>
			<ScrollLoader fetchData={initializeCartoon}>
				<MediaCarousel
					lazyImage={true}
					loaded={isSuccess}
					list={data?.list || []}
					description={description}
				/>
			</ScrollLoader>
		</>
	)
})

CarouselCartoons.displayName  = 'CarouselCartoons'

export default CarouselCartoons
