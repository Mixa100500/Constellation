import styled from "styled-components"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { paddingReducer } from "../../modifiers/padding/reducer"

export const Gallery = styled.div`
  position: relative;
	${paddingReducer};

	.slick-arrow.slick-prev,
	.slick-arrow.slick-next {
		display: none !important;
	}
`

Gallery.Header = Header
Gallery.Nav = Nav

export default Gallery