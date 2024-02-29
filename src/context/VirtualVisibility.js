import React, { createContext, useContext } from 'react'

const VisibleContect = createContext(null)

export const useVisible = () => {
	return useContext(VisibleContect)
}


const VirtualVisibility = (prop) => {
	const children = prop.children
	const elementRef = React.useRef(null)
	const [visible, setVisible] = React.useState(false)

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				setVisible(entries[0].isIntersecting)
			},
			{
				root: null,
				threshold: 0,
				rootMargin: '400px 0px 400px 0px',
			}
		)

		if (elementRef.current) {
			observer.observe(elementRef.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [elementRef])

	return (
		<div
			className='virtual-visibility'
			ref={elementRef}
		>
			<VisibleContect.Provider value={visible}>
				{children}
			</VisibleContect.Provider>
		</div>
	)
}

export default VirtualVisibility
