import React from 'react';
const apiKey = process.env.REACT_APP_PLAYER_API_KEY

const VideoPlayer = ({ imdbId }) => {
  return imdbId ? (
    <iframe
      height={480}
      src={`//4425413.svetacdn.in/${apiKey}?imdb_id=${imdbId}`}
      allowFullScreen
      frameBorder={0}
    />
  ) : (
    <div className="watch-container__loading">
      loading...
    </div>
  );
};

export default VideoPlayer;
