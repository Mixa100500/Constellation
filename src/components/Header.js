import { Link } from 'react-router-dom'
import logo from '../logoWhite.png'
import { classes } from './classes'
import { collections } from '../App'

const paddingStyle = { padding: '0 20px' }

export const Header = ({ dark }) => {
	const class_color = dark ? classes.main_color : classes.second_color
	return (
		<header
			className={`${class_color}`}
			style={paddingStyle}>
			<div className='contianerLogo'>
				<div className='logo'>
					<h2>Constellation</h2>
					<img
						style={{ width: '36.8px', height: '36.8px' }}
						src={logo}
						alt='Logo'
					/>
				</div>
				<nav>
					<ul>
						{collections.map((c) => {
							return (
								<li key={c.name}>
									<Link to={`/popular/${c.name}`}>{c.name}</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
		</header>
	)
}
