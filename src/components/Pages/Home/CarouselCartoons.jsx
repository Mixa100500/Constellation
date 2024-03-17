import MediaCarousel from '../../Carousels/CarouselMedia/CarouselMedia'
import { useSelector } from 'react-redux'
import {
	initializeCartoon,
	selectCartoonsLoadingState,
	selectCartoonsState,
} from '../../../reducers/сartoonCollectionReducer'
import { ScrollLoader } from '../../Pagination/ScrollLoader'

const CarouselCartoons = () => {
	const loaded = useSelector(selectCartoonsLoadingState)
	const cartoons = useSelector(selectCartoonsState)

	return (
		<>
			<ScrollLoader fetchData={initializeCartoon} >
				<MediaCarousel
					loaded={loaded}
					list={cartoons}
					label={'cartoons'}
				/>
			</ScrollLoader>
		</>
	)
}

export default CarouselCartoons
