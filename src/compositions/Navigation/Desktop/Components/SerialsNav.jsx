import { GENRES_SERIALS_IDS, GENRES_SERIALS_OBJECT } from '../../../../constants/genres.js'
import { TwoColumn } from '../styled.jsx'
import { LinkHeader, Title } from '../../styled.jsx'

export const DesktopSerialsNav = () => {
	const AllIds = GENRES_SERIALS_IDS
	const byId = GENRES_SERIALS_OBJECT
	const SERIALS_URL = '/popular/serials'

	return (
		<div>
			<Title $top={12}>Genres</Title>
			<TwoColumn>
				{AllIds.map((id) => (
					<LinkHeader
						to={`${SERIALS_URL}?genres=${id}`}
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