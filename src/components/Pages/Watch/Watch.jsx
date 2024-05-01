import { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	clearMovie,
	selectOpenedMovieInfo,
	selectOpenedMovieLoaded,
} from '../../../reducers/currentWatchReducer'
import Reviews from './Reviews'
import MoviePoster from './MoviePoster'
import GenresList from './GenresList'
import VideoPlayer from '../../Player/MoviePlayer'
import CarouselRecommend from './CarouselRecommend'
import Layout from '../../Layout/Layout'
import { H2 } from '../../../elements/H2'
import { useInitializationWatch } from '../../../hooks/Initializer'
import { Rating } from '../../UI/Rating/Rating'
import {
	DescriptionHeader,
	Flex,
	GridTwoColumn,
	InfoColumnStyled,
	OverviewHeader,
	PosterContainer
} from './styled'
import { useWatchParams } from '../../../hooks'
import { LazyLoadContent } from '../../Pagination/LazyLoadContent'

const margined = { marginBottom: '15px' }

const Watch = () => {
	const dispatch = useDispatch()
	const mediaInfo = useSelector(selectOpenedMovieInfo)
	const loaded = useSelector(selectOpenedMovieLoaded)
	const { isMovie, id } = useWatchParams()
	const initializerWatch = useInitializationWatch(isMovie)
	useEffect(() => {
		initializerWatch()

		return () => {
      dispatch(clearMovie())
    }
	}, [id])


	if (!loaded) {
		return <div>loading...</div>
	}
	const imdbId = mediaInfo.imdb_id

	return (
		<div className='watch-container'>
			<Layout
				top='20'
				bottom='20'
				dark={true}
			>
				<Flex>
					<PosterContainer>
						<MoviePoster mediaInfo={mediaInfo} />
						<Rating
							label={'TMDB rating'}
							rating={mediaInfo.vote_average}
						/>
					</PosterContainer>
					<InfoColumnStyled>
						<VideoPlayer imdbId={imdbId} />
						<H2 $paddingTop='xl' $paddingBottom='xl'>{mediaInfo.name || mediaInfo.title}</H2>
						<GridTwoColumn>
							<DescriptionContent isMovie={isMovie} mediaInfo={mediaInfo} loaded={loaded}/>
						</GridTwoColumn>
						<OverviewHeader>overview:</OverviewHeader>
						<div
							style={margined}
							className='watch-container__overview'>
							{mediaInfo.overview}
						</div>
					</InfoColumnStyled>
				</Flex>
				<CarouselRecommend />
				<Reviews/>
			</Layout>
		</div>
	)
}

const DescriptionContent = ({isMovie, mediaInfo, loaded}) => {
	return (
		<>
			<DescriptionHeader>genres:</DescriptionHeader>
			{loaded && <GenresList genres={mediaInfo.genres} />}
			{isMovie ? 
				<MovieDescription isLoaded={loaded} mediaInfo={mediaInfo}/>
				:
				<SerialDescription isLoaded={loaded} mediaInfo={mediaInfo}/>
			}
		</>
	)
}
const MovieDescription = ({isLoaded, mediaInfo}) => {

	const renderContent = () => (
		<>
			<DescriptionHeader>runtime:</DescriptionHeader>
			<div>{mediaInfo.runtime} min</div>
		</>
	)

	return (
		<>
		<LazyLoadContent 
			isLoaded={isLoaded}
			loadingContent={() => <div>loading...</div>}
			renderContent={renderContent}
		/>
	</>
	)
}

const SerialDescription = ({mediaInfo, isLoaded}) => {

	const renderContent = () => (
		<>
			<DescriptionHeader>episodes:</DescriptionHeader>
			<div>{mediaInfo.number_of_episodes}</div>
			<DescriptionHeader>seasons:</DescriptionHeader>
			<div>{mediaInfo.number_of_seasons}</div>
			<DescriptionHeader>runtime:</DescriptionHeader>
			<div>{mediaInfo.last_episode_to_air.runtime} min</div>
		</>
	)

	return (
		<LazyLoadContent
			isLoaded={isLoaded}
			loadingContent={() => <div>loading...</div>}
			renderContent={renderContent}
		/>
	)
}


export default Watch
