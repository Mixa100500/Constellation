import styled from "styled-components"
import { Header } from "./Header.jsx"
import { Nav } from "./Nav.jsx"
import { paddingReducer } from "../../modifiers/padding/reducer.jsx"
import { Body } from "./Body.jsx"

const Gallery = styled.div`
  position: relative;
	${paddingReducer};
`


Gallery.Body = Body
Gallery.Header = Header
Gallery.Nav = Nav

export default Gallery