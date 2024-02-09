import React from 'react';

const VideoPlayer = ({ imdbId }) => {
  return imdbId ? (
    <iframe
      height={480}
      src={`//4425413.svetacdn.in/IAF0wWTdNYZm?imdb_id=${imdbId}`}
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
