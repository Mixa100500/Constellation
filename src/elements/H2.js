import styled from "styled-components"

export const H2 = styled.h2`
  margin: 0px;
  padding-top: ${({$verticalPadding}) => $verticalPadding && '1.7rem' };
  padding-bottom: ${({$verticalPadding}) => $verticalPadding && '1.7rem' };
  font-size: 2rem;
`