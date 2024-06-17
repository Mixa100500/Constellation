import styled from 'styled-components'

export const PosterContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 50%;
  max-width: 216px;
  z-index: 1;
@media (min-width: 1101px) {
  max-width: 224px;
}
@media (min-width: 420px) {
  flex: 0 0 33.33%;
}

@media (min-width: 620px) {
  flex: 0 0 25%;
}

@media (min-width: 820px) {
  flex: 0 0 20%;
}

@media (min-width: 1018px) {
  flex: 0 0 16.6666%;
}

  .date {
    font-size: 0.7rem;
    color: var(--secondary-color);
    margin-top: 3px
  }
  .title {
    margin: 0;
    font-size: 0.8rem;
    margin-top: 5px;
  }
`
export const PlaceholderImg = styled.div`
	max-width: 200px;
	aspect-ratio: 2/3;
	border-radius: var(--poster-radius);
	background-color: var(--primary-bg-color);
`

export const TitlePlaceholder = styled.div`
	height: 15px;
	width: 90%;
	border-radius: 5px;
	background-color: var(--primary-bg-color);
`

export const DatePlaceholder = styled.div`
	height: 14px;
	width: 75%;
	border-radius: 4px;
	background-color: var(--primary-bg-color);
  `
  
  export const PosterImg = styled.img`
  display: block;
  max-width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: var(--poster-radius);
  background-color: var(--primary-bg-color);
  `
  
  export const PosterImgPlaceholder = styled.div`
    transition: transform 0.3s;
    transform-origin: bottom;
    max-width: 200px;
    aspect-ratio: 2/3;
    border-radius: var(--poster-radius);
    background-color: var(--primary-bg-color);

    &:hover {
      transform: scaleY(1.04) scaleX(1.03);
    }
`

export const PlaceholderDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  align-items: left;

  .date {
    font-size: 0.7rem;
    color: var(--secondary-color);
    margin-top: 3px;
  }
  .title {
    margin: 0;
    font-size: 0.8rem;
    margin-top: 5px;
    max-width: 120px;
  }

  @media (min-width: 320px) {
    .title {
      max-width: 140px;
    }
  }
  @media (min-width: 350px) {
    .title {
      max-width: 160px;
    }
  }

  @media (min-width: 420px) {
    .title {
      max-width: 112px;
    }
  }

  @media (min-width: 500px) {
    .title {
      max-width: 140px;
    }
  }

  @media (min-width: 620px) {
    .title {
      max-width: 120px;
    }
  }

  @media (min-width: 660px) {
    .title {
      max-width: 140px;
    }
  }

  @media (min-width: 700px) {
    .title {
      max-width: 150px;
    }
  }

  @media (min-width: 820px) {
    .title {
      max-width: 135px;
    }
  }

  @media (min-width: 860px) {
    .title {
      max-width: 145px;
    }
  }

  @media (min-width: 900px) {
    .title {
      max-width: 155px;
    }
  }

  @media (min-width: 950px) {
    .title {
      max-width: 160px;
    }
  }

  @media (min-width: 1018px) {
    .title {
      max-width: 145px;
    }
  }
`