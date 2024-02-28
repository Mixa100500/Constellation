import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1101px) {
		position: absolute;
    width: 1090px;
    z-index: 0;
    left: calc(50% - 545px);
    bottom: calc(24px + 37px + 226.5px / 2 - 24px);
	}
`