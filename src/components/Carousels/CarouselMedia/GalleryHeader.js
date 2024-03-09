import left48 from '../../../images/icons8-chevron-left-48.png'
import right48 from '../../../images/icons8-chevron-right-48.png'
import { Link } from '../../../elements/Link'
import { H2 } from '../../../elements/H2'
import { ButtonImg } from '../../../elements/BottonImg'
import Gallery from '../../../blocks/Gallery'
import PropTypes from 'prop-types'

const GalleryHeader = (props) => {
	const label = props.label
  
	return (
		<Gallery.Header className='padding-horizontal'>
      <Link to={`/popular/${label}`}>
        <H2 $paddingTop='xl' $paddingBottom='xl'>Popular {label}</H2>
      </Link>
      <Gallery.Nav>
        <ButtonImg
          onClick={props.prev}
          src={left48}
          className='carousel-media__button'
        />
        <ButtonImg
          onClick={props.next}
          src={right48}
          className='carousel-media__button'
        />
      </Gallery.Nav>
		</Gallery.Header>
	)
}

GalleryHeader.propTypes = {
  label: PropTypes.string.isRequired,
}

export default GalleryHeader

