import { Link } from 'react-router-dom'
import ItemDescription from './ItemDesription'
import { PosterImg, PosterContainer, PosterImgPlaceholder } from '.'
import { useVisible } from '../../../../context/VirtualVisibility'
import PropTypes from 'prop-types'
import { memo } from 'react'

const linkStyle = {
	textDecoration: 'none',
	color: 'white',
	display: 'block',
	height: '100%'
}

const pictureBaseUrl = 'https://image.tmdb.org/t/p'

// const PosterCard = memo(({ info }) => {
// 	let visible = useVisible()
// 	if(visible === null) {
// 		visible = true;
// 	}
// 	const showWhenVisible = {
// 		display: visible ? 'block' : 'none'
// 	}
// 	return (
// 		<div>
// 			<Link
// 				to={`/watch/${info.type}/${info.id}`}
// 				style={linkStyle}
// 			>
// 				<PosterContainer
// 					className='padding-horizontal padding-top'
// 				>
// 					<PosterImgPlaceholder >
// 						{info.poster_path &&
// 							<picture style={showWhenVisible}>
// 								<source
// 									media='(min-width: 758px)'
// 									srcSet={`${pictureBaseUrl}/w200${info.poster_path}`}
// 								/>
// 								<source
// 									media='(min-width: 319px)'
// 									srcSet={`${pictureBaseUrl}/w200${info.poster_path}`}
// 								/>
// 								<source
// 									media='(min-width: 200px)'
// 									srcSet={`${pictureBaseUrl}/w200${info.poster_path}`}
// 								/>
// 								<PosterImg
// 									src={`${pictureBaseUrl}/w200${info.poster_path}`}
// 									alt={info.name || info.original_title}
// 								/>
// 							</picture>
// 						}
// 					</PosterImgPlaceholder>
// 					<ItemDescription film={info} />
// 				</PosterContainer>
// 			</Link>
// 		</div>
// 	)
// })
const PosterCard = ({ info }) => {
	let visible = useVisible()
	if(visible === null) {
		visible = true;
	}
	const showWhenVisible = {
		display: visible ? 'block' : 'none'
	}
	return (
		<div>
			<Link
				to={`/watch/${info.type}/${info.id}`}
				style={linkStyle}
			>
				<PosterContainer
					className='padding-horizontal padding-top'
				>
					<PosterImgPlaceholder >
						{info.poster_path &&
							<picture style={showWhenVisible}>
								<source
									media='(min-width: 758px)'
									srcSet={`${pictureBaseUrl}/w200${info.poster_path}`}
								/>
								<source
									media='(min-width: 319px)'
									srcSet={`${pictureBaseUrl}/w200${info.poster_path}`}
								/>
								<source
									media='(min-width: 200px)'
									srcSet={`${pictureBaseUrl}/w200${info.poster_path}`}
								/>
								<PosterImg
									src={`${pictureBaseUrl}/w200${info.poster_path}`}
									alt={info.name || info.original_title}
								/>
							</picture>
						}
					</PosterImgPlaceholder>
					<ItemDescription film={info} />
				</PosterContainer>
			</Link>
		</div>
	)
}

PosterCard.displayName = 'PosterCard'

PosterCard.propTypes = {
  info: PropTypes.object.isRequired
}

export default PosterCard
