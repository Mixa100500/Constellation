import Gallery from "../../../blocks/Gallery"
import VirtualVisibility from "../../../context/VirtualVisibility"
import { createArray } from "../../../helpers/simple"
import { PosterCardPlaceholder } from "../../UI/Cards/PosterCard/PosterCardPlaceholder"
import Slider from 'react-slick'

const responsive = [
  {
		breakpoint: 238,
		settings: {
			slidesToShow: 0,
		},
	},
	{
    breakpoint: 498,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		},
	},
	{
    breakpoint: 758,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 2,
		},
	},
	{
		breakpoint: 850,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 3,
		},
	},
	{
    breakpoint: 1018,
		settings: {
			slidesToShow: 5,
			slidesToScroll: 4,
		},
	},
]

const settings = {
	lazyLoad: true,
	slidesToShow: 6,
	responsive,
}

const skeletons = createArray(6)

export const SingleLineSkeleton = () => {
  return (
    <Gallery>
      <VirtualVisibility>
        <Slider
          {...settings}
        >
        {skeletons.map((index) => (
          <PosterCardPlaceholder key={index}/>
        ))}
      </Slider>
    </VirtualVisibility>
  </Gallery>
  )
}