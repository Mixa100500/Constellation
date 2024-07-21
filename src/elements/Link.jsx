import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { paddingReducer } from "../modifiers/padding/reducer.jsx";

export const Link = styled(RouterLink)`
  display: block;
  color: white;
  text-decoration: none;
  transition: color 0.5s ease;
  ${paddingReducer}

  &:hover {
    color: var(--button-bg-color);
  }
  
`