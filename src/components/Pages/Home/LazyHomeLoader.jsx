import { useEffect, useState } from 'react';
import { CarouselSerials } from '../../../compositions/Carousel/SerialsCarousel';
import CarouselCartoons from '../../../compositions/Carousel/CartoonsCarousel';
import CarouselMovies from '../../../compositions/Carousel/MoviesCarousel';

export const LazyHoneLoader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0)
  useEffect(() => {
    if(loadingProgress <= 2) {
      setLoadingProgress(prev => prev + 1)
    }
  }, [loadingProgress]);

  const checkLoading = (chunk) => {
    return loadingProgress >= chunk
  }
  return (
    <>
      {checkLoading(1) && <CarouselCartoons />}
      {checkLoading(2) && <CarouselSerials />}
      {/* {checkLoading(2) && <div>hello</div>} */}
    </>
  );
};
