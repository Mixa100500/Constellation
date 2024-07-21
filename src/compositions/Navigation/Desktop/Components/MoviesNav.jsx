import { GENRES_MOVIES_IDS, GENRES_MOVIES_OBJECT } from '../../../../constants/genres.js'
import { LinkHeader, Title } from '../../styled.jsx'
import { TwoColumn } from '../styled.jsx'

export const DesktopMoviesNav = () => {
	const AllIds = GENRES_MOVIES_IDS
	const byId = GENRES_MOVIES_OBJECT
	const MOVIES_URL = '/popular/movies'

	return (
		<div>
			<Title $top={12}>Genres</Title>
			<TwoColumn>
				{AllIds.map((id) => (
					<LinkHeader
						to={`${MOVIES_URL}?genres=${id}`}
						$top={8}
						key={id}
						$dark={true}
						onClick={close}
					>
						{byId[id]}
					</LinkHeader>
				))}
			</TwoColumn>
		</div>
	)
}