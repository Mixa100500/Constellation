import logo from '../../logoWhite.png'
import { collections, collectionsNames } from '../../compositions/Router/options.jsx'
import styled, { css } from 'styled-components'
import { H2 } from '../../elements/H2.jsx'
// import { Link } from '../../elements/Link.jsx'
import { NavBurger } from '../NavBurger/NavBurger.jsx'
import Layout from './Layout.jsx'
import { Link } from '../../elements/Link.jsx'
import { useHeader } from '../../context/HeaderManagerProvider.jsx'
import { HeaderDropdown } from '../../compositions/Navigation/Desktop/Component.jsx'

export const Header = () => {
	const toggle = useHeader.useToggle()
	const onEnter = (type, eventEnter) => {
		toggle(type)
	}

	const leave = (event) => {
		const dropdown = document.querySelector('#header__dropdown__body')
		if(event.relatedTarget === window) {
			toggle('')
			return
		}
		if(!dropdown.contains(event.relatedTarget)) {
			toggle('')
		}
	}

	return (
		<header>
			<Layout>
				<div className="padding-horizontal">
					<HeaderContainer>
						<HeaderInner>
							<LogoWrapper>
								<NavBurger />
								<Link
									to="/"
								>
									<LogoContainer>
										<H2 className="padding-vertical--lg">Constellation</H2>
										<Logo
											src={logo}
											alt="Logo"
										/>
									</LogoContainer>
								</Link>
							</LogoWrapper>
							<nav>
								<MenuList>
									{collections.map((c) => (
										<NavButton key={c.name}>
											<MenuLink
												onMouseLeave={leave}
												onMouseEnter={(e) => onEnter(c.name, e)}
												className="padding--sm target"
												to={`/popular/${c.url}`}
												id={`header__Link__${c.name}`}
											>
											<span className="center">
												{c.name}
											</span>
											</MenuLink>
										</NavButton>
									))}
								</MenuList>
							</nav>
						</HeaderInner>
						<HeaderDropdown />
					</HeaderContainer>
				</div>
			</Layout>
		</header>
	)
}


const MenuLink = styled(Link)`
    height: var(--header-height);
    box-sizing: border-box;
    text-align: center;
    padding-top: 0;
    padding-bottom: 0;

    & .center {
        line-height: var(--header-height);
    }
`

const HeaderContainer = styled.div`
    position: relative;
`

const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media screen and (min-width: 600px) {
        gap: 0;
    }
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 36.5px;
    height: 36.5px;
`

const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
`

const NavButton = styled.li`
    display: none;
    @media screen and (min-width: 600px) {
        display: block;
    }
`