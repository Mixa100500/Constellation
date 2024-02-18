import logo from '../logoWhite.png'
import { A } from '../elements/A'
import { actionModifierPadding } from '../modifiers/padding'
import styled from 'styled-components'
import { collections } from '../сompositions/Router'
import { H2 } from '../elements/H2'

const paddingStyle = { padding: '0 20px' }

const ContainerHeader = styled.div`
	@media screen and (min-width: 40em) {

		display: flex;
		align-items: center;
		justify-content: space-between;
		
		.slick-dots {
			bottom: -25px;
		} 
	}

	.container-logo {
		display: flex;
		align-items: center;
	}

	.container-logo__logo {
		width: 36.5px;
		height: 36.5px;
	}

	.menu {
		list-style: none;
		padding: 0;
		display: flex;
		justify-content: space-between;
	}
`

export const Header = () => {
	return (
		<header style={paddingStyle}>
			<ContainerHeader className='padding-horizontal'>
				<A to='/' >
					<div className='container-logo'>
						<H2 $verticalPadding={true}>Constellation</H2>
						<img
							className='container-logo__logo'
							src={logo}
							alt='Logo'
						/>
					</div>
				</A>
				<nav>
					<ul className='menu'>
						{collections.map((c) => {
							return (
								<li key={c.name}>
									<A
										$padding={actionModifierPadding.padding}
										to={`/popular/${c.name}`}>
										{c.name}
									</A>
								</li>
							)
						})}
					</ul>
				</nav>
			</ContainerHeader>
		</header>
	)
}
