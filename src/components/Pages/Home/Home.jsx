// import CarouselMovies from '../../../compositions/Carousel/MoviesCarousel'
// import CarouselSerials from '../../../compositions/Carousel/SerialsCarousel'
// import Layout from '../../Layout/Layout'
import { PopularCarousel } from '../../../compositions/Carousel/PopularCarousel'
// import CarouselCartoons from '../../../compositions/Carousel/CartoonsCarousel'
import { createArray } from '../../../helpers/simple';
import useEmblaCarousel from 'embla-carousel-react'
import { PopularCardPlaceholder } from '../../UI/Cards/PopularCard/PopularCardPlaceholder';

const placeholders = createArray(4)

export const PopularSkeleton = () => {
  const [emblaRef] = useEmblaCarousel({
    // slidesToScroll: 'auto',
		slidesToScroll: 2,
		// breakpoints: {
		// 	'(min-width: 517px)': { slidesToScroll: 2 }
		// },
    loop: true,
		// containScroll: "trimSnaps"
		containScroll: true
  })

  return (
		<div className="embla"
			ref={emblaRef}
		>
			<div className="embla__container">
				{placeholders.map((item) => (
					<PopularCardPlaceholder key={item} />
				))}
			</div>
		</div>
  )
}

const Home = () => {

	return (
		<>
			<PopularSkeleton />
		</>
	)

	// return (
	// 		<>
	// 			<PopularCarousel />
	// 			<Layout>
	// 				<CarouselMovies />
	// 				<CarouselSerials />
	// 				<CarouselCartoons />
	// 			</Layout>
	// 		</>
	// )
}

export default Home
