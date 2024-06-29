import styled from "styled-components";

export const CollectionList = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 40px;
  padding-bottom: 40px;
  
  @media screen and (min-width: 420px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 620px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 820px) {
    grid-template-columns: repeat(5, 1fr);
  } 

  @media screen and (min-width: 1018px) {
    grid-template-columns: repeat(6, 1fr);
  } 
`