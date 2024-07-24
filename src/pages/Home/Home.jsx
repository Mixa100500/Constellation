import { LazyHomeLoader } from './Compositions/LazyHomeLoader.jsx';
import { MainCarousel } from '../../compositions/Carousels/MainCarousel/MainCarousel.jsx'
import Layout from '../../components/Layout/Layout.jsx'
import { PageLoadProvider } from '../../context/PageLoadProvider.jsx'
import CarouselMovies from '../../compositions/Carousels/fetchs/MoviesCarousel.jsx'

// const mediaSlidesPlaceholders = createArray(6)
const Home = () => {
	return (
		<>
			<PageLoadProvider>
				<MainCarousel />
				<Layout>
					<LazyHomeLoader />
				</Layout>
			</PageLoadProvider>
				

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
		</>
	)
}

export default Home
