import { PosterPlaceholder } from '../../Cards/PosterCard/PosterPlaceholder.jsx';
import { createArray } from '../../../helpers/simple.jsx';

export const MediaCarouselPlaceholder = () => {
  const placeholders = createArray(6)

  return (
    <>
      <div className='description__placeholder'></div>
      <div className='collection-list__placeholder'>
        {placeholders.map((item) => 
          <PosterPlaceholder key={item}/>
        )}
      </div>
    </>
  )
}