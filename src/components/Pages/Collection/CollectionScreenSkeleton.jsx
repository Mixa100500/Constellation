import { createArray } from '../../../helpers/simple.jsx';
import { PosterPlaceholder } from '../../UI/Cards/PosterCard/PosterPlaceholder.jsx';
import { MediaCarouselPlaceholder } from '../../UI/Carousel/MediaCarousel/Placeholder.jsx';
import "./Placeholder.css";

export const CollectionScreenSkeleton = () => {
  return (
    <div className='layout__placeholder'>
      <div className='filter__placeholder'></div>
      <MediaCarouselPlaceholder />
    </div>
  )
}

