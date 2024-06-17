import { Link } from "react-router-dom"
import play from '../../../../images/play.svg'
import { BackdropImg, ImgContainer, PopularImgPlaceholder } from "."
import { useVisible } from "../../../../context/VirtualVisibility"
import PropTypes from 'prop-types'
import { useCallback, useState } from "react"
const basePictureUrl = 'https://image.tmdb.org/t/p'

const PopularCard = (props) => {
	// const visible = useVisible()
	const visible = true

	const { imgSrc, inView, info } = props
  // const [hasLoaded, setHasLoaded] = useState(false)

  // const setLoaded = useCallback(() => {
  //   if (inView) setHasLoaded(true)
  // }, [inView, setHasLoaded])

	return (
		<div className='main__slide padding-horizontal'>
			<Link
				to={`/watch/${info.type}/${info.id}`}
			>
				<ImgContainer>
					{info.backdrop_path &&
					<div className="placeholder_content">
						{inView &&
							<picture>
								<source
									media='(min-width: 520px)'
									srcSet={`${basePictureUrl}/w500${info.backdrop_path}`}
								/>
								<source
									media='(min-width: 640px)'
									srcSet={`${basePictureUrl}/w300${info.backdrop_path}`}
								/>
								<source
									media='(min-width: 840px)'
									srcSet={`${basePictureUrl}/w400${info.backdrop_path}`}
								/>
								<BackdropImg
									src={`${basePictureUrl}/w500${info.backdrop_path}`}
									alt={info.name || info.original_title}
								/>
							</picture>
						}
					</div>
					}
					<div className='play'>
						<img src={play} />
					</div>
				</ImgContainer>
			</Link>
		</div>
	)
}

PopularCard.propTypes = {
	info: PropTypes.object.isRequired
}

export {
	PopularCard
}