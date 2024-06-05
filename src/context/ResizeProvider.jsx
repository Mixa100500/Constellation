import React, { useContext, useEffect, useRef, useState } from 'react'
import { throttle } from '../helpers/throttleEvent'
const ContextRef = React.createContext(null)
const ContextHeight = React.createContext(null)

export const ResizeProvider = ({ children }) => {
  const ref = useRef(null)
  const [height, setHeight] = useState(0)
  // useEffect(() => {
  //   const nameCustomEvent = "optimizedResize"
  //   const [type, func] = throttle("resize", nameCustomEvent)

  //   function resize() {
  //     setHeight(ref.current.clientHeight)
  //   }

  //   window.addEventListener(nameCustomEvent, resize)
  //   resize()

  //   return () => {
  //     window.removeEventListener(type, func)
  //     window.removeEventListener(nameCustomEvent, resize)
  //   }
  // }, [])

  return (
    <ContextRef.Provider value={ref}>
      <ContextHeight.Provider value={height}>
        {children}
      </ContextHeight.Provider>
    </ContextRef.Provider>
  )
}

export const useHeightRef = () => {
  const ref = useContext(ContextRef)
  return ref
}

export const useHeight = () => {
  const height = useContext(ContextHeight)
  if(height === null) {
    throw new Error('You need to useHeight inside the context provider.')
  }
  return height  
}