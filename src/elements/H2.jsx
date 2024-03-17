import styled from "styled-components"
import { paddingReducer } from "../modifiers/padding/reducer"

export const H2 = styled.h2`
  margin: 0px;
  ${paddingReducer}
  font-size: 2rem;
`