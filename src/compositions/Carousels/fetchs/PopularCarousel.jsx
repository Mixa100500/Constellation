import { useState } from "react"
import { getPopular } from "../../../services/request/popular.jsx"
import { MainCarousel } from "../MainCarousel/MainCarousel.jsx"
import { collectionExtractor } from "../../../helpers/simple.jsx"

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