import styled from 'styled-components';
import PropTypes from 'prop-types'

const MoviePosterWrapper = styled.div`
  position: relative;
`

const BadgeDate = styled.div`
  position: absolute;
  top: 10px;
  background-color: var(--hover-bg-color);
  left: -7px;
  border-radius: 8px;
  padding: 2px 6px;
  /* font-weight: 600; */
  background-color: var(--badge-bg-color);
  color: var(--main-bg-color);
`

const ImgPoster = styled.img`
  display: block;
  max-width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: var(--poster-radius);
`

const MoviePoster = ({ mediaInfo, loaded }) => {
  return (
    <MoviePosterWrapper>
      {loaded && 
        <>
          <picture>
            <source
              media="(max-width: 977px)"
              srcSet={`https://image.tmdb.org/t/p/w300${mediaInfo.poster_path}`}
            />
            <ImgPoster
              src={`https://image.tmdb.org/t/p/w200${mediaInfo.poster_path}`}
              alt={mediaInfo.name || mediaInfo.original_title}
            />
          </picture>
          <BadgeDate>{mediaInfo.date}</BadgeDate>
        </>
      }
    </MoviePosterWrapper>
  )
}

MoviePoster.propTypes = {
  loaded: PropTypes.bool,
  mediaInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    name: PropTypes.string,
    original_title: PropTypes.string,
    date: PropTypes.string,
  }).isRequired
}

export default MoviePoster;
