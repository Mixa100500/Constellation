import { useDispatch, useSelector } from 'react-redux'
import { useScrollPagination } from '../../../hooks'
import { clearDisplayCollection, fetchNewPageCollection, initializeCollection, selectDisplayCollectionPages } from '../../../reducers/displayCollectionReducer'
import { CollectionList } from './styled'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { createArray } from '../../../helpers/simple'
import { PosterCardPlaceholder } from '../../UI/Cards/PosterCard/PosterCardPlaceholder'
import PosterCard from '../../UI/Cards/PosterCard/PosterCard'
import VirtualVisibility from '../../../context/VirtualVisibility'
import { InfiniteScrolling } from '../../Pagination/InfiniteScrolling'

const Article = () => {
	const dispatch = useDispatch()
	const type = useParams().type
	const query = { type }
	useScrollPagination()
	const list = useSelector(selectDisplayCollectionPages)

	useEffect(() => {
		dispatch(initializeCollection(type))

		return () => {
      dispatch(clearDisplayCollection())
    }
	}, [type])

	const placeholders = createArray(12)

	return (
		<>
			{list.map((pageList, index) => (
				<VirtualVisibility key={pageList[index].id} isVisibe={list.length === index + 1}>
					<CollectionList>
						{pageList.map((info) => (
							<PosterCard film={info} key={info.id} />
						))}
					</CollectionList>
				</VirtualVisibility>
			)
			)}
			<InfiniteScrolling fetchData={fetchNewPageCollection} query={query}>
				<CollectionList>
					{placeholders.map((item) => 
						<PosterCardPlaceholder key={item} />
					)}
				</CollectionList>
			</InfiniteScrolling>
		</>
	)
}

export default Article
