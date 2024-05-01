import left48 from '../../../images/icons8-chevron-left-48.png'
import right48 from '../../../images/icons8-chevron-right-48.png'
import { Link } from '../../../elements/Link'
import { H2 } from '../../../elements/H2'
import { ButtonImg } from '../../../elements/ButtonImg'
import Gallery from '../../../blocks/Gallery'
import PropTypes from 'prop-types'

const GalleryHeader = (props) => {
	const description = props.description
  
	return (
		<Gallery.Header className='padding-horizontal'>
      <Link to={`/popular/${description.url}`}>
        <H2 $paddingTop='xl' $paddingBottom='xl'>Popular {description.name}</H2>
      </Link>
      <Gallery.Nav>
        <ButtonImg
          onChange={props.prev}
          src={left48}
          className='carousel-media__button'
        />
        <ButtonImg
          onChange={props.next}
          src={right48}
          className='carousel-media__button'
        />
      </Gallery.Nav>
		</Gallery.Header>
	)
}

GalleryHeader.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
  description: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

export default GalleryHeader

