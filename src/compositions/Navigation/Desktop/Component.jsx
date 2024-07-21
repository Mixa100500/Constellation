import { collectionsNames } from '../../Router/options.jsx'
import styled, { css } from 'styled-components'
import { DesktopMoviesNav } from './Components/MoviesNav.jsx'
import { DesktopSerialsNav } from './Components/SerialsNav.jsx'
import { useHeader } from '../../../context/HeaderManagerProvider.jsx'
import { DesktopCartoonsNav } from './Components/CartoonsNav.jsx'

export const HeaderDropdown = () => {
	const dropdown = useHeader.useDropdown()
	// const dropdown = 'movies'
	const toggle = useHeader.useToggle()
	const open = dropdown !== ''
	// const open = true
	const leave = (e) => {
		const currentLink = document.querySelector(`#header__Link__${dropdown}`)
		if (!currentLink.contains(e.relatedTarget)) {
			toggle('')
		}
	}

	return (
		<DropDownBody
			open={open}
			className="target"
			onMouseLeave={leave}
			id="header__dropdown__body"
		>
			<div>
				{switchDropDown(dropdown)}
			</div>
		</DropDownBody>
	)
}


const switchDropDown = (dropDown) => {
	switch (dropDown) {
		case collectionsNames.movies.name:
			return <DesktopMoviesNav />
		case collectionsNames.serials.name:
			return <DesktopSerialsNav />
		case collectionsNames.cartoons.name:
			return <DesktopCartoonsNav />
		default:
			null
	}
}

const DropDownBody = styled.div`
    position: absolute;
    top: 0;
    left: -1px;
    right: 0;
    margin-top: var(--header-height);
    background-color: var(--main-bg-color);
    height: 328px;
		padding: 24px;
    display: none;
    border-top: 1px solid var(--secondary-color);
    z-index: 101;
    animation: fadeIn 0.25s ease-in-out;
    //animation-delay: 0.25s;
    ${p => p.open &&
			css`
					display: block;
			`
    }
		
    @media screen and (max-width: 599px) {
			display: none;
		}

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`