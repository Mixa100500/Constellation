import { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	clearMovie,
	selectOpenedMovieInfo,
	selectOpenedMovieLoaded,
} from '../../../reducers/CurrentWatch/currentWatchReducer.jsx'
import Reviews from './Reviews.jsx'
import MoviePoster from './MoviePoster.jsx'
import VideoPlayer from '../../Player/MoviePlayer.jsx'
import CarouselRecommend from '../../../compositions/Carousel/CarouselRecommend.jsx'
import Layout from '../../Layout/Layout.jsx'
import { H2 } from '../../../elements/H2.jsx'
import { Rating } from '../../UI/Rating/Rating.jsx'
import {
	Flex,
	GridTwoColumn,
	InfoColumn,
	OverviewHeader,
	PosterContainer
} from './styled.jsx'
import { useParams } from 'react-router-dom'
import { useInitializeByType } from '../../../hooks/index.jsx'
import { DescriptionContent } from './Description.jsx'
import { LazyWatchLoader } from './LazyWatchLoader.jsx'
import { WatchScreenSkeleton } from './WatchScreenSkeleton.jsx'

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
				<LazyWatchLoader />
			</Layout>
		</div>
	)
}

export default Watch
