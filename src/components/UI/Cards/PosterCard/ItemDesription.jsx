import { DatePlaceholder, PlaceholderDescription, TitlePlaceholder } from ".";
import { useVisible } from "../../../../context/VirtualVisibility";
import PropTypes from 'prop-types'

const height = { height: '37px' }

const ItemDesription = (props) => {
  const visible = useVisible()
  const film = props.film

  return (
    <PlaceholderDescription style={height}>
      {visible ?
        <>
          <h3 className="title block--ellipsis">{film.title || film.name}</h3>
          <div className="date block--ellipsis">{film.year}</div>
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

ItemDesription.propTypes = {
  film: PropTypes.object.isRequired
}


export default ItemDesription