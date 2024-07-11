import { useWindowVirtualizer } from "@tanstack/react-virtual"
import { useSelector } from "react-redux"
import { useRef } from "react"
import { selectPaginationPage } from '../../slices/PageCollection/pageCollectionReducer.jsx'
import { useHeight } from '../../context/ResizeProvider.jsx'
import Page from '../Collection/Page.jsx'
import { ShowSectionProvider } from "../../context/ShowSectionProvider.jsx"

export const VirtualCollection = () => {
	const countPages = useSelector(selectPaginationPage)
	const height = useHeight()
	const listRef = useRef()
	const overscan = Math.min(countPages, 2)
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
          <ShowSectionProvider>
            <Page
              index={item.index + 2}
            />
          </ShowSectionProvider>
        </div>
      ))}
    </div>
  </div>
  )
}