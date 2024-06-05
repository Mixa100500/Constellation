import { useState } from "react"
import { getPopular } from "../../services/request/popular"
import { MainCarousel } from "../../components/Carousels/MainCarousel/MainCarousel"
import { collectionExtractor } from "../../helpers/simple"

export const PopularCarousel = () => {
  const [popular, setPopular] = useState([])

	const initializePopular = async () => {
		const popular = await getPopular()
		setPopular(collectionExtractor(popular, true))
	}
  return <MainCarousel
    initializePopular={initializePopular}
    list={popular}
  />
}