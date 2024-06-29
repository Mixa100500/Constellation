import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { createUrlBySearch, resetCountPage } from '../../reducers/pageCollectionReducer.jsx'
// import { createUrlBySearch, resetCountPage } from '../../../reducers/pageCollectionReducer.jsx'

export const CollectionPathReset = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const key = createUrlBySearch()
  useEffect(() => {
		return () => {
			dispatch(resetCountPage(key))
		}
	}, [location, dispatch])

  return null
}
