import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMaxSectionCollection, selectHasMorePage } from '../reducers/pageCollectionReducer';
const CurrentPageContext = createContext(null)
const CurrentPageSetContext = createContext(null)
const checkIsMore = (max, currentPages) => {
	return max && currentPages * 3 <= max
}


export const PaginationProvider = (props) => {
  const maxSection = useSelector(selectMaxSectionCollection)
  const [currentPage, setCurrentPage] = useState(0)
	const hasMore = checkIsMore(maxSection, currentPage)
  const dispatch = useDispatch()
	const isMoreOne = currentPage > 1
	const addPage = () => {
		if(hasMore) {
			dispatch(addOnePage())
		}
	}
  const { children } = props
  
  return (
    <CurrentPageContext.Provider value={currentPage}>
      <CurrentPageSetContext.Provider value={setCurrentPage}>
        {children}
      </CurrentPageSetContext.Provider>
    </CurrentPageContext.Provider>
  )
}

export const useCurrentPage = () => {
  const value = useContext(CurrentPageContext)
  if(value === null) {
    throw new Error('usePageLoaded must be called in the context provider')
  }
  return value
}

export const useCurrentPageSet = () => {
  const value = useContext(CurrentPageSetContext)
  if(value === null) {
    throw new Error('usePageSetLoading must be called in the context provider')
  }
  return value
}

PaginationProvider.propTypes = {
  children: PropTypes.node.isRequired,
}