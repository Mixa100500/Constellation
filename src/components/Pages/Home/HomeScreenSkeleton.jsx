// import React from 'react';
// import { ContainerPopular } from '../../Carousels/MainCarousel/styled';
// import Slider from 'react-slick'
// import { settingMainPlaceHolder } from '../../Carousels/MainCarousel/settingsMainCarousel';
import { PopularCardPlaceholder } from '../../UI/Cards/PopularCard/PopularCardPlaceholder';
import { createArray } from '../../../helpers/simple';
// import useEmblaCarousel from 'embla-carousel-react'

const placeholders = createArray(2)

export const HomeScreenSkeleton = () => {
  // const [emblaRef] = useEmblaCarousel({
  //   // slidesToScroll: 'auto',
  //   // loop: true,
  // })

  return (
    <div className="embla"
    // ref={emblaRef}
    >
      <div className="embla__container">
        {placeholders.map((item) => (
          <PopularCardPlaceholder key={item} />
        ))}
      </div>
    </div>
  )
  // return (
  //   <ContainerPopular>
  //     <Slider {...settingMainPlaceHolder} >
  //       {placeholders.map((item) => (
	// 				<PopularCardPlaceholder key={item}/>
	// 			))}
  //     </Slider>
  //   </ContainerPopular>
  // )
}

