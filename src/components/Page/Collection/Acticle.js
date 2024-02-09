import { useSelector } from 'react-redux'
import { useFirstPageRef, useHandleScroll } from '../../hooks'
import { selectDisplayCollectionPages } from '../../../reducers/displayCollectionReducer'
import { CollectionList } from '../../styled'
import OptimizedWrapper, { Page } from './Page'
import Card from '../../UI/Carousel/MediaCarousel/Card'
const Article = () => {
	const firstPageRef = useFirstPageRef()
	const list = useSelector(selectDisplayCollectionPages)
	useHandleScroll(firstPageRef)

	if (!list[0]) {
		return <div>lading...</div>
	}

	return (
		<>
			<CollectionList ref={firstPageRef}>
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
					<OptimizedWrapper key={index}>
						<Page pageList={pageList} />
					</OptimizedWrapper>
				)
			})}
		</>
	)
}

export default Article
