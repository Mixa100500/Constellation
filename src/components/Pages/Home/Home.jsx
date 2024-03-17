import { useEffect } from 'react'
import CarouselPopular from '../../Carousels/CarouselPopular/СarouselPopular'
import CarouselMovies from './CarouselMovies'
import CarouselSerials from './CarouselSerials'
import Layout from '../../Layout/Layout'
import CarouselCartoons from './CarouselCartoons'
import { useInitializationHome } from '../../../hooks/Initializer'

const Home = () => {
	const stateInitializerHome = useInitializationHome()

	useEffect(() => {
    stateInitializerHome()
  }, [])

	return (
			<>
				<CarouselPopular />
				<Layout>
					<CarouselMovies />
					<CarouselSerials />
					<CarouselCartoons />
				</Layout>
			</>
	)
}

export default Home
