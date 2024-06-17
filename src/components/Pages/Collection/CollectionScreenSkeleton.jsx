import styled from 'styled-components';
import { CollectionList } from './styled';
import { PosterCardPlaceholder } from '../../UI/Cards/PosterCard/PosterCardPlaceholder';
import { createArray } from '../../../helpers/simple';

const Layout = styled.div`
  max-width: var(--main-max-width);
  margin: 0 auto;
  @media screen and (min-width: 400px) {
    margin: 0 20px;
  }

  @media screen and (min-width: 1101px) {
    margin: 0 auto;
  }
`
const FilterPlaceholder = styled.div`
  max-width: 400px;
  border-radius: 6px;
  height: 88px;
  background-color: var(--filter-color);
  `

const HeadPlaceholder = styled.div`
  height: 32px;
  margin: 27px 0;
  background-color: var(--primary-bg-color);
`

export const CollectionScreenSkeleton = () => {
  const placeholders = createArray(20)
  return (
    <Layout>
      <FilterPlaceholder />
      <HeadPlaceholder />
      <CollectionList>
        {placeholders.map((item) => 
          <PosterCardPlaceholder key={item} />
        )}
      </CollectionList>
    </Layout>
  )
}

