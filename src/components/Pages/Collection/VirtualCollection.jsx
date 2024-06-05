import { useWindowVirtualizer } from "@tanstack/react-virtual"
import Page from "../../../compositions/Collection/Page"
import { useHeight } from "../../../context/ResizeProvider"
import { selectPaginationPage } from "../../../reducers/pageCollectionReducer"
import { useSelector } from "react-redux"
import { useRef } from "react"

export const VirtualCollection = ({ maxSection, loadingSection }) => {
	const countPages = useSelector(selectPaginationPage)
	const height = useHeight()
	const listRef = useRef()
	const overscan = Math.min(countPages, 4)
  
  const virtualizer = useWindowVirtualizer({
    count: countPages - 1,
    estimateSize: () => height,
    overscan,
    scrollMargin: listRef.current?.offsetTop ?? 0,
  })

  return (
    <div
    ref={listRef}
    style={{
      maxWidth: '100%'
    }}
  >
    <div
      style={{
        height: `${virtualizer.getTotalSize()}px`,
        width: '100%',
        position: 'relative',
      }}
    >
      {virtualizer.getVirtualItems().map((item) => (
        <div
          key={item.key}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: `${item.size}px`,
            transform: `translateY(${
              item.start - virtualizer.options.scrollMargin
            }px)`,
          }}
        >
          <Page
            index={item.index + 2}
            loadingSection={loadingSection}
            maxSection={maxSection}
          />
        </div>
      ))}
    </div>
  </div>
  )
}