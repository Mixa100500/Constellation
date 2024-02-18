import React from 'react';
import styled from 'styled-components';

const MoviePosterStyled = styled.div`
  position: relative;
`

const BageDateStyled = styled.div`
  position: absolute;
  top: 10px;
  background-color: var(--hover-bg-color);
  left: -7px;
  border-radius: 8px;
  padding: 2px 6px;
  font-weight: 600;
  background-color: var(--bage-bg-color);
  color: var(--main-bg-color);
`

const ImgStyled = styled.img`
  max-width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 8px;
`

const MoviePoster = ({ mediaInfo }) => {
  return (
    <MoviePosterStyled>
      <picture>
        <source
          media="(max-width: 977px)"
          srcSet={`https://image.tmdb.org/t/p/w300${mediaInfo.poster_path}`}
        />
        <ImgStyled
          src={`https://image.tmdb.org/t/p/w200${mediaInfo.poster_path}`}
          alt={mediaInfo.name || mediaInfo.original_title}
        />
      </picture>
      <BageDateStyled>{mediaInfo.date}</BageDateStyled>
    </MoviePosterStyled>
  );
};

export default MoviePoster;
