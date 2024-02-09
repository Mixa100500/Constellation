import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
	addMainInfo,
	openMovie,
	selectOpenedMovieInfo,
} from '../../reducers/currentWatchReducer'
import {
	getSerialInfo,
	getMovieInfo,
	getSerialIMDBID,
} from '../../services/request/mediaInfo'
import Reviews from '../UI/Reviews'
import MoviePoster from '../UI/MoviePoster'
import GenresList from '../UI/GenresList'
import VideoPlayer from '../UI/VideoPlayer'
import styled from 'styled-components'
import CarouselRecommend from '../CarouselRecommend'
import Layout from '../UI/Layout'

const styleRating = {
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: '30px',
}

const styleOwnerRating = {
	color: 'var(--second-color)',
}

const Rating = ({ label, rating }) => {
	return (
		<div style={styleRating}>
			<div style={styleOwnerRating}>{label}</div>
			<div>{rating}</div>
		</div>
	)
}

const PosterContainer = styled.div`
	margin-bottom: 30px;

	@media screen and (min-width: 978px) {
		margin-right: 30px;
	}
`

const Flex = styled.div`
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
`

const InfoColumnStyled = styled.div`
	& {
		display: flex;
		justify-content: center;
		flex-direction: column;
		max-width: 840px;
		flex: 1 640px;
	}
`

const GridTwoColumn = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	column-gap: 20px;
	row-gap: 12px;
`

const OverviewHeader = styled.h3`
	color: var(--second-color);
`

const DescriptionHeader = styled.div`
	& {
		font-size: 1.17em;
		font-weight: bold;
		text-align: left;
		color: var(--second-color);
	}
`

const Watch = ({ movie }) => {
	const id = useParams().id
	const mediaInfo = useSelector(selectOpenedMovieInfo)
	const dispatch = useDispatch()

	const getMedia = async (movie) => {
		let info

		if (movie) {
			info = await getMovieInfo(id)
		} else {
			info = await getSerialInfo(id)
			const data = await getSerialIMDBID(id)
			info.imdb_id = data.imdb_id
		}
		dispatch(addMainInfo(info))
	}

	useEffect(() => {
		getMedia(movie)
	}, [])

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
						<h2>{mediaInfo.name || mediaInfo.title}</h2>
						<GridTwoColumn>
							<DescriptionHeader>genres:</DescriptionHeader>
							<GenresList genres={mediaInfo.genres} />
							{movie && imdbId && (
								<>
									<DescriptionHeader>runtime:</DescriptionHeader>
									<div>{mediaInfo.runtime} min</div>
								</>
							)}

							{!movie && imdbId && (
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
							style={{ marginBottom: '15px' }}
							className='watch-container__overview'>
							{mediaInfo.overview}
						</div>
					</InfoColumnStyled>
				</Flex>
			</Layout>

			<Layout>
				<CarouselRecommend />
			</Layout>

			<Layout dark={true}>
				<Reviews movie={movie} />
			</Layout>
		</div>
	)
}

export default Watch
