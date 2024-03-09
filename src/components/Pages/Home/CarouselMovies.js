import React from 'react'
import MediaCarousel from '../../Carousels/CarouselMedia/CarouselMedia'
import {
	selectMoviesState,
	selectMoviesLoadingState,
	initializeMovies,
} from '../../../reducers/moviesCollectionReducer'
import { useSelector } from 'react-redux'
import { ScrollLoader } from '../../Pagination/ScrollLoader'

const CarouselMovies = () => {
	const loaded = useSelector(selectMoviesLoadingState)
	const films = useSelector(selectMoviesState)

	return (
		<>
			<ScrollLoader fetchData={initializeMovies} >
				<MediaCarousel
					loaded={loaded}
					list={films}
					label={'movies'}
				/>
			</ScrollLoader>
		</>
	)
}

export default CarouselMovies
