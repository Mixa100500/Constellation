import { useState } from "react"
import { getPopular } from "../../services/request/popular"
import { MainCarousel } from "../../components/Carousels/MainCarousel/MainCarousel"

export const PopularCarousel = () => {
  const [popular, setPopular] = useState([])

	const initializePopular = async () => {
		const popular = await getPopular()
		setPopular(popular)
	}
  return <MainCarousel
    initializePopular={initializePopular}
    popular={popular}
  />
}