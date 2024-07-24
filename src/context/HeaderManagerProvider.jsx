import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

const ToggleContext = createContext(null)
const CurrentDropdownContext = createContext(null)
const IsActiveThemeContext = createContext(null)

export const HeaderManagerProvider = (props) => {
	const [dropDown, setDropDown] = useState('')
	const toggle = useCallback((modalName) => {
		setDropDown(modalName)
	}, [])

	return (
		<ToggleContext.Provider value={toggle}>
			<CurrentDropdownContext.Provider value={dropDown}>
				<IsActiveThemeContext.Provider value={dropDown !== ''}>
					{props.children}
				</IsActiveThemeContext.Provider>
			</CurrentDropdownContext.Provider>
		</ToggleContext.Provider>
	)
}

const useToggle = () => {
	const open = useContext(ToggleContext)
	if (open === null) {
		throw new Error('useToggle must be called in the context provider')
	}
	return open
}

const useIsActiveTheme = () => {
	const open = useContext(IsActiveThemeContext)
	if (open === null) {
		throw new Error('useIsActiveTheme must be called in the context provider')
	}
	return open
}

const useDropdown = () => {
	const dropDown = useContext(CurrentDropdownContext)

	if (dropDown === null) {
		throw new Error('useDropDown must be called in the context provider')
	}
	return dropDown
}

export const useHeader = {
	useToggle,
	useDropdown,
	useIsActiveTheme,
}