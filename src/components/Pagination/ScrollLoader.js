import React from "react"
import { useDispatch } from "react-redux"


export const ScrollLoader = (props) => {
  const fetchData = props.fetchData
  const query = props.query
  const dispatch = useDispatch()
  const [hasMore, setHasMore] = React.useState(true)
  const ref = React.useRef()

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
				if(entries[0].isIntersecting && hasMore) {
          setHasMore(false)
          await dispatch(fetchData(query))
        }

        if(!hasMore) {
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
	}, [hasMore])

  return (
    <div ref={ref}>
      {props.children}
    </div>
  )
}