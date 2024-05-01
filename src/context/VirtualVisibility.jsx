import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
const VisibleContext = createContext(null)

export const useVisible = () => {
	return useContext(VisibleContext)
}

const VirtualVisibility = (prop) => {
	const children = prop.children
	const isVisible = prop.visible
	const ref = React.useRef(null)
	const [visible, setVisible] = React.useState(isVisible || false)

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				setVisible(entries[0].isIntersecting)
			},
			{
				root: null,
				threshold: 0,
				rootMargin: '500px 0px 500px 0px',
			}
		)
		observer.observe(ref.current)

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div
			className='virtual-visibility'
			ref={ref}
		>
			<VisibleContext.Provider value={visible}>
				{children}
			</VisibleContext.Provider>
		</div>
	)
}

VirtualVisibility.propTypes = {
  children: PropTypes.node.isRequired,
	visible: PropTypes.bool
}

export default VirtualVisibility
