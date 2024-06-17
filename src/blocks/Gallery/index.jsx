import styled from "styled-components"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { paddingReducer } from "../../modifiers/padding/reducer"
import { Body } from "./Body"

export const Gallery = styled.div`
  position: relative;
	${paddingReducer};
`


Gallery.Body = Body
Gallery.Header = Header
Gallery.Nav = Nav

export default Gallery