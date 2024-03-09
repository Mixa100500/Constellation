import React from 'react';
import PropTypes from 'prop-types'
const noMargin = { marginTop: "0px" }

const GenresList = ({ genres }) => {
  return (
    genres && (
      <div style={noMargin}>
        {genres.map((genre, index) => (
          <span key={genre}>
            {genre}
            {index < genres.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
    )
  )
}

GenresList.propType = {
  genres: PropTypes.array.isRequired,
}

export default GenresList;
