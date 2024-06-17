import Page from '../../../compositions/Collection/Page'
import { useSelector, useDispatch } from 'react-redux'
import {
	addOnePage,
	resetCountPage,
	selectCurrentLoadingSection,
	selectMaxResultsCollection,
	selectMaxSectionCollection,
	selectPaginationPage
} from '../../../reducers/pageCollectionReducer'
import { VirtualCollection } from './VirtualCollection';
import { InfiniteScrolling } from '../../Pagination/InfiniteScrolling';
import { SingleLineSkeleton } from './SingleLineSkeleton';
import { useCollectionParams } from '../../../hooks/useCollectionParams';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const checkIsMore = (max, countPages) => {
	return max && countPages * 3 <= max
}

const PaginationCollection = () => {
	const params = useParams()
	const maxSection = useSelector(selectMaxSectionCollection)
	const maxResults = useSelector(selectMaxResultsCollection)
	const countPages = useSelector(selectPaginationPage)
	const hasMore = checkIsMore(maxSection, countPages)
	const dispatch = useDispatch()
	const isMoreOne = countPages > 1
	
	useEffect(() => {
		return () => {
			dispatch(resetCountPage())
		}
	}, [params])

	const addPage = () => {
		if(hasMore) {
			dispatch(addOnePage())
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
			/>
			{isMoreOne &&
				<VirtualCollection maxSection={maxSection} />
			}
			{hasMore &&
				<InfiniteScrolling addPage={addPage}>
					<SingleLineSkeleton />
				</InfiniteScrolling>
			}
    </>
  )
}

export default PaginationCollection
