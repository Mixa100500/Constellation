const containerStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "stretch",
  flexDirection: "column",
  alignItems: "left",
}

const ItemDesription = (props) => {
  const film = props.film;
  return (
    <div
      style={containerStyle}
    >
      <h3 className="title block--ellipsis">{film.title || film.name}</h3>
      <div className="date block--ellipsis">{film.release_date || film.first_air_date}</div>
    </div>
  )
}


export default ItemDesription