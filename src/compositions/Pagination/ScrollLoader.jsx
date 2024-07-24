import PropTypes from 'prop-types'
import { memo, useEffect, useRef } from 'react'

const ScrollLoader = memo(({ fetchData, children }) => {
  const isVisibleRef = useRef(false)
  const ref = useRef()

  useEffect(() => {
		isVisibleRef.current = false
    const observer = new IntersectionObserver(
      async (entries) => {
				if(entries[0].isIntersecting && !isVisibleRef.current) {
					isVisibleRef.current = true
					observer.disconnect()
					fetchData()
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
	}, [fetchData])

  return (
    <div ref={ref}>
      {children}
    </div>
  )
})

ScrollLoader.displayName = 'ScrollLoader'

ScrollLoader.propTypes = {
  fetchData: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export { 
  ScrollLoader
}