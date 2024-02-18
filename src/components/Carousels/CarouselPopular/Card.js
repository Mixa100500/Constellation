import { useDispatch } from "react-redux"
import { openMovie } from "../../../reducers/currentWatchReducer"
import { Link } from "react-router-dom"
import { BackdropImg, ImgContiner } from "./styled"
import play from '../../../images/play.svg'
const basePictureUrl = 'https://image.tmdb.org/t/p'

export const Card = ({ info }) => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(openMovie(info))
	}

	return (
		<div className='padding-horizontal padding-vertical'>
			<Link
				to={`/watch/${info.title ? 'movie' : 'serial'}/${info.id}`}
				onClick={handleClick}>
				<ImgContiner>
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
					<div className='play'>
						<img src={play} />
					</div>
				</ImgContiner>
			</Link>
		</div>
	)
}