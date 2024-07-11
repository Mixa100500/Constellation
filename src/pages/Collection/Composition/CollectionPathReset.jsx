import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createUrlBySearch, resetCountPage } from '../../../slices/PageCollection/pageCollectionReducer.jsx'
import { useLazyParams } from '../../../context/PageSearchParamProvider.jsx'
// import { createUrlBySearch, resetCountPage } from '../../../slices/pageCollectionReducer.jsx'

export const CollectionPathReset = () => {
  const params = useLazyParams()
  const dispatch = useDispatch()
  const key = createUrlBySearch()
  useEffect(() => {
		return () => {
			dispatch(resetCountPage(key))
		}
	}, [params, dispatch])

  return null
}
