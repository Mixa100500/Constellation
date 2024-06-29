import PosterCard from "../../components/UI/Cards/PosterCard/PosterCard.jsx";
import { PosterCardPlaceholder } from "../../components/UI/Cards/PosterCard/PosterCardPlaceholder.jsx";
import { createArray } from "../../helpers/simple.jsx";
import { useGetSectionQuery } from "../../services/request/themoviedbService.jsx";
import { useCollectionParams } from "../../hooks/useCollectionParams.jsx";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectIsSkip, selectMaxSectionCollection, selectSections } from "../../reducers/pageCollectionReducer.jsx";
import PropTypes from 'prop-types'
import { useHeightRef } from "../../context/ResizeProvider.jsx";
import { CollectionList } from '../../pages/Collection/styled.jsx'

const PageSection = memo(({ section }) => {
  const skip = useSelector(selectIsSkip(section))
  const { type, genres } = useCollectionParams()
  const { data, isSuccess } = useGetSectionQuery({ section, type, genres }, {
    skip
  })

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
  let render
  if(maxSection === 0) {
    render = () => (
      <>
        <PageSection
          key={1}
          section={1}
        />
        <PageSection
          key={2}
          section={2}
        />
        <PageSection
          key={3}
          section={3}
        />
      </>
    )
  } else {
    const list = createArray(sections)
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
