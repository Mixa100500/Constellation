import CarouselMovies from '../../../compositions/Carousel/MoviesCarousel'
import CarouselSerials from '../../../compositions/Carousel/SerialsCarousel'
import Layout from '../../Layout/Layout'
import { PopularCarousel } from '../../../compositions/Carousel/PopularCarousel'
import CarouselCartoons from '../../../compositions/Carousel/CartoonsCarousel'

const Home = () => {

	return (
			<>
				<PopularCarousel />
				<Layout>
					<CarouselMovies />
					<CarouselSerials />
					<CarouselCartoons />
				</Layout>
			</>
	)
}

export default Home
