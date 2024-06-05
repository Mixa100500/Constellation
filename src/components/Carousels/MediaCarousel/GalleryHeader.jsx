import left48 from '../../../images/icons8-chevron-left-48.png'
import right48 from '../../../images/icons8-chevron-right-48.png'
import { Link } from '../../../elements/Link'
import { H2 } from '../../../elements/H2'
import { ButtonCarousel } from '../../../elements/ButtonCarousel'
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
        <ButtonCarousel
          onClick={props.prev}
          className='carousel-media__button'
        >
          <img src={left48} alt="left" />
        </ButtonCarousel>
        <ButtonCarousel
          onClick={props.next}
          className='carousel-media__button'
        >
          <img src={right48} alt="right" />
        </ButtonCarousel>
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

