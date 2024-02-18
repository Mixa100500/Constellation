import { Link } from "react-router-dom";
import styled from "styled-components";
import { modifierPadding } from "../modifiers/padding";

export const A = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: var(--button-bg-color);
  }
  padding: ${({$padding}) => $padding ? modifierPadding[$padding] : ''};
`