
import { PopularCardPlaceholder } from '../../UI/Cards/PopularCard/PopularCardPlaceholder';
import { createArray } from '../../../helpers/simple';

const mainSlidesPlaceholders = createArray(2)
const mediaSlidesPlaceholders = createArray(6)

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
      <div className='layout_placeholder'>
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
        </div>
      </div >
    </>
  )
}

