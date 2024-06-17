import CarouselMovies from '../../../compositions/Carousel/MoviesCarousel'
import { MainCarousel } from '../../Carousels/MainCarousel/MainCarousel';
import Layout from '../../Layout/Layout'
// import { PopularCarousel } from '../../../compositions/Carousel/PopularCarousel'

import { LazyHoneLoader } from './LazyHomeLoader';

// const mediaSlidesPlaceholders = createArray(6)
const Home = () => {
	return (
		<>
			<MainCarousel />
			<Layout>
				<CarouselMovies />
				<LazyHoneLoader />
				

				{/* <div className='padding-horizontal'>
          <div className='media-carousel-placeholder__header-placeholder'>
        </div>
        </div>
        <div className='media-carousel-placeholder__container'>
          {mediaSlidesPlaceholders.map((item) => (
            <div key={item} className='media-carousel__slide-container-placeholder padding-horizontal padding-top'>
              <div className='media__slide__placeholder-content'></div>
              <div className='title-placeholder'></div>
              <div className='date-placeholder'></div>
            </div>
          ))}
        </div>
				<div className='padding-horizontal'>
          <div className='media-carousel-placeholder__header-placeholder'>
        </div>
        </div>
        <div className='media-carousel-placeholder__container'>
          {mediaSlidesPlaceholders.map((item) => (
            <div key={item} className='media-carousel__slide-container-placeholder padding-horizontal padding-top'>
              <div className='media__slide__placeholder-content'></div>
              <div className='title-placeholder'></div>
              <div className='date-placeholder'></div>
            </div>
          ))}
        </div> */}
				{/* <CarouselSerials /> */}
				{/* <CarouselCartoons /> */}
			</Layout>
		</>
	)

	// return (
	// 	<PopularCarousel />
	// )
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
