import { useDispatch, useSelector } from 'react-redux'
import { useFirstPageRef, useHandleScroll } from '../../../hooks'
import { initializeCollection, selectDisplayCollectionPages } from '../../../reducers/displayCollectionReducer'
import { CollectionList } from './styled'
import { Page } from './Page'
import Card from '../../Carousels/MediaCarousel/Card'
import { useCustomRef } from '../../../context/ref'
import VirtualVisibility from '../../VirtualVisibility'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useClearWhenExitCollection } from '../../../hooks/Initializer'

const Article = () => {
	const dispatch = useDispatch()
	const type = useParams().type
	useFirstPageRef()
	useHandleScroll()
	const ref = useCustomRef()
	const list = useSelector(selectDisplayCollectionPages)
	useClearWhenExitCollection()
	useEffect(() => {
		dispatch(initializeCollection(type))
	}, [])

	if (!list[0]) {
		return <div>lading...</div>
	}

	return (
		<>
			<CollectionList ref={ref}>
				{list[0].map((info) => (
					<Card
						film={info}
						key={info.id}
					/>
				))}
			</CollectionList>
			{list.map((pageList, index) => {
				if (index === 0) {
					return null
				}
				return (
					<VirtualVisibility key={index}>
						<Page pageList={pageList} />
					</VirtualVisibility>
				)
			})}
		</>
	)
}

export default Article
