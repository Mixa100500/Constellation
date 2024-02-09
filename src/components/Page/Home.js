import React from 'react'
import CarouselPopular from '../СarouselPopular'
import CarouselMovies from '../CarouselMovies'
import CarouselSerials from '../CarouselSerials'
import Layout from '../UI/Layout'
import CarouselCartoons from '../CarouselCartoons'

const Home = () => {
	return (
		<main>
			<CarouselPopular />
			<Layout dark={true}>
				<CarouselMovies />
			</Layout>
			<Layout>
				<CarouselSerials />
			</Layout>
			<Layout>
				<CarouselCartoons />
			</Layout>
		</main>
	)
}

export default Home
