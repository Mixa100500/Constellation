import { useSelector, useDispatch } from 'react-redux'
import {
	addPage,
	// selectCurrentLoadingSection,
	selectMaxResultsCollection,
	selectHasMorePage
} from '../../../reducers/pageCollectionReducer.jsx'
import { VirtualCollection } from './VirtualCollection.jsx'
import { InfiniteScrolling } from '../../Pagination/InfiniteScrolling.jsx'
import { SingleLineSkeleton } from './SingleLineSkeleton.jsx'
import { useLocation } from 'react-router-dom'

const PaginationCollection = () => {
	useLocation()
	const maxResults = useSelector(selectMaxResultsCollection)
	const hasMore = useSelector(selectHasMorePage)
	const hasMoreOnePage = useSelector(selectHasMorePage)
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
			{hasMore &&
				<InfiniteScrolling addPage={addOnePage}>
					<SingleLineSkeleton />
				</InfiniteScrolling>
			}
    </>
  )
}

export default PaginationCollection
