import { Link } from 'react-router-dom'
import ItemDesription from '../PopularCard/PopularCardDescription'
import { useDispatch } from 'react-redux'
import { openMovie } from '../../../../reducers/currentWatchReducer'
import { PosterImg, PosterContainer, PosterImgPlaceholder } from '.'

const linkStyle = {
	textDecoration: 'none',
	color: 'white',
	display: 'block',
	height: '100%'
}

const pictureBaseUrl = 'https://image.tmdb.org/t/p'

const PosterCard = (props) => {
	const film = props.film
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(openMovie(film))
	}

	return (
		<div>
			<Link
				to={`/watch/${film.title ? 'movie' : 'serial'}/${film.id}`}
				style={linkStyle}
				onClick={handleClick}>
				<PosterContainer
					className='padding-horizontal padding-top'
				>
					{film.poster_path ? 
						<picture>
							<source
								media='(min-width: 758px)'
								srcSet={`${pictureBaseUrl}/w200${film.poster_path}`}
							/>
							<source
								media='(min-width: 319px)'
								srcSet={`${pictureBaseUrl}/w300${film.poster_path}`}
							/>
							<source
								media='(min-width: 200px)'
								srcSet={`${pictureBaseUrl}/w500${film.poster_path}`}
							/>
							<PosterImg
								src={`${pictureBaseUrl}/w200${film.poster_path}`}
								alt={film.name || film.original_title}
							/>
						</picture>
						:
						<PosterImgPlaceholder />
					}
					<ItemDesription film={film} />
				</PosterContainer>
			</Link>
		</div>
	)
}

export default PosterCard
