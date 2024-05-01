import { CollectionList } from "../../components/Pages/Collection/styled";
import PosterCard from "../../components/UI/Cards/PosterCard/PosterCard";
import { PosterCardPlaceholder } from "../../components/UI/Cards/PosterCard/PosterCardPlaceholder";
import VirtualVisibility from "../../context/VirtualVisibility";
import { createArray } from "../../helpers/simple";
import { useGetSectionQuery } from "../../services/request/themoviedbService";
import { useParams, useSearchParams } from 'react-router-dom'

const placeholders = createArray(20)

const PageSection = ({ section }) => {
  const type = useParams().type
  const [searchParams] = useSearchParams()
  const genres = searchParams.get('genres')
  
  const { data, isLoading } = useGetSectionQuery({ section, type, genres })

  if(isLoading) {
    return <>
      {placeholders.map((item) => 
        <PosterCardPlaceholder key={item} />
      )}
    </>
  }
  return <>
    {data.map((info) => (
      <PosterCard film={info} key={info.id} />
    ))}
  </>
}

const Page = ({ index, isVisible }) => {
  if(index !== 1) {
    index *= 3
  }

  return (
      <VirtualVisibility isVisible={isVisible}>
        <CollectionList>
          <PageSection section={index}/>
          <PageSection section={index + 1}/>
          <PageSection section={index + 2}/>
        </CollectionList>
      </VirtualVisibility>
  );
};

export default Page;
