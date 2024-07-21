import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'


const Layout = styled.div`
    max-width: var(--main-max-width);
    margin: 0 auto;

    ${(p) =>
            p.top &&
            css`
			padding-top: ${p.top}px;
		`
    }

    ${(p) =>
            p.bottom &&
            css`
			padding-top: ${p.bottom}px;
		`
    }

    @media screen and (min-width: 400px) {
    margin: 0 20px;
}

    @media screen and (min-width: 1101px) {
        margin: 0 auto;
    }
`

Layout.defaultProps = {
	top: undefined,
	bottom: undefined,
}

Layout.shouldForwardProp = (prop) => {
	return prop !== 'top' && prop !== 'bottom'
}


Layout.propTypes = {
	children: PropTypes.node.isRequired,
	top: PropTypes.string,
	bottom: PropTypes.string,
}

export default Layout
