import styled, { css } from "styled-components"
import { SVGDown } from "../../images/SvgDownArray.jsx"
import { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types';

export const NavDropDown = (props) => {
	const { children, title } = props
	const dropdownRef = useRef(null)
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen((prev) => !prev)
	}

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!dropdownRef.current.contains(event.target)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<DropdownWrapper ref={dropdownRef}>
			<DropdownHeader
				onClick={toggle}
				$isActive={isOpen}
			>
				<div className='transition--sm'>{title}</div>
				<SVGDown
					className='transition--sm'
					fill='currentColor'
					styled={ArrowSVG}
					$isActive={isOpen}
				/>
			</DropdownHeader>
			{isOpen && <FilterDropdownContent>{children}</FilterDropdownContent>}
		</DropdownWrapper>
	)
}

NavDropDown.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

const DropdownWrapper = styled.div`
	position: relative;
	height: 44px;
`

const DropdownHeader = styled.button`
	height: 20px;
	font: inherit;
	color: white;
	width: 100%;
	border: 0;
	/* padding: 24px 8px 0 8px; */
	border-radius: 4px;
	background-color: var(--main-bg-color);
	display: flex;
	align-items: center;
	gap: 15px;
	cursor: pointer;
	padding: 0 20px;
	&:hover {
		color: var(--button-bg-color);
	}
`

const ArrowSVG = styled.svg`
	width: 15px;
	height: fit-content;
	${(props) =>
		props.$isActive &&
		css`
			rotate: 180deg;
		`}
`

const FilterDropdownContent = styled.div`
	position: absolute;
	padding: 24px 20px;
	box-sizing: border-box;
	width: 100%;
	z-index: 2;
	background-color: var(--main-bg-color);
	will-change: transform, opacity;
	animation: dropdownEaseAbTest .3s ease forwards;
	transform-origin: center top;
	@keyframes dropdownEaseAbTest {

		0% {
			opacity: 0;
			transform: scaleY(0);
		}
	
		100% {
			opacity: 1;
			transform: scaleY(1);
		}
	}
`