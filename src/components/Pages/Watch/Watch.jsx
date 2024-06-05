import { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	clearMovie,
} from '../../../reducers/CurrentWatch/currentWatchReducer'
import Reviews from './Reviews'
import MoviePoster from './MoviePoster'
import VideoPlayer from '../../Player/MoviePlayer'
import CarouselRecommend from './CarouselRecommend'
import Layout from '../../Layout/Layout'
import { H2 } from '../../../elements/H2'
import { Rating } from '../../UI/Rating/Rating'
import {
	Flex,
	GridTwoColumn,
	InfoColumn,
	OverviewHeader,
	PosterContainer
} from './styled'
import { useParams } from 'react-router-dom'
import { useInitializeByType } from '../../../hooks'
import { DescriptionContent } from './Description'
import { selectOpenedMovieInfo, selectOpenedMovieLoaded } from '../../../reducers/CurrentWatch/selectors'

const margined = { marginBottom: '15px' }

const Watch = () => {
	const dispatch = useDispatch()
	const mediaInfo = useSelector(selectOpenedMovieInfo)
	const loaded = useSelector(selectOpenedMovieLoaded)
	const { id } = useParams()
	const initialize = useInitializeByType()

	useEffect(() => {
		dispatch(initialize(id))
		return () => {
      dispatch(clearMovie())
    }
	}, [id])


	// if (!loaded) {
	// 	return <div>loading...</div>
	// }

	const overview = mediaInfo.overview || ' '
	const title = mediaInfo.title || ' '

	return (
		<div className='watch-container'>
			<Layout
				top='20'
				bottom='20'
			>
				<Flex>
					<PosterContainer>
						<MoviePoster mediaInfo={mediaInfo} loaded={loaded} />
						<Rating
							label={'TMDB rating'}
							mediaInfo={mediaInfo}
						/>
					</PosterContainer>
					<InfoColumn>
						<VideoPlayer />
						<H2 $paddingTop='xl' $paddingBottom='xl'>
							{title}
						</H2>
						<GridTwoColumn>
							<DescriptionContent mediaInfo={mediaInfo} loaded={loaded}/>
						</GridTwoColumn>
						<OverviewHeader>overview:</OverviewHeader>
						<div
							style={margined}
							className='watch-container__overview'>
							{overview}
						</div>
					</InfoColumn>
				</Flex>
				<CarouselRecommend />
				<Reviews/>
			</Layout>
		</div>
	)
}

export default Watch
