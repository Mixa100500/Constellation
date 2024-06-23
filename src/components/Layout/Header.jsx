import logo from '../../logoWhite.png'
// import { Link } from '../../elements/Link'
// import styled from 'styled-components'
import { collections } from '../../compositions/Router/options.jsx'
// import { H2 } from '../../elements/H2'
import './Header.css'
import { Link } from 'react-router-dom'

const paddingStyle = { padding: '0 20px' }

// const ContainerHeader = styled.div`
// 	@media screen and (min-width: 40em) {
// 		display: flex;
// 		align-items: center;
// 		justify-content: space-between;
// 	}

// 	.container-logo {
// 		display: flex;
// 		align-items: center;
// 	}

// 	.container-logo__logo {
// 		width: 36.5px;
// 		height: 36.5px;
// 	}

// 	.menu {
// 		list-style: none;
// 		padding: 0;
// 		display: flex;
// 		justify-content: space-between;
// 	}
	
// 	.content-logo {
// 		display: flex;
// 		align-items: center;
// 	}
// `



export const Header = () => {
	return (
		<header  style={paddingStyle}>
			<div className='padding-horizontal header__container'>
					<div className='header__logo-wrapper'>
						<Link to='/' className='header__link' >
							<div className='header__logo-container'>
								<h2 className='padding-vertical--xl header__logo_text'>Constellation</h2>
								<img
									className='container-logo__logo'
									src={logo}
									alt='Logo'
								/>
							</div>
						</Link>
					</div>
				<nav>
					<ul className='header__menu'>
						{collections.map((c) => {
							return (
								<li key={c.name}>
									<Link
										className='padding--md header__link'
										to={`/popular/${c.url}`}>
										{c.name}
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
		</header>
	)
}
