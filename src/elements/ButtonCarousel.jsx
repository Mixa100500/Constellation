import styled from "styled-components";

export const ButtonCarousel = styled.button`

background-color: inherit;
cursor: pointer;
opacity: 0.75;
width: var(--carousel-min-button-width);
height: var(--carousel-min-button-width);

&:hover {
  opacity: 1;
}

@media screen and (min-width: 700px) {
  width: var(--carousel-middle-button-width);
  height: var(--carousel-middle-button-width);
}

@media screen and (min-width: 1101px) {
  width: var(--carousel-button-width);
  height: var(--carousel-button-width);
}
`