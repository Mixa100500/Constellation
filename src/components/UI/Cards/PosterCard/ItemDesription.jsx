import { DatePlaceholder, PlaceholderDescription, TitlePlaceholder } from ".";
import { useVisible } from "../../../../context/VirtualVisibility";
import PropTypes from 'prop-types'

const height = { height: '37px' }

const ItemDescription = (props) => {
  const film = props.film
  let visible = useVisible()
	if(visible === null) {
    visible = true;
	}

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

ItemDescription.propTypes = {
  film: PropTypes.object.isRequired
}


export default ItemDescription