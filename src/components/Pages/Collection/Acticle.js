import { useDispatch, useSelector } from 'react-redux'
import { useFirstPageRef, useHandleScroll } from '../../../hooks'
import { clearDisplayCollection, initializeCollection, selectDisplayCollectionPages } from '../../../reducers/displayCollectionReducer'
import { CollectionList } from './styled'
import { useCustomRef } from '../../../context/ref'
import VirtualVisibility from '../../Pagination/VirtualVisibility'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { createArray } from '../../../helpers/simple'
import { PosterCardPlaceholder } from '../../UI/Cards/PosterCard/PosterCardPlaceholder'
import PosterCard from '../../UI/Cards/PosterCard/PosterCard'

const Article = () => {
	const dispatch = useDispatch()
	const type = useParams().type
	useFirstPageRef()
	useHandleScroll()
	const ref = useCustomRef()
	const list = useSelector(selectDisplayCollectionPages)

	useEffect(() => {
		dispatch(initializeCollection(type))

		return () => {
      dispatch(clearDisplayCollection())
    }
	}, [type])

	const placeholders = createArray(60)

	return (
		<>
			<CollectionList ref={ref}>
				{list[0] ?
					list[0].map((info) => (
						<PosterCard
							film={info}
							key={info.id}
						/>
					))
					:
					placeholders.map((item) => 
						<PosterCardPlaceholder key={item} />
					)}
			</CollectionList>
			{list.map((pageList, index) => {
				if (index === 0) {
					return null
				}
				return (
					<VirtualVisibility key={index}>
						<CollectionList>
							{pageList.map((info) => (
								<PosterCard
									film={info}
									key={info.id}
								/>
							))}
						</CollectionList>
					</VirtualVisibility>
				)
			})}
		</>
	)
}

export default Article
