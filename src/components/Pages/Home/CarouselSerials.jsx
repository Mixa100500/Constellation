import MediaCarousel from '../../Carousels/CarouselMedia/CarouselMedia'
import { useSelector } from 'react-redux'
import {
	initializeSerials,
	selectSerialsLoadingState,
	selectSerialsState,
} from '../../../reducers/serialsCollectionReducer'
import { ScrollLoader } from '../../Pagination/ScrollLoader'

const CarouselSerials = () => {
	const loaded = useSelector(selectSerialsLoadingState)
	const serials = useSelector(selectSerialsState)

	return (
		<>
			<ScrollLoader fetchData={initializeSerials} >
				<MediaCarousel
					loaded={loaded}
					list={serials}
					label={'serials'}
				/>
				</ScrollLoader>
		</>
	)
}

export default CarouselSerials
