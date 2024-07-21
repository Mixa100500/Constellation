import { createContext, useCallback, useContext, useState } from 'react'

const ToggleContext = createContext(null)
const CurrentDropdownContext = createContext(null)
export const HeaderManagerProvider = (props) => {
	const [dropDown, setDropDown] = useState('')

	const toggle = useCallback((modalName) => {
		setDropDown(modalName)
	}, [])

	return (
		<ToggleContext.Provider value={toggle}>
			<CurrentDropdownContext.Provider value={dropDown}>
				{props.children}
			</CurrentDropdownContext.Provider>
		</ToggleContext.Provider>
	)
}

export const useToggle = () => {
	const open = useContext(ToggleContext)
	if (open === null) {
		throw new Error('useToggle must be called in the context provider')
	}
	return open
}

export const useDropdown = () => {
	const dropDown = useContext(CurrentDropdownContext)

	if (dropDown === null) {
		throw new Error('useDropDown must be called in the context provider')
	}
	return dropDown
}

export const useHeader = {
	useToggle,
	useDropdown,
}