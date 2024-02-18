import { createContext, useContext, useRef, } from 'react'

const RefContext = createContext(null)

export const useCustomRef = () => {
	return useContext(RefContext)
}

export const RefProvider = ({ children }) => {
	const ref = useRef(null)

	return (
		<RefContext.Provider value={ref}>
      {children}
		</RefContext.Provider>
	)
}