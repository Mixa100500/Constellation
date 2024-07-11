import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';
import { useCollectionParams } from '../hooks/useCollectionParams.jsx';
import { useParams, useSearchParams } from 'react-router-dom';
const lazyParamsContext = createContext(null)

export const LazyParamsProvider = (props) => {
  const params = useCollectionParams()
  const [lazyParams, setLazyParams] = useState(params)
  const { children } = props
  useEffect(() => {
    setLazyParams(params)
  }, [setLazyParams, params])

  return (
    <lazyParamsContext.Provider value={lazyParams}>
      {children}
    </lazyParamsContext.Provider>
  )
}

export const useLazyParams = () => {
  const value = useContext(lazyParamsContext)
  if(value === null) {
    throw new Error('useLazyParams must be called in the context provider')
  }
  return value
}

LazyParamsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}