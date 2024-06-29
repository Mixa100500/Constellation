
import { PopularCardPlaceholder } from '../../UI/Cards/PopularCard/PopularCardPlaceholder.jsx';
import { createArray } from '../../../helpers/simple.jsx';
import { MediaCarouselPlaceholder } from '../../UI/Carousel/MediaCarousel/Placeholder.jsx';

const mainSlidesPlaceholders = createArray(2)

export const HomeScreenSkeleton = () => {

  return (
    <>
      <div className="main-carousel__placeholder">
        {mainSlidesPlaceholders.map((item) => (
          <div key={item} className='main-carousel__slide-container-placeholder padding-horizontal'>
            <div className='main__slide__placeholder-content'></div>
          </div>
        ))}
      </div>
      <div className='layout__placeholder'>
        <MediaCarouselPlaceholder />
      </div >
    </>
  )
}

