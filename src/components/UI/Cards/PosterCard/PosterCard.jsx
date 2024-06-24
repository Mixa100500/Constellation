import { Link } from 'react-router-dom'
import ItemDescription from './ItemDesription'
import { PosterImg, PosterContainer, PosterImgPlaceholder } from '.'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { memo } from 'react'


const pictureBaseUrl = 'https://image.tmdb.org/t/p'

const ContainerLink = styled(Link)`
	text-decoration: none;
	color: white;
`

const PosterCard = memo(({ info, index, lazy, lastImage, setLastImageLoaded }) => {
		// let show = true;
		// if(checkView) {
		// 	show = inView
		// }
		const onLoad = () => {
			if(setLastImageLoaded) {
				setLastImageLoaded(true)
			}
		}
		return (
			<PosterContainer
				className='padding-horizontal padding-top'
			>
				{info ?
					<ContainerLink
						to={`/watch/${info.type}/${info.id}`}
					>
						<PosterImgPlaceholder >
							{info.poster_path &&
									<PosterImg
										src={`${pictureBaseUrl}/w200${info.poster_path}`}
										alt={info.name || info.original_title}
										// loading={lazy ? "lazy" : 'eager'}
										onLoad={onLoad}
										loading="lazy"
									/>
							}
						</PosterImgPlaceholder>
					</ContainerLink>
						:
						<PosterImgPlaceholder />
					}
					<ItemDescription film={info} />
			</PosterContainer>
		)
	}
)

PosterCard.displayName = 'PosterCard'

PosterCard.propTypes = {
  info: PropTypes.object,
  // checkView: PropTypes.bool,
	// inView: PropTypes.bool,
	lazy: PropTypes.bool,
}

export default PosterCard
