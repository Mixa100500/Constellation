import logo from '../../logoWhite.png'
import { Link } from '../../elements/Link'
import styled from 'styled-components'
import { collections } from '../../compositions/Router/options'
import { H2 } from '../../elements/H2'

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
	
	.content-logo {
		display: flex;
		align-items: center;
	}
`



export const Header = () => {
	return (
		<header style={paddingStyle}>
			<ContainerHeader className='padding-horizontal'>
					<div className='container-logo'>
						<Link to='/' >
							<div className='content-logo'>
								<H2 $paddingTop='xl' $paddingBottom='xl'>Constellation</H2>
								<img
									className='container-logo__logo'
									src={logo}
									alt='Logo'
								/>
							</div>
						</Link>
					</div>
				<nav>
					<ul className='menu'>
						{collections.map((c) => {
							return (
								<li key={c.name}>
									<Link 
										$padding='md'
										to={`/popular/${c.url}`}>
										{c.name}
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</ContainerHeader>
		</header>
	)
}
