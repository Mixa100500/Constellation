import React from 'react';
import styled from 'styled-components';
const apiKey = process.env.REACT_APP_PLAYER_API_KEY
const VideoContianer = styled.div`
position: relative;
width: 100%;
height: 480px;
background-color: black;

  .loading-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
  }
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0; width: 100%;
  height: 100%;
  z-index: 1;
`


const VideoPlayer = ({ imdbId }) => {
  return <VideoContianer>
      {imdbId && <>
        <div className='loading-text'>loading...</div>
        <Iframe
          height={480}
          src={`//4425413.svetacdn.in/${apiKey}?imdb_id=${imdbId}`}
          allowFullScreen
          frameBorder={0}
        />
      </>}
    </VideoContianer>
}

export default VideoPlayer;
