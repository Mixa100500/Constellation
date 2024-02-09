import styled from "styled-components";

export const CollectionList = styled.div`
  // -moz-column-gap: 20px;
  // column-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));
  row-gap: 40px;
  margin-bottom: 40px;

  .title {
    margin: 0;
    font-size: 0.8rem;
  }

  .date {
    font-size: 0.7rem;
    color: var(--second-color);
  }

  img {
    transition: transform 0.3s;
    transform-origin: bottom;

    &:hover {
      transform: scaleY(1.04) scaleX(1.03);
    }
  }
`