import { useState } from "react"
import styled, { css } from "styled-components"
import downSvg from "../../images/down.svg";
import PropTypes from 'prop-types'

const FilterDropdownContent = styled.div`
  position: absolute;
  margin-top: 4px;
  width: 100%;
  z-index: 2;
`
const FilterDropdownInner = styled.div`
  padding: 16px;
  padding-top: 0;
  background: var(--color-second);
`

const ArrowImg = styled.img`
  width: 15px;
  ${(props) => props.$isActive && css`
      rotate: 180deg;
  `}
`

const DropdownWrapper = styled.div`
  position: relative;
`

const DropdownHeader = styled.button`
  height: 56px;
  font: inherit;
  color: white;
  width: 100%;
  border: 0;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: var(--color-second);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover {
    ${(props) => !props.$isActive && css`
      background-color: var(--color-second-hover);
    `}
  }

  ${(props) => props.$isActive && css`
    background-color: var(--color-second-inactive);
  `}
`


export const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <DropdownWrapper>
      <DropdownHeader onClick={toggle} $isActive={isOpen}>
        <div>
          {props.title}
        </div>
        <ArrowImg src={downSvg} alt="downSvg" $isActive={isOpen}/>
      </DropdownHeader>
      {
      isOpen &&
        <FilterDropdownContent>
          <FilterDropdownInner>
            {props.children}
          </FilterDropdownInner>
        </FilterDropdownContent>
      }
    </DropdownWrapper>
  )
}

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}