import { useState } from 'react'
import { InfiniteScrolling } from '../../Pagination/InfiniteScrolling'
import Page from '../../../compositions/Collection/Page'
import { SingleLineSkeleton } from './SingleLineSkeleton'
import { useSelector, useDispatch } from 'react-redux'
import { selectPageCollection, addPage as addOnePage } from '../../../reducers/pageCollectionReducer'

const initialState = [1]

const Article = () => {
	const pages = useSelector(selectPageCollection)
	const dispatch = useDispatch()

	const addPage = () => {
		dispatch(addOnePage())
	}

	return (
		<>
			{pages.map((page, index) => (
				<Page key={page} index={page} isVisible={pages.length === index + 1}/>
			))}
			<InfiniteScrolling addPage={addPage}>
				<SingleLineSkeleton />
			</InfiniteScrolling>
		</>
	)
}

export default Article
