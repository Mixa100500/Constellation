import { Link } from 'react-router-dom'
import styled from 'styled-components'
import left48 from '../../../../images/icons8-chevron-left-48.png'
import right48 from '../../../../images/icons8-chevron-right-48.png'

const CarouselHeaderContiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8px;

  .button-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

  
  .buttonIMG {
    cursor: pointer;
    opacity: 0.75;
    width: var(--carousel-min-button-width);
  }

  .buttonIMG:hover {
    opacity: 1;
  }
  
  @media screen and (max-width: 400px) {
    .button-container {
      display: none;
    }
  }

  @media screen and (min-width: 700px) {
    .buttonIMG {
      width: var(--carousel-middle-button-width);
    }
  }

  @media screen and (min-width: 1101px) {
    margin: 0 12px;
    .buttonIMG {
			width: var(--carousel-button-width);
		}
  }

  @media screen and (min-width: 1148px) {
    .button-container {
      position: absolute;
      width: calc(
        var(--main-max-width) + (var(--carousel-button-width) / 4 * 3) * 2
      );
      bottom: 155.75px;
      left: calc(var(--carousel-button-width) / 4 * -3);
      justify-content: space-between;
    }
	}

`

const MediaCarouselHeader = (props) => {
	const label = props.label
  
	return (
		<CarouselHeaderContiner>
      <Link to={`/popular/${label}`}>
        <h2>Popular {label}</h2>
      </Link>
      <div className='button-container'>
        <img
          onClick={props.prev}
          src={left48}
          className='buttonIMG'
        />
        <img
          onClick={props.next}
          src={right48}
          className='buttonIMG'
        />
      </div>
		</CarouselHeaderContiner>
	)
}

export default MediaCarouselHeader
