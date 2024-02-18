import { Link } from 'react-router-dom'
import ItemDesription from './CardDescription'
import { useDispatch } from 'react-redux'
import { openMovie } from '../../../reducers/currentWatchReducer'

const pricureCotainerStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'left',
}

const pictureBaseUrl = 'https://image.tmdb.org/t/p'

const Card = (props) => {
	const film = props.film
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(openMovie(film))
	}

	return (
		<div>
			<Link
				to={`/watch/${film.title ? 'movie' : 'serial'}/${film.id}`}
				style={{ textDecoration: 'none', color: 'white' }}
				onClick={handleClick}>
				<div
					className='padding-horizontal padding-vertical'
					style={pricureCotainerStyle}>
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
						<img
							src={`${pictureBaseUrl}/w200${film.poster_path}`}
							className='card-img'
							alt={film.name || film.original_title}
						/>
					</picture>
					<ItemDesription film={film} />
				</div>
			</Link>
		</div>
	)
}

export default Card
