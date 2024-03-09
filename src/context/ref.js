import { createContext, useContext, useRef, } from 'react'
import PropTypes from 'prop-types'
const RefContext = createContext(null)

export const useCustomRef = () => {
	return useContext(RefContext)
}

const RefProvider = ({ children }) => {
	const ref = useRef(null)

	return (
		<RefContext.Provider value={ref}>
      {children}
		</RefContext.Provider>
	)
}

RefProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export {
	RefProvider
}