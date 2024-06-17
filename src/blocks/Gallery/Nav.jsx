import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1101px) {
		position: absolute;
    width: 1090px;
    left: calc(50% - 545px);
    bottom: calc(24px + 37px + 226.5px / 2 - 24px);
	}
  ${({$visible}) => $visible && 'width:72px'};
  button {
    ${({$visible}) => $visible || 'display:none'};
  }
`