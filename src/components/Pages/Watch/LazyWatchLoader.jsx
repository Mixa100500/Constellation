import { useEffect, useState } from 'react';
import CarouselRecommend from '../../../compositions/Carousel/CarouselRecommend.jsx';
import Reviews from './Reviews.jsx';

export const LazyWatchLoader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    if(loadingProgress <= 2) {
      setLoadingProgress(prev => prev + 1)
      return
    }
  }, [loadingProgress])

  const checkLoading = (chunk) => {
    return loadingProgress >= chunk
  }
  
  return (
    <>
      {checkLoading(1) && <CarouselRecommend />}
      {checkLoading(2) && <Reviews/>}
    </>
  );
}

