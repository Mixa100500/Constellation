import React from "react"
// import { useDispatch } from "react-redux"
import PropTypes from 'prop-types'

const ScrollLoader = ({ fetchData, children }) => {
  const isVisibleRef = React.useRef(false)
  const ref = React.useRef()

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
				if(entries[0].isIntersecting && !isVisibleRef.current) {
          fetchData()
          isVisibleRef.current = true
          observer.disconnect()
        }
			},
			{
				root: null,
				threshold: 0,
				rootMargin: '200px 0px 200px 0px',
			}
		)
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
	}, [])

  return (
    <div ref={ref}>
      {children}
    </div>
  )
}

ScrollLoader.propTypes = {
  fetchData: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export { 
  ScrollLoader
}