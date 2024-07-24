import { useCallback, useEffect, useState } from "react"
import { getPopular } from "../../../services/request/popular.jsx"
import { collectionExtractor, createArray } from "../../../helpers/simple.jsx"
import { usePrevNextButtons } from "../../../hooks/usePrevNextButtons.jsx"
import { PopularCard } from "../../../components/Cards/PopularCard/PopularCard.jsx"
import useEmblaCarousel from 'embla-carousel-react'
import { PopularCardPlaceholder } from "../../../components/Cards/PopularCard/PopularCardPlaceholder.jsx"
import { ButtonCarousel } from "../../../elements/ButtonCarousel.jsx"
import left48 from "../../../images/icons8-chevron-left-48.png"
import right48 from "../../../images/icons8-chevron-right-48.png"
// import Autoplay from 'embla-carousel-autoplay'
const placeholders = createArray(20)
import { PopularButtonContainer } from "./styled.jsx"
import { usePageLoaded } from "../../../context/PageLoadProvider.jsx"

export const MainCarousel = () => {
	const [popular, setPopular] = useState([])
	const [slidesInView, setSlidesInView] = useState([])
	const pageLoaded = usePageLoaded()
	
	const initializePopular = async () => {
		const popular = await getPopular()
		setPopular(collectionExtractor(popular, true))
	}
	const loaded = popular.length > 0

  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
		breakpoints: {
			'(min-width: 517px)': { slidesToScroll: 2 },
		},
    loop: true,
  }, [
    // Autoplay({
		// 	// playOnInit: true,
		// 	delay: 7000,
		// 	stopOnInteraction: false,
		// 	stopOnMouseEnter: true,
		// })
  ])

	const {
		onPrevButtonClick,
		onNextButtonClick
	} = usePrevNextButtons(emblaApi)
	
	useEffect(() => {
		initializePopular()
	}, []);

	const updateSlidesInView = useCallback((emblaApi) => {
		setSlidesInView((slidesInView) => {
			if (slidesInView.length === emblaApi.slideNodes().length) {
				emblaApi.off('slidesInView', updateSlidesInView)
			}
			let inCurrentView = emblaApi.slidesInView()
			const inView = inCurrentView
				.filter((index) => !slidesInView.includes(index))
			if(pageLoaded) {
				return slidesInView.concat(inView)
			}
			if(inCurrentView.length <= 2) {
				return [0]
			}
			if(inCurrentView.length > 2) {
				return [0, 1]
			}
		})
  }, [pageLoaded])

  useEffect(() => {
    if (!emblaApi) return
		updateSlidesInView(emblaApi)
    emblaApi.on('slidesInView', updateSlidesInView)
    emblaApi.on('reInit', updateSlidesInView)
		
		return () => {
			emblaApi.off('slidesInView', updateSlidesInView)
			emblaApi.off('reInit', updateSlidesInView)
		}
  }, [emblaApi, updateSlidesInView, pageLoaded])

	let slides
	if(pageLoaded) {
		slides = placeholders
	} else {
		slides = placeholders.slice(0, 4)
	}

	const renderContent = () => (
		slides.map((index) => {
			const inView = slidesInView.indexOf(index - 1) > -1
			const info = popular[index - 1]
			const propInfo = (loaded && inView) ? info : undefined

			return (
				<PopularCard
					key={index}
					info={propInfo}
				/>
			)
		}))

  return (
		<div className="embla"
			ref={emblaRef}
		>
			<div className="main-carousel__container">
				{renderContent()}
			</div>
			{pageLoaded && 
				<PopularButtonContainer>
					<ButtonCarousel
						onClick={onPrevButtonClick}
						className='carousel-popular__button'
					>
						<img src={left48} alt="left" />
					</ButtonCarousel>
					<ButtonCarousel
						onClick={onNextButtonClick}
						className='carousel-popular__button'
					>
						<img src={right48} alt="right" />
					</ButtonCarousel>
				</PopularButtonContainer>
			}
		</div>
  )
}