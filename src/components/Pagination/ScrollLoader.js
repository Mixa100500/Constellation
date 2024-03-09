import React from "react"
import { useDispatch } from "react-redux"
import PropTypes from 'prop-types'

const ScrollLoader = (props) => {
  const fetchData = props.fetchData
  const query = props.query
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = React.useState(true)
  const ref = React.useRef()

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
				if(entries[0].isIntersecting && isLoaded) {
          setIsLoaded(false)
          await dispatch(fetchData(query))
        }

        if(!isLoaded) {
          observer.disconnect()
        }
			},
			{
				root: null,
				threshold: 0,
				rootMargin: '100px 0px 100px 0px',
			}
		)

		if (ref.current) {
      observer.observe(ref.current)
		}

    return () => {
      observer.disconnect()
    }
	}, [isLoaded])

  return (
    <div ref={ref}>
      {props.children}
    </div>
  )
}

ScrollLoader.propTypes = {
  fetchData: PropTypes.func.isRequired
}

export { 
  ScrollLoader
}