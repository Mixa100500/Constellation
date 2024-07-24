import { useSelector, useDispatch } from 'react-redux'
import {
	addPage,
	selectMaxResultsCollection,
	selectNeedSkeleton,
	selectHasMoreOnePage
} from '../../slices/PageCollection/pageCollectionReducer.jsx'
import { InfiniteScrolling } from './InfiniteScrolling.jsx'
import { VirtualCollection } from './VirtualCollection.jsx'
import { SingleLineSkeleton } from '../Carousels/MediaCarousel/SingleLineSkeleton.jsx'
import { useLazyParams } from '../../context/PageSearchParamProvider.jsx'

const PaginationCollection = () => {
	useLazyParams()
	const maxResults = useSelector(selectMaxResultsCollection)
	const needSkeleton = useSelector(selectNeedSkeleton)
	const hasMoreOnePage = useSelector(selectHasMoreOnePage)
	const dispatch = useDispatch()
	const addOnePage = () => {
		dispatch(addPage())
	}
	
	if(maxResults === 0) {
		return <div>No results found for this query</div>
	}
	return (
    <>
			{hasMoreOnePage &&
				<VirtualCollection />
			}
			{needSkeleton &&
				<InfiniteScrolling addPage={addOnePage}>
					<SingleLineSkeleton />
				</InfiniteScrolling>
			}
    </>
  )
}

export default PaginationCollection
