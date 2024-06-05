import { CollectionList } from "../../components/Pages/Collection/styled";
import PosterCard from "../../components/UI/Cards/PosterCard/PosterCard";
import { PosterCardPlaceholder } from "../../components/UI/Cards/PosterCard/PosterCardPlaceholder";
import { createArray } from "../../helpers/simple";
import { useGetSectionQuery } from "../../services/request/themoviedbService";
import { useHeightRef } from "../../context/ResizeProvider";
import { useCollectionParams } from "../../hooks/useCollectionParams";
import { memo } from "react";


const PageSection = memo(({ section, skip }) => {
  const { type, genres } = useCollectionParams()
  const { data, isSuccess } = useGetSectionQuery({ section, type, genres }, {
    skip
  })
  
  if(!isSuccess) {
    const placeholders = createArray(10)
    return <>
      {placeholders.map((item) => 
        <PosterCardPlaceholder key={item} />
      )}
    </>
  }

  return <>
    {data.list.map((info) => (
      <PosterCard info={info} key={info.id} />
    ))}
  </>
})

PageSection.displayName = 'PageSection'

const Page = ({ index: page, maxSection, loadingSection }) => {
  // const ref = useHeightRef()

  let render

  render = () => (
    <>
      <PageSection
        key={1}
        section={1}
        skip={true}
      />
      {/* <PageSection
        key={2}
        section={2}
        skip={true}
      />
      <PageSection
        key={3}
        section={3}
        skip={true}
      /> */}
    </>
  )
  // if(maxSection === undefined) {

  // } else {
  //   const prevSection = (page * 3) - 3
  //   const diff = maxSection - prevSection
  //   const sections = Math.min(diff, 3)
  //   const list = createArray(sections)
  //   render = () => 
  //     <>
  //       {list.map(index => <PageSection
  //           key={index}
  //           section={prevSection + index}
  //           skip={loadingSection < prevSection + index}
  //         />
  //       )}
  //     </>
  // }
  // const props = {}
  // if(page === 1) {
  //   props.ref = ref
  // }
  return (
    <CollectionList
      // {...props}
    >
      {render()}
    </CollectionList>
  )
}

Page.displayName = 'Page'

export default Page
