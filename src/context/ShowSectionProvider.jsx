import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useLazyParams } from "./PageSearchParamProvider.jsx";

const ShowSectionContext = createContext(null)
const AddShowSectionContext = createContext(null)

export const ShowSectionProvider = (props) => {
  const ref = useRef(true)
  const { children } = props
  const [showSection, setShowSection] = useState(1)
  const params = useLazyParams()
  useEffect(() => {
    if(!ref.current) {
      setShowSection(1)
    }
    ref.current = false
  }, [params])

  const addSection = useCallback(() => {
    setShowSection(prev => prev + 1)
  }, [])

  return (
    <ShowSectionContext.Provider value={showSection}>
      <AddShowSectionContext.Provider value={addSection}>
        {children}
      </AddShowSectionContext.Provider>
    </ShowSectionContext.Provider>
  )
}

export const useShowSection = () => {
  const value = useContext(ShowSectionContext)
  if(value === null) {
    throw new Error('useShowSection must be called in the context provider')
  }
  return value
}

export const useShowSectionAdd = () => {
  const value = useContext(AddShowSectionContext)
  if(value === null) {
    throw new Error('useShowPageSet must be called in the context provider')
  }
  return value
}