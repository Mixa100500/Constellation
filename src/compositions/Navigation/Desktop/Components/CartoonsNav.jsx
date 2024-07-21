import { LinkHeader, Title } from '../../styled.jsx'

export const DesktopCartoonsNav = () => {
	const CARTOONS_URL = '/popular/movies?genres=16'

	return (
		<div>
			<LinkHeader
				to={CARTOONS_URL}
				$dark={true}
				onClick={close}
			>
				All cartoons
			</LinkHeader>
		</div>
	)
}