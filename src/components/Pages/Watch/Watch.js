import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	closeMovie,
	fetchReviews,
	selectOpenedMovieInfo,
} from '../../../reducers/currentWatchReducer'
import Reviews from './Reviews'
import MoviePoster from './MoviePoster'
import GenresList from './GenresList'
import VideoPlayer from '../../Player/MoviePlayer'
import CarouselRecommend from './CarouselRecommend'
import Layout from '../../Layout/Layout'
import { H2 } from '../../../elements/H2'
import { useClearWhenExitWath, useInitializationWatch } from '../../../hooks/Initializer'
import { Rating } from '../../UI/Rating/Rating'
import { DescriptionHeader, Flex, GridTwoColumn, InfoColumnStyled, OverviewHeader, PosterContainer } from './styled'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const margened = { marginBottom: '15px' }

const Watch = ({ isMovie }) => {
	const id = useParams().id
	const mediaInfo = useSelector(selectOpenedMovieInfo)
	const initializerWatch = useInitializationWatch(isMovie)
	useClearWhenExitWath()
	
	useEffect(() => {
		initializerWatch()
	}, [id])

	if (!mediaInfo) {
		return <div>loading...</div>
	}
	const imdbId = mediaInfo.imdb_id

	return (
		<div className='watch-container'>
			<Layout
				top='20'
				bottom='20'
				dark={true}>
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
							<DescriptionHeader>genres:</DescriptionHeader>
							<GenresList genres={mediaInfo.genres} />
							{isMovie && imdbId && (
								<>
									<DescriptionHeader>runtime:</DescriptionHeader>
									<div>{mediaInfo.runtime} min</div>
								</>
							)}

							{!isMovie && imdbId && (
								<>
									<DescriptionHeader>episodes:</DescriptionHeader>
									<div>{mediaInfo.number_of_episodes}</div>
									<DescriptionHeader>seasons:</DescriptionHeader>
									<div>{mediaInfo.number_of_seasons}</div>
									<DescriptionHeader>runtime:</DescriptionHeader>
									<div>{mediaInfo.last_episode_to_air.runtime} min</div>
								</>
							)}
						</GridTwoColumn>
						<OverviewHeader>overview:</OverviewHeader>
						<div
							style={margened}
							className='watch-container__overview'>
							{mediaInfo.overview}
						</div>
					</InfoColumnStyled>
				</Flex>
				<CarouselRecommend />
				<Reviews isMovie={isMovie}/>
			</Layout>
		</div>
	)
}

Watch.propTypes = {
  isMovie: PropTypes.bool.isRequired
}

export default Watch
