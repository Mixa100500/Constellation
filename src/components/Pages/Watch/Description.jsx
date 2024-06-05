import { useWatchParams } from "../../../hooks"
import { GenresList } from "./GenresList"
import { DescriptionHeader } from "./styled"
import { useLazyByType } from "../../../hooks/useLazyByType"
import PropTypes from "prop-types"

export const DescriptionContent = ({ mediaInfo, loaded: isLoaded }) => {

	const movieContent = () => <MovieDescription mediaInfo={mediaInfo}/>
	const serialContent = () => <SerialDescription mediaInfo={mediaInfo}/>
	const loadingContent = () => <SkeletonDescription />

	const content = useLazyByType({
		movieContent, serialContent, loadingContent, isLoaded
	})
	
	return (
		<>
			<DescriptionHeader>genres:</DescriptionHeader>
			<GenresList genres={mediaInfo.genres} />
			{content}
		</>
	)
}

DescriptionContent.propTypes = {
  mediaInfo: PropTypes.shape({
    number_of_episodes: PropTypes.number,
    number_of_seasons: PropTypes.number,
    last_episode_to_air: PropTypes.shape({
      runtime: PropTypes.number,
    }),
  }).isRequired,
  loaded: PropTypes.bool.isRequired,
}

const MovieDescription = ({ mediaInfo }) => {
	return (
		<>
			<DescriptionHeader>runtime:</DescriptionHeader>
			<div>{mediaInfo.runtime} min</div>
		</>
	)
}

MovieDescription.propTypes = {
  mediaInfo: PropTypes.shape({
    runtime: PropTypes.number.isRequired,
  }).isRequired,
}

const SerialDescription = ({ mediaInfo }) => {
	return (
		<>
			<DescriptionHeader>episodes:</DescriptionHeader>
			<div>{mediaInfo.number_of_episodes}</div>
			<DescriptionHeader>seasons:</DescriptionHeader>
			<div>{mediaInfo.number_of_seasons}</div>
			<DescriptionHeader>runtime:</DescriptionHeader>
			<div>{mediaInfo.last_episode_to_air.runtime} min</div>
		</>
	)
}

SerialDescription.propTypes = {
  mediaInfo: PropTypes.shape({
    number_of_episodes: PropTypes.number.isRequired,
    number_of_seasons: PropTypes.number.isRequired,
    last_episode_to_air: PropTypes.shape({
      runtime: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}

const SkeletonDescription = () => {
	return (
		<>
			<DescriptionHeader>episodes:</DescriptionHeader>
			<div>loading</div>
			<DescriptionHeader>seasons:</DescriptionHeader>
			<div>loading</div>
			<DescriptionHeader>runtime:</DescriptionHeader>
			<div>loading min</div>
		</>
	)
}
