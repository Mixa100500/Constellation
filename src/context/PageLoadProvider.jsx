import PropTypes from 'prop-types';
import React from 'react';
const PageLoadedContext = React.createContext(null)
const LoadedSetContext = React.createContext(null)

export const PageLoadProvider = (props) => {
  const { children } = props
  const [pageLoaded, setPageLoading] = React.useState(false)
  
  return (
    <PageLoadedContext.Provider value={pageLoaded}>
      <LoadedSetContext.Provider value={setPageLoading}>
        {children}
      </LoadedSetContext.Provider>
    </PageLoadedContext.Provider>
  )
}

export const usePageLoaded = () => {
  const value = React.useContext(PageLoadedContext)
  if(value === null) {
    throw new Error('usePageLoaded must be called in the context provider')
  }
  return value
}

export const usePageLoadedSet = () => {
  const value = React.useContext(LoadedSetContext)
  if(value === null) {
    throw new Error('usePageSetLoading must be called in the context provider')
  }
  return value
}

PageLoadProvider.propTypes = {
  children: PropTypes.node.isRequired,
}