import styled from 'styled-components';
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { selectPlayerLoaded, setLoaded } from '../../reducers/kinoboxPlayerReducer.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectOpenedMovieImdbId } from '../../reducers/CurrentWatch/currentWatchReducer.jsx';

// const apiKey = import.meta.env.VITE_PLAYER_API_KEY
const VideoContainer = styled.div`
position: relative;
width: 100%;
background-color: black;
aspect-ratio: 16/9;

  .loading-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
  }
`

const KinoboxPlayer = ({ imdbId }) => {
  const loaded = useSelector(selectPlayerLoaded)
  const dispatch = useDispatch()

  useEffect(() => {
    if(imdbId && !loaded) {
      const script = document.createElement('script')
      script.src = 'https://kinobox.tv/kinobox.min.js'
      script.async = true
      script.onload = () => {
        // eslint-disable-next-line no-undef
        kbox('.kinobox_player', {
          search: {imdb: imdbId },
        })
        dispatch(setLoaded())
      }
      document.body.appendChild(script)
      return
    }
    if(loaded) {
      // eslint-disable-next-line no-undef
      kbox('.kinobox_player', {search: {imdb: imdbId }})
    }
  }, [imdbId])
  return (
    <div className="kinobox_player"></div>
  )
}

const VideoPlayer = () => {
  const imdbId = useSelector(selectOpenedMovieImdbId)

  return <VideoContainer>
      {imdbId && <>
        <div className='loading-text'>loading...</div>
        <KinoboxPlayer imdbId={imdbId}/>
      </>}
    </VideoContainer>
}

VideoPlayer.propTypes = {
  imdbId: PropTypes.string
}



export default VideoPlayer;
