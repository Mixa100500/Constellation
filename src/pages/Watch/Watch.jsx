import { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MoviePoster from './Component/WatchPoster/MoviePoster.jsx'
import {
	WatchContent,
	GridTwoColumn,
	InfoColumn,
	OverviewHeader,
	PosterContainer
} from './styled.jsx'
import { useParams } from 'react-router-dom'
import { DescriptionContent } from './Component/Description/Description.jsx'
import { LazyWatchLoader } from './Composition/LazyPageLoader/LazyWatchLoader.jsx'
import {
	clearMovie,
	selectOpenedMovieInfo,
	selectOpenedMovieLoaded,
} from '../../slices/CurrentWatch/currentWatchSlice.jsx'
import { useInitializeByType } from '../../hooks/useWatch.jsx'
import Layout from '../../components/Layout/Layout.jsx'
import { Rating } from '../../components/Rating/Rating.jsx'
import VideoPlayer from '../../compositions/Player/MoviePlayer.jsx'
import { H2 } from '../../elements/H2.jsx'

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
	
	const overview = mediaInfo.overview || ' '
	const title = mediaInfo.title || ' '

	return (
		<div className='watch-container'>
			<Layout
				top='20'
				bottom='20'
			>
				<WatchContent className='padding-horizontal'>
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
				</WatchContent>
				<LazyWatchLoader />
			</Layout>
		</div>
	)
}

export default Watch
