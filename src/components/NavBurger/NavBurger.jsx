import styled from 'styled-components'
import burger from '../../../public/burger.svg'
import { ModalManager } from '../../context/ModalManagerProvider.jsx'
import { MobileNavScreen } from '../../compositions/Navigation/Mobile/Screen.jsx'

export const NavBurger = () => {
	return (
		<ModalManager content={<MobileNavScreen />}>
			<ButtonBurger>
				<Burger src={burger} />
			</ButtonBurger>
		</ModalManager>
	)
}

const Burger = styled.img`
	display: block;
	background-color: inherit;
	width: 36.5px;
	height: 36.5px;
`

const ButtonBurger = styled.button`
	background-color: inherit;
	cursor: pointer;
	@media screen and (min-width: 600px) {
		display: none;
	}
`
