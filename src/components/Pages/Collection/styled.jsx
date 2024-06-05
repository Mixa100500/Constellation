import styled from "styled-components";

export const CollectionList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
  row-gap: 40px;
  padding-bottom: 40px;
  
  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(146px, 1fr));
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));
  } 
`