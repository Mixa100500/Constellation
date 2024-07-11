import PosterCard from "../../components/UI/Cards/PosterCard/PosterCard.jsx";
import { PosterCardPlaceholder } from "../../components/UI/Cards/PosterCard/PosterCardPlaceholder.jsx";
import { createArray } from "../../helpers/simple.jsx";
import { useGetSectionQuery } from "../../services/request/themoviedbService.jsx";
// import { useCollectionParams } from "../../hooks/useCollectionParams.jsx";
import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsSkip, selectMaxSectionCollection, selectSections } from "../../slices/PageCollection/pageCollectionReducer.jsx";
import PropTypes from 'prop-types'
import { useHeightRef, useMeasureHeight } from "../../context/ResizeProvider.jsx";
import { CollectionList } from '../../pages/Collection/styled.jsx'
import { useLazyParams } from "../../context/PageSearchParamProvider.jsx";
import { useShowSection, useShowSectionAdd } from "../../context/ShowSectionProvider.jsx";

const PageSection = memo(({ section }) => {
  const skip = useSelector(selectIsSkip(section))
  const params = useLazyParams()
  const { data, isSuccess } = useGetSectionQuery({ ...params, section }, {
    skip
  })
  const addSection = useShowSectionAdd()
  useEffect(() => {
    if(isSuccess) {
      addSection()
    }
  }, [isSuccess, addSection])

  if(!isSuccess) {
    const placeholders = createArray(20)
    return <>
      {placeholders.map((item) => 
        <PosterCardPlaceholder key={item} />
      )}
    </>
  }

  return <>
    {data.list.map((info) => (
      <PosterCard info={info} key={info.id} lazy={true} />
    ))}
  </>
})

PageSection.displayName = 'PageSection'

const Page = memo(({ index: page }) => {
  const ref = useHeightRef()
  const maxSection = useSelector(selectMaxSectionCollection)
  const sections = useSelector(selectSections(page))
  const prevSection = (page * 3) - 3
  const showSection = useShowSection()
  let render
  const measureHeight = useMeasureHeight()

  useEffect(() => {
    if(page !== 1) {
      return
    }

    if(showSection === 4) {
      measureHeight()
    }
  }, [showSection, measureHeight, page])

  if(maxSection === 0) {
    render = () => (
      <>
        <PageSection
          key={1}
          section={1}
        />
      </>
    )
  } else {
    const list = createArray(Math.min(sections, showSection))
    render = () => 
      <>
        {list.map(index => <PageSection
            key={index}
            section={prevSection + index}
          />
        )}
      </>
  }
  const props = {}
  if(page === 1) {
    props.ref = ref
  }
  return (
    <CollectionList
      {...props}
    >
      {render()}
    </CollectionList>
  )
})

Page.displayName = 'Page'

Page.propTypes = {
  index: PropTypes.number.isRequired,
  maxSection: PropTypes.number,
}

export default Page
