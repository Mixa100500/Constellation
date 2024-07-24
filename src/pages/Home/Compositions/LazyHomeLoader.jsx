import { useEffect, useState } from 'react';
import CarouselCartoons from '../../../compositions/Carousels/fetchs/CartoonsCarousel.jsx'
import { CarouselSerials } from '../../../compositions/Carousels/fetchs/SerialsCarousel.jsx'
import { usePageLoadedSet } from '../../../context/PageLoadProvider.jsx'
import CarouselMovies from '../../../compositions/Carousels/fetchs/MoviesCarousel.jsx';

export const LazyHomeLoader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const pageLoaded = usePageLoadedSet()

  useEffect(() => {
    if(loadingProgress <= 3) {
      setLoadingProgress(prev => prev + 1)
      return
    }
    pageLoaded(true)
  }, [loadingProgress, pageLoaded]);

  const checkLoading = (chunk) => {
    return loadingProgress >= chunk
  }
  
  return (
    <>
      {checkLoading(1) && <CarouselMovies />}
      {checkLoading(2) && <CarouselCartoons />}
      {checkLoading(3) && <CarouselSerials />}
    </>
  );
};
