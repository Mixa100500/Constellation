import { DatePlaceholder, PlaceholderDescription, TitlePlaceholder } from "./index.jsx"
import { useVisible } from "../../../context/VirtualVisibility.jsx"
import PropTypes from 'prop-types'

const height = {
  height: '37px',
}

const ItemDescription = (props) => {
  const film = props.film

  return (
    <PlaceholderDescription style={height}>
      {film ?
        <>
          <h3 className="title block--ellipsis">
            {film.title || film.name}
          </h3>
          <div className="date block--ellipsis">
            {film.year}
          </div>
        </>
        :
        <>
          <TitlePlaceholder className="title" />
          <DatePlaceholder className="date" />
        </>
      }
    </PlaceholderDescription>
  )
}

ItemDescription.propTypes = {
  film: PropTypes.object,
}


export default ItemDescription