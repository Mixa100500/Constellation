import { useCallback, useEffect, useState } from "react"
import { getPopular } from "../../../services/request/popular"
import { collectionExtractor, createArray } from "../../../helpers/simple"
import { usePrevNextButtons } from "../../../hooks/usePrevNextButtons"
import { PopularCard } from "../../UI/Cards/PopularCard/PopularCard"
import useEmblaCarousel from 'embla-carousel-react'
import { PopularCardPlaceholder } from "../../UI/Cards/PopularCard/PopularCardPlaceholder"
import { ButtonCarousel } from "../../../elements/ButtonCarousel"
import left48 from "../../../images/icons8-chevron-left-48.png"
import right48 from "../../../images/icons8-chevron-right-48.png"
// import Autoplay from 'embla-carousel-autoplay'
const placeholders = createArray(2)
import { PopularButtonContainer } from "./styled"

export const MainCarousel = () => {
	const [popular, setPopular] = useState([])
	const [slidesInView, setSlidesInView] = useState([])
	// const [isPlaying, setIsPlaying] = useState(true)

	
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
			// console.log('', emblaApi
			// .slidesInView())
      const inView = emblaApi
        .slidesInView()
        .filter((index) => !slidesInView.includes(index))
      return slidesInView.concat(inView)
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    updateSlidesInView(emblaApi)
    emblaApi.on('slidesInView', updateSlidesInView)
    emblaApi.on('reInit', updateSlidesInView)
  }, [emblaApi, updateSlidesInView])

	const list = popular.slice(0, 20)
  return (
		<div className="embla"
			ref={emblaRef}
		>
			<div className="main-carousel__container">
				{loaded ?
					list.map((info, index) => (
						<PopularCard
							info={info}
							key={info.name || info.original_title}
							inView={slidesInView.indexOf(index) > -1}
						/>
					))
					:
					placeholders.map((item) => (
						<PopularCardPlaceholder key={item}/>
					))
				}
			</div>
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
		</div>
  )
}