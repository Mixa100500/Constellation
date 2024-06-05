import { PosterContainer } from './styled';
import Layout from '../../Layout/Layout';
import styled from 'styled-components';

const PlayerPlaceholder = styled.div`
  position: relative;
  width: 100%;
  background-color: black;
  aspect-ratio: 16/9;
`

const PosterSkeleton = styled.div`
  display: block;
  max-width: 300px;
  aspect-ratio: 2 / 3;
  border-radius: var(--poster-radius);
`

export const WatchScreenSkeleton = () => {
  return (
    <Layout
      top='20'
      bottom='20'
    >
      <PosterContainer>
        <PosterSkeleton />
      </PosterContainer>
      <PlayerPlaceholder />
  </Layout>
  );
};
