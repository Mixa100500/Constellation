import { CollectionList } from "../../components/Pages/Collection/styled.jsx";
import PosterCard from "../../components/UI/Cards/PosterCard/PosterCard.jsx";
import { PosterCardPlaceholder } from "../../components/UI/Cards/PosterCard/PosterCardPlaceholder.jsx";
import { createArray } from "../../helpers/simple.jsx";
import { useGetSectionQuery } from "../../services/request/themoviedbService.jsx";
import { useCollectionParams } from "../../hooks/useCollectionParams.jsx";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentLoadingSection, selectMaxSectionCollection } from "../../reducers/pageCollectionReducer.jsx";
import PropTypes from 'prop-types'
import { useHeightRef } from "../../context/ResizeProvider.jsx";

const PageSection = memo(({ section, skip, }) => {
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

const Page = ({ index: page }) => {
  const ref = useHeightRef()
  const maxSection = useSelector(selectMaxSectionCollection)
  const loadingSection = useSelector(selectCurrentLoadingSection)
  console.log('loadignSection', loadingSection)
  let render
  if(maxSection === undefined) {
    render = () => (
      <>
        <PageSection
          key={1}
          section={1}
          skip={false}
        />
        <PageSection
          key={2}
          section={2}
          skip={true}
        />
        <PageSection
          key={3}
          section={3}
          skip={true}
        />
      </>
    )
  } else {
    const prevSection = (page * 3) - 3
    const diff = maxSection - prevSection
    const sections = Math.min(diff, 3)
    const list = createArray(sections)
    render = () => 
      <>
        {list.map(index => <PageSection
            key={index}
            section={prevSection + index}
            skip={loadingSection < prevSection + index}
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
}

Page.displayName = 'Page'

Page.propTypes = {
  index: PropTypes.number.isRequired,
  maxSection: PropTypes.number,
}

export default Page
