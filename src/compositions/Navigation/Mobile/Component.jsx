import styled from 'styled-components'
import { useCloseModal } from '../../../context/ModalManagerProvider.jsx'
import { MoviesNav } from './components/MoviesNav.jsx'
import { SerialsNav } from './components/SerialsNav.jsx'
import { CartoonsNav } from './components/CartoonsNav.jsx'
import { NavDropDown } from '../../FilterDropDowns/NavDropDown.jsx'
import { ModalWrapper } from './styled.jsx'
import { useLayoutEffect } from 'react'

const MobileNav = () => {
	const close = useCloseModal()
	useLayoutEffect(() => {
		const container = document.querySelector('.containerApp')

		container.style.minHeight = '100vh'
		container.style.height = '100vh'
		return () => {
			container.style.height = ''
			container.style.minHeight = ''
		}
	}, [])

	return (
		<ModalWrapper>
			<ModalContent>
				<NavBar>
					<DropList>
						<NavDropDown
							key={1}
							title='movies'
						>
							<MoviesNav />
						</NavDropDown>
						<NavDropDown
							key={2}
							title='serials'
						>
							<SerialsNav />
						</NavDropDown>
						<NavDropDown
							key={3}
							title='cartoons'
						>
							<CartoonsNav />
						</NavDropDown>
					</DropList>
				</NavBar>
			</ModalContent>
			<ExitButton onClick={close}>
				<SvgExit
					viewBox='0 0 11 11'
					stroke='white'
					width='20px'
				>
					<path d='M1,1 L10,10'></path>
					<path d='M10,1 L1,10'></path>
				</SvgExit>
			</ExitButton>
			<ModalCloser onClick={close} />
		</ModalWrapper>
	)
}

export default MobileNav

const DropList = styled.div`
	padding: 24px 0;
`
const ModalCloser = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
`

const SvgExit = styled.svg`
	width: 33.5px;
	height: 33.5px;
	background-color: inherit;
	display: block;
	cursor: pointer;
`

const ExitButton = styled.button`
	background-color: inherit;
	width: 33.5px;
	height: 33.5px;
	position: sticky;
	top: 0;
	right: 0;
`

const NavBar = styled.ul`
	display: flex;
	flex-direction: column;
	height: 100%;
`

const ModalContent = styled.div`
	flex-basis: 360px;
	min-width: fit-content;
	height: 100%;
	background-color: var(--main-bg-color);
`
