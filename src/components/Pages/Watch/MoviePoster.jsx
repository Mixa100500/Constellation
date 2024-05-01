import styled from 'styled-components';
import PropTypes from 'prop-types'

const MoviePosterStyled = styled.div`
  position: relative;
`

const BadgeDateStyled = styled.div`
  position: absolute;
  top: 10px;
  background-color: var(--hover-bg-color);
  left: -7px;
  border-radius: 8px;
  padding: 2px 6px;
  font-weight: 600;
  background-color: var(--badge-bg-color);
  color: var(--main-bg-color);
`

const ImgStyled = styled.img`
  max-width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: var(--poster-radius);
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
      <BadgeDateStyled>{mediaInfo.date}</BadgeDateStyled>
    </MoviePosterStyled>
  )
}

MoviePoster.propTypes = {
  mediaInfo: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    name: PropTypes.string,
    original_title: PropTypes.string,
    date: PropTypes.string.isRequired
  }).isRequired
}

export default MoviePoster;
