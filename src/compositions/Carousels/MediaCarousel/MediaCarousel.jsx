import GalleryHeader from './GalleryHeader.jsx'
import PosterCard from '../../../components/Cards/PosterCard/PosterCard.jsx'
import { calcMediaSlidePerView, createArray } from '../../../helpers/simple.jsx'
import Gallery from '../../../blocks/Gallery/index.jsx'
import PropTypes from 'prop-types'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from '../../../hooks/usePrevNextButtons.jsx'
import { useCallback, useEffect, useRef, useState } from 'react'


const placeholders = createArray(20)

const MediaCarousel = ({ list, description, loaded, lazyImage }) => {
	const ref = useRef({
		firstRender: true,
		lastImage: null
	})

	const [lastImageLoaded, setLastImageLoaded] = useState(false);
	const [slidesInView, setSlidesInView] = useState([])
	const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 2,
		breakpoints: {
			'(min-width: 420px)': { slidesToScroll: 3 },
			'(min-width: 620px)': { slidesToScroll: 4 },
			'(min-width: 820px)': { slidesToScroll: 5 },
			'(min-width: 1018px)': { slidesToScroll: 6 },
		},
    loop: true,
  })
	
	const updateSlidesInView = useCallback((emblaApi) => {
    setSlidesInView((slidesInView) => {
			const length = emblaApi.slideNodes().length
      if (slidesInView.length === length && length === 20) {
        emblaApi.off('slidesInView', updateSlidesInView)
      }
			let currentSlidesInView = emblaApi
				.slidesInView()

			if(ref.current.firstRender) {
				const slide = calcMediaSlidePerView()
				currentSlidesInView = currentSlidesInView.slice(0, slide + 1)
				ref.current.lastImage = slide
			}

			ref.current.firstRender = false;
			const inView = currentSlidesInView
        .filter((index) => !slidesInView.includes(index))
				.slice(0, currentSlidesInView.length)
      return slidesInView.concat(inView)
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    updateSlidesInView(emblaApi)
    emblaApi.on('slidesInView', updateSlidesInView)
    emblaApi.on('reInit', updateSlidesInView)
  }, [emblaApi, updateSlidesInView])

	const {
		onPrevButtonClick: prev,
		onNextButtonClick: next,
	} = usePrevNextButtons(emblaApi)

	let slides
	if(lastImageLoaded) {
		slides = placeholders
	} else {
		slides = placeholders.slice(0, 6)
	}
	const renderContent = () => (
		slides.map((index) => {
			const inView = slidesInView.indexOf(index - 1) > -1
			const info = list[index - 1]
			const propInfo = (loaded && inView) ? info : undefined
			const currentIsLast = ref.current.lastImage === index
			const propSetLastImage = currentIsLast ? setLastImageLoaded : undefined
			return (
				<PosterCard
					key={index}
					index={index}
					checkView={true}
					lazy={lazyImage}
					// key={info.id}
					info={propInfo}
					setLastImageLoaded={propSetLastImage}
					// inView={inView}
				/>
		)}
	))

	return (
		<Gallery $paddingBottom='lg'>
			<GalleryHeader
				next={next}
				prev={prev}
				description={description}
				showButton={lastImageLoaded}
			/>
				<div className="media_carousel__wrapper" ref={emblaRef} >
					<Gallery.Body>
						{renderContent()}
					</Gallery.Body>
				</div>
		</Gallery>
	)
}

MediaCarousel.propTypes = {
  list: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
	description: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
	lazyImage: PropTypes.bool,
}

export default MediaCarousel
