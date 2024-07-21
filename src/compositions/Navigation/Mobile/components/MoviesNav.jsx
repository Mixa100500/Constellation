import { GENRES_MOVIES_IDS, GENRES_MOVIES_OBJECT } from '../../../../constants/genres.js'
import { useCloseModal } from '../../../../context/ModalManagerProvider.jsx'
import { LinkHeader, ListGroup, Title } from '../../styled.jsx'


export const MoviesNav = () => {
	const AllIds = GENRES_MOVIES_IDS
	const byId = GENRES_MOVIES_OBJECT
	const MOVIES_URL = '/popular/movies'
	const close = useCloseModal()

	return (
		<>
			<LinkHeader
				to={MOVIES_URL}
				$dark={true}
				onClick={close}
			>
				All movies
			</LinkHeader>
			<ListGroup>
				<Title $top={12}>Genres</Title>
				{AllIds.map((id) => (
					<LinkHeader
						to={`${MOVIES_URL}?genres=${id}`}
						$top={12}
						key={id}
						$dark={true}
						onClick={close}
					>
						{byId[id]}
					</LinkHeader>
				))}
			</ListGroup>
		</>
	)
}
