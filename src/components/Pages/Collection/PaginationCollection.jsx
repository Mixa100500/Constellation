import Page from '../../../compositions/Collection/Page'
import { useSelector, useDispatch } from 'react-redux'
import {
	// addOnePage,
	selectCurrentLoadingSection,
	selectMaxResultsCollection,
	selectMaxSectionCollection,
	selectPaginationPage
} from '../../../reducers/pageCollectionReducer'
// import { VirtualCollection } from './VirtualCollection';
// import { InfiniteScrolling } from '../../Pagination/InfiniteScrolling';
// import { SingleLineSkeleton } from './SingleLineSkeleton';
import { useCollectionParams } from '../../../hooks/useCollectionParams';
import { useState } from 'react';

const checkIsMore = (max, countPages) => {
	return max && countPages * 3 <= max
}

const PaginationCollection = () => {
	const params = useCollectionParams()
	const maxSection = useSelector(selectMaxSectionCollection(params))
	const maxResults = useSelector(selectMaxResultsCollection(params))
	const loadingSection = useSelector(selectCurrentLoadingSection)
	const countPages = useSelector(selectPaginationPage)
	const hasMore = checkIsMore(maxSection, countPages)
	const dispatch = useDispatch()
	const isMoreOne = countPages > 1
	const [count, setCount] = useState(0);
	

	const addPage = () => {
		if(hasMore) {
			// dispatch(addOnePage())
		}
	}
	if(maxResults === 0) {
		return <div>No results found for this query</div>
	}
	
	return (
    <>
			<Page
				index={1}
				maxSection={maxSection}
				loadingSection={loadingSection}
			/>
			{/* {isMoreOne &&
				<VirtualCollection maxSection={maxSection} loadingSection={loadingSection}/>
			} */}
			<div>{count}</div>
			<button onClick={() => setCount(prev => prev + 1)}>increment</button>
			{/* {hasMore &&
				<InfiniteScrolling addPage={addPage}>
					<SingleLineSkeleton />
				</InfiniteScrolling>
			} */}
    </>
  )
}

export default PaginationCollection
