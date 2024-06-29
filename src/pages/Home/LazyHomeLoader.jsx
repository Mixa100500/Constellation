import { useEffect, useState } from 'react';
import CarouselCartoons from '../../compositions/Carousel/CartoonsCarousel.jsx'
import { CarouselSerials } from '../../compositions/Carousel/SerialsCarousel.jsx'
import { usePageLoadedSet } from '../../context/PageLoadProvider.jsx'

export const LazyHomeLoader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const pageLoaded = usePageLoadedSet()

  useEffect(() => {
    if(loadingProgress <= 2) {
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
      {checkLoading(1) && <CarouselCartoons />}
      {checkLoading(2) && <CarouselSerials />}
      {/* {checkLoading(2) && <div>hello</div>} */}
    </>
  );
};
