import React from 'react'
import { useDispatch } from 'react-redux'

export const InfiniteScrolling = (props) => {
	const fetchData = props.fetchData
	const query = props.query
	const dispatch = useDispatch()
	const ref = React.useRef()
	let delayFetch = false
  let countQuickScrolls = 0;

	const isElementVisible = () => {
		return (
			document.documentElement.offsetHeight -
				(document.documentElement.scrollTop + window.innerHeight) <
			ref.current.offsetHeight * 1.1
      )
    }
    
    const isBottomHalfVisible = () => {
      return (
      document.documentElement.offsetHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      ref.current.offsetHeight * 0.65
    )
  }

	async function delayloadWhenCheck() {
		if (delayFetch) {
			return
		}
		if (isElementVisible()) {
			await dispatch(fetchData(query))
      if(isBottomHalfVisible()) {
        countQuickScrolls++;
      }
      if(countQuickScrolls > 0) {
        window.scrollBy(0, ref.current.offsetHeight * -1)
        countQuickScrolls = 0;
      }
			setTimeout(() => {
				delayFetch = false
				if (isElementVisible()) {
					delayloadWhenCheck()
				}
			}, 800)
		}
	}

	React.useEffect(
		() => {
			const observer = new IntersectionObserver(
				async (entries) => {
					if (entries[0].isIntersecting) {
						delayloadWhenCheck()
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
		},
		[]
	)

	return <div ref={ref}>{props.children}</div>
}


