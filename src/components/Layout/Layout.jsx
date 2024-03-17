import styled from "styled-components"
import PropTypes from 'prop-types'

const Content = styled.div`
  max-width: var(--main-max-width);
  margin: 0 auto;
  padding-top: ${(props) => props.top}px;
  padding-bottom: ${(props) => props.bottom}px;

  @media screen and (min-width: 400px) {
    margin: 0 20px;
    padding-top: ${(props) => props.top}px;
    padding-bottom: ${(props) => props.bottom}px;
  }

  @media screen and (min-width: 1101px) {
    margin: 0 auto;
    padding-top: ${(props) => props.top}px;
    padding-bottom: ${(props) => props.bottom}px;
  }
`

Content.defaultProps = {
  top: undefined,
  bottom: undefined,
};

Content.shouldForwardProp = (prop) => {
  return prop !== 'top' && prop !== 'bottom'
}

const Layout = (props) => {
  return (
    <div>
      <Content top={props.top} bottom={props.bottom}>
        {props.children}
      </Content>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
