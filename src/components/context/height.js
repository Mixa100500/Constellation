import { createContext, useCallback, useContext, useState } from 'react'

const HeightContext = createContext(null)

const ResizeHeightContext = createContext(() => {})

export const useHeight = () => {
	return useContext(HeightContext)
}

export const useHeightResize = () => {
	return useContext(ResizeHeightContext)
}

export const HeightProvider = ({ children }) => {
	const [height, setHeight] = useState(null)

	const ResizeHeight = useCallback((size) => {
		setHeight(size)
	}, [])

	return (
		<HeightContext.Provider value={height}>
			<ResizeHeightContext.Provider value={ResizeHeight}>
				{children}
			</ResizeHeightContext.Provider>
		</HeightContext.Provider>
	)
}
