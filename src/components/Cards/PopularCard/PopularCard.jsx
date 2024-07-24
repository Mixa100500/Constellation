import { Link } from "react-router-dom"
import play from '../../../images/play.svg'
import { BackdropImg, ImgContainer, } from "./index.jsx"
import { useVisible } from "../../../context/VirtualVisibility.jsx"
import PropTypes from 'prop-types'
import { memo } from "react"
const basePictureUrl = 'https://image.tmdb.org/t/p'

const PopularCard = memo((props) => {
	// const visible = useVisible()
	const { info } = props
  // const [hasLoaded, setHasLoaded] = useState(false)
  // const setLoaded = useCallback(() => {
  //   if (inView) setHasLoaded(true)
  // }, [inView, setHasLoaded])
	return (
		<div className='main__slide padding-horizontal'>
			<div className="main__slide__placeholder-content">
					{info?.type ?
						<Link
							to={`/watch/${info.type}/${info.id}`}
						>		
							<ImgContainer>
								{info.backdrop_path &&
									<picture>
										<source
											media='(min-width: 520px)'
											srcSet={`${basePictureUrl}/w500${info.backdrop_path}`}
										/>
										{/* <source
											media='(min-width: 640px)'
											srcSet={`${basePictureUrl}/w300${info.backdrop_path}`}
										/>
										<source
											media='(min-width: 840px)'
											srcSet={`${basePictureUrl}/w400${info.backdrop_path}`}
										/> */}
										<BackdropImg
											src={`${basePictureUrl}/w500${info.backdrop_path}`}
											alt={info.name || info.original_title}
										/>
									</picture>
								}
								<div className='play'>
									<img src={play} />
								</div>
							</ImgContainer>
						</Link>
						:
						<ImgContainer>
							<div className='play'>
								<img src={play} />
							</div>
						</ImgContainer>
					}
			</div>
		</div>
	)
})

PopularCard.displayName = 'PopularCard'

PopularCard.propTypes = {
	info: PropTypes.object,
}

export {
	PopularCard
}