import React from 'react';

const GenresList = ({ genres }) => {
  return (
    genres && (
      <div style={{ marginTop: "0px" }}>
        {genres.map((genre, index) => (
          <span key={genre}>
            {genre}
            {index < genres.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
    )
  );
};

export default GenresList;
