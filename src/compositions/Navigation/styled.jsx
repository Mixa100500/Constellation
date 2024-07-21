import styled, { css } from 'styled-components'
import { Link } from '../../elements/Link.jsx'

export const LinkHeader = styled(Link)`
	height: 20px;
	${(p) =>
	p.$top &&
	css`
			padding-top: ${p.$top}px;
		`}
	${(p) =>
	p.$dark &&
	css`
			color: var(--dark-color);
		`}
`
export const ListGroup = styled.div`
	padding-top: 24px;
`

export const Title = styled.div`
	height: 20px;
`